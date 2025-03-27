abstract class Value {

    abstract asIdString(): string;
}

class NilValue extends Value {

    asIdString(): string {
        return "nil";
    }
}

class NumberValue extends Value {
    private readonly _number: number;

    static from(number: number): NumberValue {
        return new NumberValue(number);
    }

    constructor(number: number) {
        super();
        this._number = number;
    }

    get number(): number {
        return this._number;
    }

    asIdString(): string {
        return `number:${this._number}`;
    }
}

class TableValue extends Value {
    private readonly _table: Map<String, Value> = new Map();

    get(key: Value): Value | undefined {
        return this._table.get(key.asIdString());
    }

    set(key: Value, value: Value): void {
        this._table.set(key.asIdString(), value);
    }

    asIdString(): string {
        throw new Error("Not yet implemented");
    }

    size(): number {
        return this._table.size;
    }
}

export { Value, NilValue, NumberValue, TableValue };
