import { BooleanValue } from '@src/interpreter/types';
import { VMBuilder } from '@src/vm';

test('Grammar issue with continue', () => {
  const lua = `
      storage = { }
      storage.continue = true
      return storage['continue']
    `;

  const result = new VMBuilder().build().executeOnce(lua);
  expect(result.hasReturnValue()).toBeTruthy();
  const returnList = result.returnValueAsList();
  expect((returnList[0] as BooleanValue).boolean).toBe(true);
});
