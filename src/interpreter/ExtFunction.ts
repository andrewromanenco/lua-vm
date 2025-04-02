import { InternalListValue, Value } from "./types";

export default class ExtFunction extends Value {
    private readonly id: string;
    private readonly f: (args: Value[]) => Value[];

    static of(f: (args: Value[]) => Value[]):ExtFunction {
        return new ExtFunction(f);
    }

    private constructor(f: (args: Value[]) => Value[]) {
        super();
        this.id = crypto.randomUUID();
        this.f = f;
    }

    run(args: InternalListValue): InternalListValue {
        return new InternalListValue((this.f(args.asList())));
    }

    asIdString(): string {
        return `extfunction:${this.id}`;
    }
}
