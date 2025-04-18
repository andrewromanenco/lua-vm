import { ParserRuleContext } from 'antlr4';
import { ExtFunctionError, RuntimeError } from './errors';
import { InternalListValue, NilValue, Value } from './types';

export default class ExtFunction extends Value {
  private readonly uuid: string;
  private readonly f: (args: Value[]) => Value[];
  private readonly name: string;

  static of(f: (args: Value[]) => Value[], name = ''): ExtFunction {
    return new ExtFunction(f, name.length > 0 ? name : f.name);
  }

  private constructor(f: (args: Value[]) => Value[], name: string) {
    super();
    this.uuid = crypto.randomUUID();
    this.f = f;
    this.name = name;
  }

  run(args: InternalListValue, ctx: ParserRuleContext): InternalListValue {
    try {
      const result = this.f(args.asList());
      return new InternalListValue(
        result.length == 0 ? [new NilValue()] : result
      );
    } catch (error) {
      if (error instanceof ExtFunctionError) {
        const err = new RuntimeError((error as ExtFunctionError).message, ctx);
        err.cause = error;
        throw err;
      } else {
        const err = new RuntimeError(
          `Error in external function "${this.name}"`,
          ctx
        );
        err.cause = error;
        throw err;
      }
    }
  }

  asIdString(): string {
    return `extFun:${this.uuid}`;
  }

  toString(): string {
    return `extFun:${this.name}:${this.uuid}`;
  }
}
