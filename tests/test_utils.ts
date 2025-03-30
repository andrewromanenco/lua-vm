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

function number_value(table: TableValue, index: number): number {
    const value = table.get(NumberValue.from(index));
    expect(value).toBeInstanceOf(NumberValue);
    return (value as NumberValue).number;
}

export { assert_return_number, assert_return_nothing, number_value };
