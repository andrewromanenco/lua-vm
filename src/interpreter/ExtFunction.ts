import { ParserRuleContext } from "antlr4";
import { RuntimeError } from "./errors";
import { InternalListValue, Value } from "./types";

export default class ExtFunction extends Value {
    private readonly uuid: string;
    private readonly f: (args: Value[]) => Value[];
    private readonly name: string;

    static of(f: (args: Value[]) => Value[], name = ""):ExtFunction {
        return new ExtFunction(f, name.length > 0 ? name: f.name);
    }

    private constructor(f: (args: Value[]) => Value[], name: string) {
        super();
        this.uuid = crypto.randomUUID();
        this.f = f;
        this.name = name;
    }

    run(args: InternalListValue, ctx: ParserRuleContext): InternalListValue {
        try {
            return new InternalListValue((this.f(args.asList())));
        } catch (error) {
            const err = new RuntimeError(`Error in external function "${this.name}"`, ctx);
            err.cause = error;
            throw err;
        }
    }

    asIdString(): string {
        return `extFun:${this.uuid}`;
    }

    toString(): string {
        return `extFun:${this.name}:${this.uuid}`;
    }
}
