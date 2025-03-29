import LuaInterpreter from "@src/LuaInterpreter";
import { NumberValue, StringValue } from "@src/types";

import { execute } from "@src/utils";
import { assert_return_number, assert_return_nothing } from "@tests/test_utils";

test("c=a+b", () => {
    const lua = `
    a = 10
    b = 32
    c = a + b
    return c
    `;
    const interpreter = new LuaInterpreter();
    const result = execute(lua, interpreter);
    assert_return_number(result, 42);
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
    const interpreter = new LuaInterpreter();
    const result = execute(lua, interpreter);
    assert_return_number(result, 32);
});

test("define function", () => {
  const lua = `
  function f()
  end
  a = 1
  a = a + 1
  return
  `;
  const interpreter = new LuaInterpreter();
  const result = execute(lua, interpreter);
  assert_return_nothing(result);
  const a = interpreter.getGlobalVar(StringValue.from("a"));
  expect(a).toBeInstanceOf(NumberValue);
  expect((a as NumberValue).number).toBe(2);
});
