import { NilValue, NumberValue, TableValue, Value } from "@src/types";

function assert_return_number(result: Value, expected: number) {
    expect(result).toBeInstanceOf(TableValue);
    expect((result as TableValue).size()).toBe(1);
    const num = (result as TableValue).get(NumberValue.from(1))
    expect(num).toBeInstanceOf(NumberValue);
    expect((num as NumberValue).number).toBe(expected);
}

function assert_return_nothing(result: Value) {
    expect(result).toBeInstanceOf(TableValue);
    expect((result as TableValue).size()).toBe(0);
}

export { assert_return_number, assert_return_nothing };
