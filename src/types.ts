abstract class Value {

}

class NumberValue extends Value {
    private readonly _number: number;

    constructor(number: number) {
        super();
        this._number = number;
    }

    get number(): number {
        return this._number;
    }
}

export { Value, NumberValue };
