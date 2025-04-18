import { RuntimeError } from '@src/interpreter/errors';
import ExtFunction from '@src/interpreter/ExtFunction';
import { NumberValue, StringValue, Value } from '@src/interpreter/types';
import { VMBuilder } from '@src/vm';
import {
  expectToBeBool,
  expectToBeNil,
  expectToBeNumber,
  expectToBeString,
} from '@tests/interpreter/test_utils';

test('basic functions', () => {
  const lua = `
    a = 123
    b = tostring(a)
    return b
    `;
  const vm = new VMBuilder().witStdLib().build();
  const result = vm.executeOnce(lua);
  expect(result.hasReturnValue()).toBeTruthy();
  expect(result.returnValueAsList().length).toBe(1);
  expectToBeString(result.returnValueAsList()[0], '123');
});

test('assert', () => {
  const lua = `
      a = 123
      assert(a == 321, "ups")
      `;
  let exception;
  try {
    new VMBuilder().witStdLib().build().executeOnce(lua);
  } catch (e) {
    exception = e;
  }
  expect(exception).toBeInstanceOf(RuntimeError);
  expect((exception as RuntimeError).message).toBe(
    'Runtime error: (line: 3, col: 6): assertion failed!'
  );
});

test('error', () => {
  const lua = `
      a = 123
      error("error called")
      `;
  let exception;
  try {
    new VMBuilder().witStdLib().build().executeOnce(lua);
  } catch (e) {
    exception = e;
  }
  expect(exception).toBeInstanceOf(RuntimeError);
  expect((exception as RuntimeError).message).toBe(
    'Runtime error: (line: 3, col: 6): error called'
  );
});

test('ipairs', () => {
  const lua = `
        t = {'a', 'b', 'c'}
        s = ""
        n = 0
        for i, v in ipairs(t) do
          s = s .. v
          n = n + i
        end
        return n, s
        `;
  const result = new VMBuilder().witStdLib().build().executeOnce(lua);
  expect(result.hasReturnValue()).toBeTruthy();
  expect(result.returnValueAsList().length).toBe(2);
  expectToBeNumber(result.returnValueAsList()[0], 6);
  expectToBeString(result.returnValueAsList()[1], 'abc');
});

test('next', () => {
  const lua = `
          t = {a = "aValue", b = "bValue"}
          a1, a2 = next(t);
          b1, b2 = next(t, a1);
          c1, c2 = next(t, b1);
          return a1, a2, b1, b2, c1, c2
          `;
  const result = new VMBuilder().witStdLib().build().executeOnce(lua);
  expect(result.hasReturnValue()).toBeTruthy();
  expect(result.returnValueAsList().length).toBe(6);

  expectToBeString(result.returnValueAsList()[0], 'a');
  expectToBeString(result.returnValueAsList()[1], 'aValue');

  expectToBeString(result.returnValueAsList()[2], 'b');
  expectToBeString(result.returnValueAsList()[3], 'bValue');

  expectToBeNil(result.returnValueAsList()[4]);
  expectToBeNil(result.returnValueAsList()[5]);
});

test('pairs', () => {
  const lua = `
          t = {'a', 'b', 'c'}
          s = ""
          n = 0
          for i, v in pairs(t) do
            s = s .. v
            n = n + i
          end
          return n, s
          `;
  const result = new VMBuilder().witStdLib().build().executeOnce(lua);
  expect(result.hasReturnValue()).toBeTruthy();
  expect(result.returnValueAsList().length).toBe(2);
  expectToBeNumber(result.returnValueAsList()[0], 6);
  expectToBeString(result.returnValueAsList()[1], 'abc');
});

test('pcall with no function', () => {
  const lua = `
    a = 100
            status, error = pcall(a)
            return status, error
            `;
  const result = new VMBuilder().witStdLib().build().executeOnce(lua);
  expect(result.hasReturnValue()).toBeTruthy();
  expect(result.returnValueAsList().length).toBe(2);
  expectToBeBool(result.returnValueAsList()[0], false);
  expectToBeString(result.returnValueAsList()[1], "can't call a non function");
});

test('pcall with lua function', () => {
  const lua = `
    function add(a, b)
        return a + b
    end
            status, result = pcall(add, 1, 2)
            return status, result
            `;
  const result = new VMBuilder().witStdLib().build().executeOnce(lua);
  expect(result.hasReturnValue()).toBeTruthy();
  expect(result.returnValueAsList().length).toBe(2);
  expectToBeBool(result.returnValueAsList()[0], true);
  expectToBeNumber(result.returnValueAsList()[1], 3);
});

