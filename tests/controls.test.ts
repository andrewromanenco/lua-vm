import { BooleanValue, NilValue, StringValue } from "@src/interpreter/types";
import VMBuilder from "@src/vm";
import { expectToBeNumber } from "./interpreter/test_utils";

test("if", () => {
    const lua = `
    a = 1
    b = 0
    while a < 4 do
      if a == 1 then
        b = b + 1
      elseif a == 2 then
        b = b + 10
      elseif a == 100 then
        b = b + 10000
      else
        b = b + 100
      end
      a = a + 1
    end
    `;
    const vm = new VMBuilder().build();
    const result = vm.execute(lua);
    expect(result.hasReturnValue()).toBeFalsy();
    expectToBeNumber(result.globalVar("a"), 4);
    expectToBeNumber(result.globalVar("b"),111);
});

test("repeat", () => {
    const lua = `
    a = 0
    b = 2
    repeat
      a = a + 1
      b = b * 2
    until a == 3
    `;
    const vm = new VMBuilder().build();
    const result = vm.execute(lua);
    expect(result.hasReturnValue()).toBeFalsy();
    expectToBeNumber(result.globalVar("a"), 3);
    expectToBeNumber(result.globalVar("b"), 16);
});

test("set various values", () => {
    const lua = `
    a = nil
    b = true
    c = false
    d = "string value"
    `;
    const vm = new VMBuilder().build();
    const result = vm.execute(lua);
    expect(result.hasReturnValue()).toBeFalsy();
    expect(result.globalVar("a")).toBeInstanceOf(NilValue);
    expect(result.globalVar("b")).toBeInstanceOf(BooleanValue);
    expect(result.globalVar("c")).toBeInstanceOf(BooleanValue);
    expect(result.globalVar("d")).toBeInstanceOf(StringValue);

    expect((result.globalVar("b") as BooleanValue).boolean).toBeTruthy();
    expect((result.globalVar("c") as BooleanValue).boolean).toBeFalsy;
    expect((result.globalVar("d") as StringValue).string).toBe("string value");
});
