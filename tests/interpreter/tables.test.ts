import VMBuilder from "@src/vm";
import { expectToBeNumber } from "./test_utils";
import { TableValue } from "@src/interpreter/types";

test("empty table init", () => {
    const lua = `
    t = {}
    l = #t
    return t, l
    `;
    const result = new VMBuilder().build().executeOnce(lua);
    expect(result.hasReturnValue()).toBeTruthy();
    const returnList = result.returnValueAsList();
    expect(returnList.length).toBe(2);
    expect(returnList[0]).toBeInstanceOf(TableValue);
    expectToBeNumber(returnList[1], 0);
});

test("tables init and size", () => {
    const lua = `
    function f() 
      return "ff"
    end
    t = {"a", "b", named = "value", [f()] = "f-value", "c"}
    l = #t
    return t, l
    `;
    const result = new VMBuilder().build().executeOnce(lua);
    expect(result.hasReturnValue()).toBeTruthy();
    const returnList = result.returnValueAsList();
    expect(returnList.length).toBe(2);
    expectToBeNumber(returnList[1], 5);
});