test('pcall with external function', () => {
  const lua = `
            status, result = pcall(add, 1, 2)
            return status, result
            `;
  function add(args: Value[]): Value[] {
    const a = args[0] as NumberValue;
    const b = args[1] as NumberValue;
    return [NumberValue.from(a.number + b.number)];
  }
  const vm = new VMBuilder().witStdLib().build();
  const thread = vm.newThread();
  thread.setLuaVar(StringValue.from('add'), ExtFunction.of(add));

  const result = thread.execute(lua);
  expect(result.hasReturnValue()).toBeTruthy();
  expect(result.returnValueAsList().length).toBe(2);
  expectToBeBool(result.returnValueAsList()[0], true);
  expectToBeNumber(result.returnValueAsList()[1], 3);
});

test('pcall with lua function throwing error', () => {
  const lua = `
    function add(a, b)
        return a + b + nonexistingFunction()
    end
            status, error = pcall(add, 1, 2)
            return status, error
            `;
  const result = new VMBuilder().witStdLib().build().executeOnce(lua);
  expect(result.hasReturnValue()).toBeTruthy();
  expect(result.returnValueAsList().length).toBe(2);
  expectToBeBool(result.returnValueAsList()[0], false);
  expectToBeString(
    result.returnValueAsList()[1],
    "Runtime error: (line: 3, col: 23): Can't execute non-function: NilValue"
  );
});

test('pcall with external function throwing TS error', () => {
  const lua = `
            status, error = pcall(add, 1, 2)
            return status, error
            `;
  function add(_args: Value[]): Value[] {
    throw new Error('ups from ts!');
  }
  const vm = new VMBuilder().witStdLib().build();
  const thread = vm.newThread();
  thread.setLuaVar(StringValue.from('add'), ExtFunction.of(add));

  const result = thread.execute(lua);
  expect(result.hasReturnValue()).toBeTruthy();
  expect(result.returnValueAsList().length).toBe(2);
  expectToBeBool(result.returnValueAsList()[0], false);
  expectToBeString(result.returnValueAsList()[1], 'ups from ts!');
});

test('pcall with external function throwing JS error', () => {
  const lua = `
            status, error = pcall(add, 1, 2)
            return status, error
            `;
  function add(_args: Value[]): Value[] {
    throw 42;
  }
  const vm = new VMBuilder().witStdLib().build();
  const thread = vm.newThread();
  thread.setLuaVar(StringValue.from('add'), ExtFunction.of(add));

  const result = thread.execute(lua);
  expect(result.hasReturnValue()).toBeTruthy();
  expect(result.returnValueAsList().length).toBe(2);
  expectToBeBool(result.returnValueAsList()[0], false);
  expectToBeString(result.returnValueAsList()[1], '42');
});

test('pcall with external function throwing RuntimeError error', () => {
  const lua = `
            status, error = pcall(add, 1, 2)
            return status, error
            `;
  function add(_args: Value[]): Value[] {
    throw RuntimeError.message('run-time');
  }
  const vm = new VMBuilder().witStdLib().build();
  const thread = vm.newThread();
  thread.setLuaVar(StringValue.from('add'), ExtFunction.of(add));

  const result = thread.execute(lua);
  expect(result.hasReturnValue()).toBeTruthy();
  expect(result.returnValueAsList().length).toBe(2);
  expectToBeBool(result.returnValueAsList()[0], false);
  expectToBeString(
    result.returnValueAsList()[1],
    'Runtime error: (line: -1, col: -1): run-time'
  );
});

test.skip('print', () => {
  const lua = `
    a = 1
    c = "s"
    print(a, b, c)
    `;
  new VMBuilder().witStdLib().build().executeOnce(lua);
});

test('select', () => {
  const lua = `
      a1,a2,a3,a4 = select(2, 'a', 'b', 'c', 'd')
      b1,b2,b3,b4 = select(-2, 'a', 'b', 'c', 'd')
      c1, c2, c3, c4 = select('#', 'a', 'b', 'c', 'd')
      d1, d2, d3, d4 = select(10, 'a', 'b', 'c', 'd')
      `;
  const vm = new VMBuilder().witStdLib().build();
  const thread = vm.newThread();
  const result = thread.execute(lua);

  expectToBeString(result.globalVar('a1'), 'b');
  expectToBeString(result.globalVar('a2'), 'c');
  expectToBeString(result.globalVar('a3'), 'd');
  expectToBeNil(result.globalVar('a4'));

  expectToBeString(result.globalVar('b1'), 'c');
  expectToBeString(result.globalVar('b2'), 'd');
  expectToBeNil(result.globalVar('b3'));
  expectToBeNil(result.globalVar('b4'));

  expectToBeNumber(result.globalVar('c1'), 4);
  expectToBeNil(result.globalVar('c2'));
  expectToBeNil(result.globalVar('c3'));
  expectToBeNil(result.globalVar('c4'));

  expectToBeNil(result.globalVar('d1'));
  expectToBeNil(result.globalVar('d2'));
  expectToBeNil(result.globalVar('d3'));
  expectToBeNil(result.globalVar('d4'));
});
