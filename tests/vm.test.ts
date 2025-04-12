import { NilValue, NumberValue, StringValue } from "@src/interpreter/types";
import { VMBuilder } from "@src/vm";
import { expectToBeNil, expectToBeNumber } from "./interpreter/test_utils";
import { LuaLangError, NotYetImplemented, RuntimeError } from "@src/interpreter/errors";

test("vm execution", () => {
    const lua = `
    a = 1
    b = 2
    while a < 5 do
      b = b * 2
      a = a + 1
    end
    return b
    `;
    const vm = new VMBuilder().build();
    const result = vm.executeOnce(lua);
    expect(result.hasReturnValue()).toBeTruthy();
    const returnValue = result.returnValueAsList();
    expect(returnValue).toBeInstanceOf(Array);
    expect(returnValue.length).toBe(1);
    expect((returnValue[0] as NumberValue).number).toBe(32);
    const a = result.globalVar("a");
    expect(a).toBeInstanceOf(NumberValue);
    expect((a as NumberValue).number).toBe(5);
    expect(result.globalVar("not-exist")).toBeInstanceOf(NilValue);
});

test("vm assignments and scopes", () => {
    const lua = `
    a, b, c = 1,2,3
    q, w = 1
    i = 42, 90
    do
      local x,c
      x,c = 3,4
      c = 100
      local b = 200
    end
    z = 90
    `;
    const result = new VMBuilder().build().executeOnce(lua);
    expect(result.globalVar("x")).toBeInstanceOf(NilValue);
    expect(result.globalVar("w")).toBeInstanceOf(NilValue);
    expectToBeNumber(result.globalVar("a"), 1);
    expectToBeNumber(result.globalVar("b"), 2);
    expectToBeNumber(result.globalVar("c"), 3);
    expectToBeNumber(result.globalVar("q"), 1);
    expectToBeNumber(result.globalVar("i"), 42);
    expectToBeNumber(result.globalVar("z"), 90);
});

test("vm visibility scope", () => {
  const lua = `
  a = 10
  do
    local a = a + 10
    a = a + 10
    b = a
  end
  `;
  const result = new VMBuilder().build().executeOnce(lua);
  expectToBeNumber(result.globalVar("a"), 10);
  expectToBeNumber(result.globalVar("b"), 30);
});

test("swap", () => {
  const lua = `
  a,b,c = 1,2,3
  a,b,c = b,c,a
  `;
  const result = new VMBuilder().build().executeOnce(lua);
  expectToBeNumber(result.globalVar("a"), 2);
  expectToBeNumber(result.globalVar("b"), 3);
  expectToBeNumber(result.globalVar("c"), 1);
});

test("not implemented feature", () => {
    const lua = `
    a  = 1
    goto whatever
    `;
    let exception;
    try {
      new VMBuilder().build().executeOnce(lua);
    } catch (e) {
      exception = e;
    }
    expect(exception).toBeInstanceOf(NotYetImplemented);
    expect((exception as NotYetImplemented).message)
      .toBe("[0000] Feature not yet implemented(line: 3, col: 4): goto");
});

test("injecting global variable", () => {
  const lua = `
  a  = 1 + b
  return a
  `;
  const vm = new VMBuilder().build();
  const thread = vm.newThread();
  thread.setLuaVar(StringValue.from("b"), NumberValue.from(2));
  const result = thread.execute(lua);
  expectToBeNumber(result.globalVar("a"), 3);
  expectToBeNumber(result.globalVar("b"), 2);
  expect(result.hasReturnValue()).toBeTruthy();
  expect(result.returnValueAsList().length).toBe(1);
  expectToBeNumber(result.returnValueAsList()[0], 3);
});

test("thread keeps state between calls", () => {
  const lua1 = `
  b = 10
  return 99
  `;
  const lua2 = `
  d = a + b + c
  return d
  `;
  const vm = new VMBuilder().build();
  const thread = vm.newThread();
  thread.setLuaVar(StringValue.from("a"), NumberValue.from(1));
  const result1 = thread.execute(lua1);
  expectToBeNumber(result1.globalVar("a"), 1);
  expectToBeNumber(result1.globalVar("b"), 10);
  expectToBeNil(result1.globalVar("c"));
  expectToBeNil(result1.globalVar("d"));
  expect(result1.hasReturnValue()).toBeTruthy();
  expect(result1.returnValueAsList().length).toBe(1);
  expectToBeNumber(result1.returnValueAsList()[0], 99);

  thread.setLuaVar(StringValue.from("c"), NumberValue.from(100));
  const result2 = thread.execute(lua2);
  expectToBeNumber(result2.globalVar("a"), 1);
  expectToBeNumber(result2.globalVar("b"), 10);
  expectToBeNumber(result2.globalVar("c"), 100);
  expectToBeNumber(result2.globalVar("d"), 111);
  expect(result2.hasReturnValue()).toBeTruthy();
  expect(result2.returnValueAsList().length).toBe(1);
  expectToBeNumber(result2.returnValueAsList()[0], 111);
});

test("calling nil causes RuntimeError", () => {
  const lua = `
  a  = 1
  f()
  `;
  let exception;
  try {
    new VMBuilder().build().executeOnce(lua);
  } catch (e) {
    exception = e;
  }
  expect(exception).toBeInstanceOf(RuntimeError);
  expect((exception as RuntimeError).message)
    .toBe("[0000] Runtime error: (line: 3, col: 2): Can't execute non-function: NilValue");
});

test("calling non function causes RuntimeError", () => {
  const lua = `
  a  = 1
  a()
  `;
  let exception;
  try {
    new VMBuilder().build().executeOnce(lua);
  } catch (e) {
    exception = e;
  }
  expect(exception).toBeInstanceOf(RuntimeError);
  expect((exception as RuntimeError).message)
    .toBe("[0000] Runtime error: (line: 3, col: 2): Can't execute non-function: NumberValue");
});

test("continue causes RuntimeError", () => {
  const lua = `
  a  = 1
  continue
  `;
  let exception;
  try {
    new VMBuilder().build().executeOnce(lua);
  } catch (e) {
    exception = e;
  }
  expect(exception).toBeInstanceOf(NotYetImplemented);
  expect((exception as NotYetImplemented).message)
    .toBe("[0000] Feature not yet implemented(line: 3, col: 2): continue is not supported in Lua");
});

test("function with multiple return", () => {
  const lua = `
  function f()
    return 1 + 10, 2 + 10, 3 + 10
  end
  a,b,c = f()
  `;
  const result = new VMBuilder().build().executeOnce(lua);
  expectToBeNumber(result.globalVar("a"), 11);
  expectToBeNumber(result.globalVar("b"), 12);
  expectToBeNumber(result.globalVar("c"), 13);
});

test("break outside of loop", () => {
  const lua = `
  a = 1
  do
  break
  end
  b = 2
  `;
  let exception;
  try {
    new VMBuilder().build().executeOnce(lua);
  } catch (e) {
    exception = e;
  }
  expect(exception).toBeInstanceOf(RuntimeError);
  expect((exception as RuntimeError).message)
    .toBe("[0000] Runtime error: (line: 4, col: 2): Break called outside of a loop");
  
});

test("incorrect lua code", () => {
  const lua = `
  x = 1
  a == 1
  y = 2
  `;
  let exception;
  try {
    new VMBuilder().build().executeOnce(lua);
  } catch (e) {
    exception = e;
  }
  expect(exception).toBeInstanceOf(LuaLangError);
  expect((exception as LuaLangError).message)
    .toBe("Lua: no viable alternative at input 'a ==' at (line: 3, col: 4)");
});
