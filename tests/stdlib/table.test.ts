import ExtFunction from '@src/interpreter/ExtFunction';
import {
  BooleanValue,
  NumberValue,
  StringValue,
  Value,
} from '@src/interpreter/types';
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

test('insert', () => {
  const lua = `
    table1 = table.insert({"a", "b", "c"}, "d");
    t1 = table.concat(table1, ",")
    table2 = table.insert({}, "d");
    t2 = table.concat(table2, ",")
    table3 = table.insert({"a", "b", "c"}, 1, "d");
    t3 = table.concat(table3, ",")
    table4 = table.insert({"a", "b", "c"}, 3, "d");
    t4 = table.concat(table4, ",")
    table5 = table.insert({"a", "b", "c"}, 4, "d");
    t5 = table.concat(table5, ",")
    t = {"x", "y", "z"}
    table.insert(t, "w");
    tt = table.concat(t, ",")
    `;
  const vm = new VMBuilder().witStdLib().build();
  const result = vm.executeOnce(lua);
  expectToBeString(result.globalVar('t1'), 'a,b,c,d');
  expectToBeString(result.globalVar('t2'), 'd');
  expectToBeString(result.globalVar('t3'), 'd,a,b,c');
  expectToBeString(result.globalVar('t4'), 'a,b,d,c');
  expectToBeString(result.globalVar('t5'), 'a,b,c,d');
  expectToBeString(result.globalVar('tt'), 'x,y,z,w');
});

test('remove', () => {
  const lua = `
      table1 = {"a","b","c"}
      t1 = table.remove(table1, 1)
      table1 = table.concat(table1, ",")

      table2 = {"a","b","c"}
      t2 = table.remove(table2)
      table2 = table.concat(table2, ",")

      table3 = {"a","b","c"}
      t3 = table.remove(table3, 3)
      table3 = table.concat(table3, ",")

      table4 = {"a","b","c"}
      t4 = table.remove(table4, 2)
      table4 = table.concat(table4, ",")
      `;
  const vm = new VMBuilder().witStdLib().build();
  const result = vm.executeOnce(lua);
  expectToBeString(result.globalVar('t1'), 'a');
  expectToBeString(result.globalVar('table1'), 'b,c');
  expectToBeString(result.globalVar('t2'), 'c');
  expectToBeString(result.globalVar('table2'), 'a,b');
  expectToBeString(result.globalVar('t3'), 'c');
  expectToBeString(result.globalVar('table3'), 'a,b');
  expectToBeString(result.globalVar('t4'), 'b');
  expectToBeString(result.globalVar('table4'), 'a,c');
});

test('sort', () => {
  const lua = `
  list1 = {3,2,5,1,4}
  table.sort(list1)
  list1 = table.concat(list1, ",")

  list2 = {'a', 'c', 'd', 'b'}
  table.sort(list2)
  list2 = table.concat(list2, ",")
  `;
  const vm = new VMBuilder().witStdLib().build();
  const result = vm.executeOnce(lua);
  expectToBeString(result.globalVar('list1'), '1,2,3,4,5');
  expectToBeString(result.globalVar('list2'), 'a,b,c,d');
});

test('sort with comparator', () => {
  const lua = `
  function c(a,b)
    return a > b
  end
  list = {3,2,5,1,4}
  table.sort(list, c)
  list = table.concat(list, ",")
  `;
  const vm = new VMBuilder().witStdLib().build();
  const result = vm.executeOnce(lua);
  expectToBeString(result.globalVar('list'), '5,4,3,2,1');
});

test('sort with external comparator', () => {
  const lua = `
  list = {3,2,5,1,4}
  table.sort(list, c)
  list = table.concat(list, ",")
  `;
  function c(args: Value[]): Value[] {
    const a = args[0] as NumberValue;
    const b = args[1] as NumberValue;
    return [BooleanValue.from(a.number > b.number)];
  }
  const vm = new VMBuilder().witStdLib().build();
  vm.setLuaVar(StringValue.from('c'), ExtFunction.of(c));
  const result = vm.executeOnce(lua);
  expectToBeString(result.globalVar('list'), '5,4,3,2,1');
});
