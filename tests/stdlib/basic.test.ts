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
