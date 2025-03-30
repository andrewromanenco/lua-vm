import { NilValue, NumberValue } from "@src/interpreter/types";
import VMBuilder from "@src/vm";
import { expectToBeNumber } from "./interpreter/test_utils";
import { NotYetImplemented } from "@src/interpreter/errors";

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
    const result = vm.execute(lua);
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
    const result = new VMBuilder().build().execute(lua);
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
  const result = new VMBuilder().build().execute(lua);
  expectToBeNumber(result.globalVar("a"), 10);
  expectToBeNumber(result.globalVar("b"), 30);
});

test("swap", () => {
  const lua = `
  a,b,c = 1,2,3
  a,b,c = b,c,a
  `;
  const result = new VMBuilder().build().execute(lua);
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
      new VMBuilder().build().execute(lua);
    } catch (e) {
      exception = e;
    }
    expect(exception).toBeInstanceOf(NotYetImplemented);
    expect((exception as NotYetImplemented).message)
      .toBe("Feature not yet implemented(line: 3, col: 4): goto");
});
