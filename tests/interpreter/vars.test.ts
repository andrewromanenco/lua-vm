import LuaInterpreter from '@src/interpreter/LuaInterpreter';
import {
  InternalListValue,
  NilValue,
  NumberValue,
  StringValue,
} from '@src/interpreter/types';

import { executeWithInterpreter } from '@src/interpreter/utils';
import {
  assert_return_number,
  assert_return_nothing,
  number_value,
} from '@tests/interpreter/test_utils';

test('c=a+b', () => {
  const lua = `
    a = 10
    b = 32
    c = a + b
    return c
    `;
  const interpreter = new LuaInterpreter();
  const result = executeWithInterpreter(lua, interpreter);
  assert_return_number(result, 42);
});

test('while loop', () => {
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
  const result = executeWithInterpreter(lua, interpreter);
  assert_return_number(result, 32);
});

test('define function', () => {
  const lua = `
  function f()
  end
  a = 1
  a = a + 1
  return
  `;
  const interpreter = new LuaInterpreter();
  const result = executeWithInterpreter(lua, interpreter);
  assert_return_nothing(result);
  const a = interpreter.getGlobalVar(StringValue.from('a'));
  expect(a).toBeInstanceOf(NumberValue);
  expect((a as NumberValue).number).toBe(2);
});

test('visibility scopes', () => {
  const lua = `
  a = 10
  local a = 20
  return a
  `;
  const interpreter = new LuaInterpreter();
  const result = executeWithInterpreter(lua, interpreter);
  assert_return_number(result, 20);
  const a = interpreter.getGlobalVar(StringValue.from('a'));
  expect(a).toBeInstanceOf(NumberValue);
  expect((a as NumberValue).number).toBe(10);
});

test('visibility scopes in function', () => {
  const lua = `
  a = 10
  b = 20
  function f()
    local a
    b = 200
    a = 100
  end
  f()
  return a, b
  `;
  const interpreter = new LuaInterpreter();
  const result = executeWithInterpreter(lua, interpreter);
  expect(result).toBeInstanceOf(InternalListValue);
  expect((result as InternalListValue).size()).toBe(2);
  const r1 = (result as InternalListValue).get(1);
  const r2 = (result as InternalListValue).get(2);
  expect(r1).toBeInstanceOf(NumberValue);
  expect(r2).toBeInstanceOf(NumberValue);
  expect((r1 as NumberValue).number).toBe(10);
  expect((r2 as NumberValue).number).toBe(200);
});

test('function return', () => {
  const lua = `
  function ff()
    a = 10
    local b = 100
    return a + b
  end
  return ff(), a, b
  `;
  const interpreter = new LuaInterpreter();
  const result = executeWithInterpreter(lua, interpreter);
  expect(result).toBeInstanceOf(InternalListValue);
  expect((result as InternalListValue).size()).toBe(3);
  expect(number_value(result as InternalListValue, 1)).toBe(110);
  expect(number_value(result as InternalListValue, 2)).toBe(10);
  expect((result as InternalListValue).get(3)).toBeInstanceOf(NilValue);
});

test('function add', () => {
  const lua = `
  a = 10
  function add(a, b)
    return a + b
  end
  c = add(10, 32)
  return a, c
  `;
  const interpreter = new LuaInterpreter();
  const result = executeWithInterpreter(lua, interpreter);
  expect(result).toBeInstanceOf(InternalListValue);
  expect((result as InternalListValue).size()).toBe(2);
  expect(number_value(result as InternalListValue, 1)).toBe(10);
  expect(number_value(result as InternalListValue, 2)).toBe(42);
});

test('function call with extra arg', () => {
  const lua = `
  a = 10
  function add(a, b)
    return a + b
  end
  c = add(10, 32, 100)
  return a, c
  `;
  const interpreter = new LuaInterpreter();
  const result = executeWithInterpreter(lua, interpreter);
  expect(result).toBeInstanceOf(InternalListValue);
  expect((result as InternalListValue).size()).toBe(2);
  expect(number_value(result as InternalListValue, 1)).toBe(10);
  expect(number_value(result as InternalListValue, 2)).toBe(42);
});

test('function call with not enough args', () => {
  const lua = `
  a = 1
  b = 2
  c = 3
  function f(x, y)
    a = x
    b = y
  end
  f(10)
  return a, b, c
  `;
  const interpreter = new LuaInterpreter();
  const result = executeWithInterpreter(lua, interpreter);
  expect(result).toBeInstanceOf(InternalListValue);
  expect((result as InternalListValue).size()).toBe(3);
  expect(number_value(result as InternalListValue, 1)).toBe(10);
  expect((result as InternalListValue).get(2)).toBeInstanceOf(NilValue);
  expect(number_value(result as InternalListValue, 3)).toBe(3);
});
