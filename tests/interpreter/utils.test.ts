import LuaParser from '@src/parser/LuaParser';
import { firstValue, flattenList, make_parser } from '@src/interpreter/utils';
import { InternalListValue, NumberValue } from '@src/interpreter/types';
import { expectToBeNumber } from './test_utils';

test('validate parser', () => {
  const parser = make_parser('10+5');
  expect(parser).toBeInstanceOf(LuaParser);
  expect(parser.exp).toBeTruthy();
});

test('firstValue', () => {
  const number42 = NumberValue.from(42);
  const result42 = firstValue(number42);
  expectToBeNumber(result42, 42);

  const number43 = NumberValue.from(43);
  const list1 = new InternalListValue([number43, number42]);
  const list2 = new InternalListValue([list1, number42]);
  const result1 = firstValue(list1);
  const result2 = firstValue(list2);
  expectToBeNumber(result1, 43);
  expectToBeNumber(result2, 43);
});

test('flattenList', () => {
  const list = flattenList(NumberValue.from(11));
  expectToBeNumber(list.getValueOrNil(1), 11);
  const number42 = NumberValue.from(42);
  const number43 = NumberValue.from(43);
  const list1 = new InternalListValue([number43, number42]);
  const list2 = new InternalListValue([NumberValue.from(10), list1]);
  const list3 = new InternalListValue([list1, NumberValue.from(10)]);
  const list4 = new InternalListValue([list1, list2]);
  const result1 = flattenList(list1);
  const result2 = flattenList(list2);
  const result3 = flattenList(list3);
  const result4 = flattenList(list4);

  expectToBeNumber(result1.getValueOrNil(1), 43);
  expectToBeNumber(result1.getValueOrNil(2), 42);

  expectToBeNumber(result2.getValueOrNil(1), 10);
  expectToBeNumber(result2.getValueOrNil(2), 43);
  expectToBeNumber(result2.getValueOrNil(3), 42);

  expectToBeNumber(result3.getValueOrNil(1), 43);
  expectToBeNumber(result3.getValueOrNil(2), 10);

  expectToBeNumber(result4.getValueOrNil(1), 43);
  expectToBeNumber(result4.getValueOrNil(2), 10);
  expectToBeNumber(result4.getValueOrNil(3), 43);
  expectToBeNumber(result4.getValueOrNil(4), 42);
});
