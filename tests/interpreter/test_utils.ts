import { InternalListValue, NumberValue, Value } from "@src/interpreter/types";

function assert_return_number(result: Value, expected: number) {
    expect(result).toBeInstanceOf(InternalListValue);
    expect((result as InternalListValue).size()).toBe(1);
    const num = (result as InternalListValue).get(1)
    expect(num).toBeInstanceOf(NumberValue);
    expect((num as NumberValue).number).toBe(expected);
}

function assert_return_nothing(result: Value) {
    expect(result).toBeInstanceOf(InternalListValue);
    expect((result as InternalListValue).size()).toBe(0);
}

function number_value(list: InternalListValue, index: number): number {
    const value = list.get(index);
    expect(value).toBeInstanceOf(NumberValue);
    return (value as NumberValue).number;
}

export { assert_return_number, assert_return_nothing, number_value };
