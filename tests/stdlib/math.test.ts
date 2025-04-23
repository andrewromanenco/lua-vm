import { VMBuilder } from '@src/vm';
import { expectToBeNumber } from '@tests/interpreter/test_utils';

test('math', () => {
  const lua = `
    abs1 = math.abs(-10)
    abs2 = math.abs(20)
    ceil = math.ceil(4/3)
    floor = math.floor(4/3)
    max = math.max(5,3,1,2,4)
    min = math.min(5,3,1,2,4)
    sqrt = math.sqrt(25)
    `;
  const vm = new VMBuilder().witStdLib().build();
  const result = vm.executeOnce(lua);
  expectToBeNumber(result.globalVar('abs1'), 10);
  expectToBeNumber(result.globalVar('abs2'), 20);
  expectToBeNumber(result.globalVar('ceil'), 2);
  expectToBeNumber(result.globalVar('floor'), 1);
  expectToBeNumber(result.globalVar('max'), 5);
  expectToBeNumber(result.globalVar('min'), 1);
  expectToBeNumber(result.globalVar('sqrt'), 5);
});
