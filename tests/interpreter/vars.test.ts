import LuaInterpreter from "@src/LuaInterpreter";

import { NumberValue, TableValue } from "@src/types";
import { execute } from "@src/utils";

const interpreter = new LuaInterpreter();

test("c=a+b", () => {
    const lua = `
    a = 10
    b = 32
    c = a + b
    return c
    `;
    const result = execute(lua, interpreter);
    expect(result).toBeInstanceOf(TableValue);
    expect((result as TableValue).size()).toBe(1);
    const num = (result as TableValue).get(NumberValue.from(1))
    expect(num).toBeInstanceOf(NumberValue);
    expect((num as NumberValue).number).toBe(42);
});
