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
    `;
  const vm = new VMBuilder().witStdLib().build();
  const result = vm.executeOnce(lua);
  expectToBeString(result.globalVar('t1'), 'a,b,c,d');
  expectToBeString(result.globalVar('t2'), 'd');
  expectToBeString(result.globalVar('t3'), 'd,a,b,c');
  expectToBeString(result.globalVar('t4'), 'a,b,d,c');
  expectToBeString(result.globalVar('t5'), 'a,b,c,d');
});
