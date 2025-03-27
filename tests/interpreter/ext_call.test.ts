import LuaInterpreter from "@src/LuaInterpreter";

import { NilValue, NumberValue, TableValue } from "@src/types";
import { make_parser } from "@src/utils";

const interpreter = new LuaInterpreter();

test("return 42;", () => {
    const parser = make_parser("return 42");
    const node = parser.retstat();
    const result = node.accept(interpreter);
    expect(result).toBeInstanceOf(TableValue);
    expect((result as TableValue).size()).toBe(1);
    const num = (result as TableValue).get(NumberValue.from(1))
    expect(num).toBeInstanceOf(NumberValue);
    expect((num as NumberValue).number).toBe(42);
});

test("return;", () => {
    const parser = make_parser("return;");
    const node = parser.retstat();
    const result = node.accept(interpreter);
    expect(result).toBeInstanceOf(TableValue);
    expect((result as TableValue).size()).toBe(0);
});

test("return 42, 24;", () => {
    const parser = make_parser("return 42, 24;");
    const node = parser.retstat();
    const result = node.accept(interpreter);
    expect(result).toBeInstanceOf(TableValue);
    expect((result as TableValue).size()).toBe(2);
    const num1 = (result as TableValue).get(NumberValue.from(1))
    expect(num1).toBeInstanceOf(NumberValue);
    expect((num1 as NumberValue).number).toBe(42);
    const num2 = (result as TableValue).get(NumberValue.from(2))
    expect(num2).toBeInstanceOf(NumberValue);
    expect((num2 as NumberValue).number).toBe(24);
});
