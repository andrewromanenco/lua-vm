import LuaInterpreter from "@src/LuaInterpreter";

import { NumberValue } from "@src/types";
import { make_parser } from "@src/utils";

const interpreter = new LuaInterpreter();


test("42", () => {
    const luaCode = "42";
    const parser = make_parser(luaCode);
    const node = parser.exp();
    const result = node.accept(interpreter);
    expect(result).toBeInstanceOf(NumberValue);
    expect((result as NumberValue).number).toBe(42);
});

test("-42", () => {
    const luaCode = "-42";
    const parser = make_parser(luaCode);
    const node = parser.exp();
    const result = node.accept(interpreter);
    expect(result).toBeInstanceOf(NumberValue);
    expect((result as NumberValue).number).toBe(-42);
});
