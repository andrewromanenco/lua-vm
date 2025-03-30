import { NilValue, NumberValue } from "@src/interpreter/types";
import VMBuilder from "@src/vm";

test("vm execution", () => {
    const lua = `
    a = 1
    b = 2
    while a < 5 do
      b = b * 2
      a = a + 1
    end
    return b
    `;
    const vm = new VMBuilder().build();
    const result = vm.execute(lua);
    expect(result.hasReturnValue()).toBeTruthy();
    const returnValue = result.returnValueAsList();
    expect(returnValue).toBeInstanceOf(Array);
    expect(returnValue.length).toBe(1);
    expect((returnValue[0] as NumberValue).number).toBe(32);
    const a = result.globalVar("a");
    expect(a).toBeInstanceOf(NumberValue);
    expect((a as NumberValue).number).toBe(5);
    expect(result.globalVar("not-exist")).toBeInstanceOf(NilValue);
});