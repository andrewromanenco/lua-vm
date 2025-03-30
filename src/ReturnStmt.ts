import { NumberValue, TableValue, Value } from "./types";

export default class ReturnStmt extends Error {
    private readonly returnedValues: TableValue;
    private index: number;

    constructor() {
        super();
        this.returnedValues = new TableValue();
        this.index = 1;
    }

    addValue(value: Value) {
        this.returnedValues.set(NumberValue.from(this.index), value);
        this.index++;
    }

    retValues(): TableValue {
        return this.returnedValues;
    }

}