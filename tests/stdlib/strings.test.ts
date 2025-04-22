import { VMBuilder } from '@src/vm';
import {
  expectToBeNil,
  expectToBeNumber,
  expectToBeString,
} from '@tests/interpreter/test_utils';

test('find', () => {
  const lua = `
    s = "hello world str hellllo again"
    a1, a2, a3 = string.find(s, "hel+o")
    b1, b2, b3 = string.find(s, "hel+o", 2)
    c1, c2, c3 = string.find(s, "hel+o", 1)
    d1, d2, d3 = string.find(s, "lo", 0, true)
    e1, e2, e3 = string.find(s, "lo", 5, true)
    f1, f2, f3 = string.find(s, "Hel+o", 5, false, "i")
    g1, g2, g3 = string.find(s, "xyz")
    return b
    `;
  const vm = new VMBuilder().witStdLib().build();
  const result = vm.executeOnce(lua);
  expectToBeNumber(result.globalVar('a1'), 1);
  expectToBeNumber(result.globalVar('a2'), 5);
  expectToBeString(result.globalVar('a3'), 'hello');
  expectToBeNumber(result.globalVar('b1'), 17);
  expectToBeNumber(result.globalVar('b2'), 23);
  expectToBeString(result.globalVar('b3'), 'hellllo');
  expectToBeNumber(result.globalVar('c1'), 1);
  expectToBeNumber(result.globalVar('c2'), 5);
  expectToBeString(result.globalVar('c3'), 'hello');
  expectToBeNumber(result.globalVar('d1'), 4);
  expectToBeNumber(result.globalVar('d2'), 5);
  expectToBeString(result.globalVar('d3'), 'lo');
  expectToBeNumber(result.globalVar('e1'), 22);
  expectToBeNumber(result.globalVar('e2'), 23);
  expectToBeString(result.globalVar('e3'), 'lo');
  expectToBeNumber(result.globalVar('f1'), 17);
  expectToBeNumber(result.globalVar('f2'), 23);
  expectToBeString(result.globalVar('f3'), 'hellllo');
  expectToBeNil(result.globalVar('g1'));
  expectToBeNil(result.globalVar('g2'));
  expectToBeNil(result.globalVar('g3'));
});
