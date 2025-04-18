import { RuntimeError } from '@src/interpreter/errors';
import { VMBuilder } from '@src/vm';
import {
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
