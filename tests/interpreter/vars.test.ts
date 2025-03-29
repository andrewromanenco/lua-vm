import LuaInterpreter from "@src/LuaInterpreter";

import { execute } from "@src/utils";
import assert_number from "@tests/test_utils";

const interpreter = new LuaInterpreter();

test("c=a+b", () => {
    const lua = `
    a = 10
    b = 32
    c = a + b
    return c
    `;
    const result = execute(lua, interpreter);
    assert_number(result, 42);
});

test("while loop", () => {
    const lua = `
    a = 1
    b = 2
    while a < 5 do
      b = b * 2
      a = a + 1
    end
    return b
    `;
    const result = execute(lua, interpreter);
    assert_number(result, 32);
});

