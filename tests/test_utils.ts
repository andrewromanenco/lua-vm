import { NumberValue, TableValue, Value } from "@src/types";

export default function assert_number(result: Value, expected: number) {
    expect(result).toBeInstanceOf(TableValue);
    expect((result as TableValue).size()).toBe(1);
    const num = (result as TableValue).get(NumberValue.from(1))
    expect(num).toBeInstanceOf(NumberValue);
    expect((num as NumberValue).number).toBe(expected);
}