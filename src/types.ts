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

class StringValue extends Value {
    private readonly _str: string;

    static from(str: string): StringValue {
        return new StringValue(str);
    }

    constructor(str: string) {
        super();
        this._str = str;
    }

    get string(): string {
        return this._str;
    }

    asIdString(): string {
        return `string:${this._str}`;
    }
}

class TableValue extends Value {
    private readonly _table: Map<String, Value> = new Map();

    get(key: Value): Value {
        const value = this._table.get(key.asIdString());
        return value? value : new NilValue;
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

class BooleanValue extends Value {

    private readonly value: boolean;

    static true(): BooleanValue {
        return new BooleanValue(true);
    }

    static false(): BooleanValue {
        return new BooleanValue(false);
    }

    static from(b: boolean): BooleanValue {
        return new BooleanValue(b);
    }

    constructor(value: boolean) {
        super();
        this.value = value;
    }

    get boolean(): boolean {
        return this.value;
    }

    asIdString(): string {
        return `boolean:${this.value}`;
    }
}

export { Value, NilValue, NumberValue, StringValue, BooleanValue, TableValue };
