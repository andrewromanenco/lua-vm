import { RuntimeError } from '@src/interpreter/errors';
import { VMBuilder } from '@src/vm';
import { expectToBeString } from '@tests/interpreter/test_utils';

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
