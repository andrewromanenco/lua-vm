import { NilValue, NumberValue } from "@src/interpreter/types";
import VMBuilder from "@src/vm";
import { expectToBeNumber } from "./interpreter/test_utils";
import { NotYetImplemented } from "@src/interpreter/errors";

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
