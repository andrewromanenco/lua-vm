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

test("break", () => {
    const lua = `
    a = 1
    b = 1
    while a < 5 do
        a = a + 1
        if a == 3 then break end
        b = b + 1
    end
    c = 1
    d = 1
    repeat
        c = c + 1
        if c == 3 then break end
        d = d + 1
    until c == 5
    `;
    const vm = new VMBuilder().build();
    const result = vm.execute(lua);
    expect(result.hasReturnValue()).toBeFalsy();
    expectToBeNumber(result.globalVar("a"), 3);
    expectToBeNumber(result.globalVar("b"), 2);
    expectToBeNumber(result.globalVar("c"), 3);
    expectToBeNumber(result.globalVar("d"), 2);
});

test("scope visibility for loops", () => {
    const lua = `
    a = 1
    while a < 5 do
        a = a + 1
        local a = 100
    end

    b = 1
    c = 1
    repeat
        b = b + 1
        local c = b
    until c == 5
    `;
    const vm = new VMBuilder().build();
    const result = vm.execute(lua);
    expect(result.hasReturnValue()).toBeFalsy();
    expectToBeNumber(result.globalVar("a"), 5);
    expectToBeNumber(result.globalVar("b"), 5);
    expectToBeNumber(result.globalVar("c"), 1);
});
