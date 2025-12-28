import { ParserRuleContext } from 'antlr4';
import { ExtFunctionError, RuntimeError } from './errors';
import {
  InternalListValue,
  InterpreterValue,
  NilValue,
  TableValue,
  Value,
} from './types';
import LuaInterpreter from './LuaInterpreter';

export default class ExtFunction extends Value {
  private readonly uuid: string;
  private readonly f: (args: Value[]) => Value[];
  private readonly name: string;
  private readonly passInterpreter: boolean;

  static of(f: (args: Value[]) => Value[], name = ''): ExtFunction {
    return new ExtFunction(f, name.length > 0 ? name : f.name, false);
  }

  static WithInterpreter(
    f: (args: Value[]) => Value[],
    name = ''
  ): ExtFunction {
    return new ExtFunction(f, name.length > 0 ? name : f.name, true);
  }

  constructor(
    f: (args: Value[]) => Value[],
    name: string,
    passInterpreter: boolean
  ) {
    super();
    this.uuid = crypto.randomUUID();
    this.f = f;
    this.name = name;
    this.passInterpreter = passInterpreter;
  }

  run(
    args: InternalListValue,
    ctx: ParserRuleContext,
    interpreter: LuaInterpreter
  ): InternalListValue {
    try {
      const result = this.f(
        this.passInterpreter
          ? args.asList().concat([new InterpreterValue(interpreter)])
          : args.asList()
      );
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

  getMetatable(): TableValue | NilValue {
    return new NilValue();
  }
}
