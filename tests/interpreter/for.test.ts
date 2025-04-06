import { VMBuilder } from "@src/vm";
import { expectToBeNil, expectToBeNumber } from "./test_utils";

test("for with numbers", () => {
    const lua = `
    sumUp = 0
    for i = 1, 10
    do
      sumUp = sumUp + 1
    end

    sumDown = 0
    for i = 10, 1, -1
    do
      sumDown = sumDown + 1
    end

    sumUp2 = 0
    for i = 1, 10, 2
    do
      sumUp2 = sumUp2 + i
    end

    sum0 = 0
    for i = 10, 1
    do
      sum0 = sum0 + 1
    end
    `;
    const result = new VMBuilder().build().executeOnce(lua);
    expectToBeNil(result.globalVar("i"));
    expectToBeNumber(result.globalVar("sumUp"), 10);
    expectToBeNumber(result.globalVar("sumDown"), 10);
    expectToBeNumber(result.globalVar("sumUp2"), 1 + 3 + 5 + 7 + 9);
    expectToBeNumber(result.globalVar("sum0"), 0);
});

test("for with numbers; body has access to for var", () => {
    const lua = `
    sum = 0
    for i = 1, 10
    do
      sum = sum + i
      i = i + 1
    end
    `;
    const result = new VMBuilder().build().executeOnce(lua);
    expectToBeNil(result.globalVar("i"));
    expectToBeNumber(result.globalVar("sum"), 1 + 3 + 5 + 7 + 9);
});

test("generic FOR loop", () => {
    const lua = `
    function iter(state, controlVar)
      if controlVar == state then
        return nil
      else
        return controlVar + 1
      end
    end
    function iter_builder()
      return iter, 5, 0
    end
    sum = 0
    for i in iter_builder() do
      sum = sum + i
    end
    `;
    const result = new VMBuilder().build().executeOnce(lua);
    expectToBeNumber(result.globalVar("sum"), 1 + 2 + 3 + 4 + 5);
});
