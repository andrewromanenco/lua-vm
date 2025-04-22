import { VMBuilder } from '@src/vm';
import { expectToBeString } from '@tests/interpreter/test_utils';

test('concat', () => {
  const lua = `
  c1 = table.concat({"a", "b", "c"}, ",");
  c2 = table.concat({"a", "b", "c", "d"}, ",", 2);
  c3 = table.concat({"a", "b", "c", "d"}, ",", 2, 3);
  c4 = table.concat({"a", "b", "c", "d"}, ",", 20, 3);
  `;
  const vm = new VMBuilder().witStdLib().build();
  const result = vm.executeOnce(lua);
  expectToBeString(result.globalVar('c1'), 'a,b,c');
  expectToBeString(result.globalVar('c2'), 'b,c,d');
  expectToBeString(result.globalVar('c3'), 'b,c');
  expectToBeString(result.globalVar('c4'), '');
});
