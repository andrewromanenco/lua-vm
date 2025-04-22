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

test('string function', () => {
  const lua = `
  len1 = string.len("")
  len2 = string.len("abc")
  low = string.lower("aBxY")
  up = string.upper("aBxY")
  rep1 = string.rep("ab", 2)
  rep2 = string.rep("ab", 3, ",")
  rev = string.reverse("xyz")
  sub1 = string.sub("1234567", 2)
  sub2 = string.sub("1234567", 2,4)
  sub3 = string.sub("1234567", 2,-2)
  sub4 = string.sub("1234567", -4,-2)
  `;
  const vm = new VMBuilder().witStdLib().build();
  const result = vm.executeOnce(lua);
  expectToBeNumber(result.globalVar('len1'), 0);
  expectToBeNumber(result.globalVar('len2'), 3);
  expectToBeString(result.globalVar('low'), 'abxy');
  expectToBeString(result.globalVar('up'), 'ABXY');
  expectToBeString(result.globalVar('rep1'), 'abab');
  expectToBeString(result.globalVar('rep2'), 'ab,ab,ab');
  expectToBeString(result.globalVar('rev'), 'zyx');
  expectToBeString(result.globalVar('sub1'), '234567');
  expectToBeString(result.globalVar('sub2'), '234');
  expectToBeString(result.globalVar('sub3'), '23456');
  expectToBeString(result.globalVar('sub4'), '456');
});
