import VMBuilder from "@src/vm";
import { expectToBeNil, expectToBeNumber, expectToBeString } from "./test_utils";
import { NumberValue, StringValue, TableValue } from "@src/interpreter/types";

test("table init and look up", () => {
    const lua = `
    t = {key = "value"}
    l = #t
    nil_value1 = t.no_suck_key1
    nil_value2 = t["no_suck_key2"]
    kv1 = t.key
    kv2 = t["key"]
    return t, l
    `;
    const result = new VMBuilder().build().executeOnce(lua);
    expect(result.hasReturnValue()).toBeTruthy();
    const returnList = result.returnValueAsList();
    expect(returnList.length).toBe(2);
    expect(returnList[0]).toBeInstanceOf(TableValue);
    expectToBeNumber(returnList[1], 1);
    expectToBeNil(result.globalVar("nil_value1"));
    expectToBeNil(result.globalVar("nil_value2"));
    expectToBeString(result.globalVar("kv1"), "value");
    expectToBeString(result.globalVar("kv2"), "value");
});

test("tables init and size", () => {
    const lua = `
    function f() 
      return "ff"
    end
    t = {"a", 10, named = "value", [f()] = "f-value", "c"}
    l = #t
    return t, l
    `;
    const result = new VMBuilder().build().executeOnce(lua);
    expect(result.hasReturnValue()).toBeTruthy();
    const returnList = result.returnValueAsList();
    expect(returnList.length).toBe(2);
    expectToBeNumber(returnList[1], 5);
    expect(result.globalVar("t")).toBeInstanceOf(TableValue);
    const table = result.globalVar("t") as TableValue;
    expectToBeString(table.get(NumberValue.from(1)), "a");
    expectToBeNumber(table.get(NumberValue.from(2)), 10);
    expectToBeString(table.get(NumberValue.from(3)), "c");
    expectToBeString(table.get(StringValue.from("named")), "value");
    expectToBeString(table.get(StringValue.from("ff")), "f-value");
});

test("tables setter", () => {
    const lua = `
    t = {name1 = "value1"}
    n1 = t.name1
    n2 = t['name1']
    t.new_key1 = "new_value1"
    t['new_key2'] = "new_value2"
    k1 = t['new_key1']
    k2 = t.new_key2
    t.name1 = "value-updated"
    `;
    const result = new VMBuilder().build().executeOnce(lua);
    expect(result.hasReturnValue()).toBeFalsy();
    const table = result.globalVar("t") as TableValue;
    expectToBeString(table.get(StringValue.from("name1")), "value-updated");
    expectToBeString(table.get(StringValue.from("new_key1")), "new_value1");
    expectToBeString(table.get(StringValue.from("new_key2")), "new_value2");
    expectToBeString(result.globalVar("n1"), "value1");
    expectToBeString(result.globalVar("n2"), "value1");
    expectToBeString(result.globalVar("k1"), "new_value1");
    expectToBeString(result.globalVar("k2"), "new_value2");
});
