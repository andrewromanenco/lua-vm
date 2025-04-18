import { ExtFunctionError, RuntimeError } from '@src/interpreter/errors';
import ExtFunction from '@src/interpreter/ExtFunction';
import {
  BooleanValue,
  FunctionValue,
  InternalListValue,
  InterpreterValue,
  NilValue,
  NumberValue,
  StringValue,
  TableValue,
  Value,
} from '@src/interpreter/types';
import { getOrNil, isFalse } from '@src/interpreter/utils';
import { ParserRuleContext } from 'antlr4';

function assert(args: Value[]): Value[] {
  if (isFalse(getOrNil(args, 0))) {
    const message = getOrNil(args, 1);
    if (message instanceof NilValue) {
      throw new ExtFunctionError(message.toString());
    } else {
      throw new ExtFunctionError('assertion failed!');
    }
  }
  return [];
}

function error(args: Value[]): Value[] {
  const message = getOrNil(args, 0);
  throw new ExtFunctionError(message.toString());
}

function ipairs(args: Value[]): Value[] {
  return [ExtFunction.of(ipairsIter), getOrNil(args, 0), NumberValue.from(0)];
}

function ipairsIter(args: Value[]): Value[] {
  const state = getOrNil(args, 0);
  const controlVar = getOrNil(args, 1);
  if (!(state instanceof TableValue) || !(controlVar instanceof NumberValue)) {
    return [state, new NilValue()];
  }
  const nextIndex = NumberValue.from((controlVar as NumberValue).number + 1);
  const value = (state as TableValue).get(nextIndex);
  if (value instanceof NilValue) {
    return [new NilValue()];
  } else {
    return [nextIndex, value];
  }
}

function next(args: Value[]): Value[] {
  if (!(getOrNil(args, 0) instanceof TableValue)) {
    return [];
  }
  const index = getOrNil(args, 1);
  const table = args[0] as TableValue;
  const keys = table.getKeys();
  if (index instanceof NilValue) {
    return [keys[0], table.get(keys[0])];
  } else {
    const match = index.asIdString();
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].asIdString() === match) {
        if (i + 1 < keys.length) {
          return [keys[i + 1], table.get(keys[i + 1])];
        }
      }
    }
    return [new NilValue()];
  }
}

function pairs(args: Value[]): Value[] {
  return [ExtFunction.of(next), getOrNil(args, 0), new NilValue()];
}

function pcall(args: Value[]): Value[] {
  const f = getOrNil(args, 0);
  if (!(f instanceof FunctionValue) && !(f instanceof ExtFunction)) {
    return [
      BooleanValue.false(),
      StringValue.from("can't call a non function"),
    ];
  }
  const fArgs = args.slice(1, args.length - 1);
  const interpreter = getOrNil(args, args.length - 1);
  try {
    const result = (interpreter as InterpreterValue).interpreter.exec_function(
      f,
      new InternalListValue(fArgs),
      {} as ParserRuleContext
    );
    return [BooleanValue.true(), result];
  } catch (error) {
    const actualError =
      error instanceof RuntimeError && (error as RuntimeError).cause
        ? (error as RuntimeError).cause
        : error;
    return [
      BooleanValue.false(),
      StringValue.from(
        actualError instanceof Error ? actualError.message : String(actualError)
      ),
    ];
  }
}

function toString(args: Value[]): Value[] {
  return [StringValue.from(getOrNil(args, 0).toString())];
}

const basicStdLib = new TableValue();
basicStdLib.set(StringValue.from('assert'), ExtFunction.of(assert));
basicStdLib.set(StringValue.from('error'), ExtFunction.of(error));
basicStdLib.set(StringValue.from('ipairs'), ExtFunction.of(ipairs));
basicStdLib.set(StringValue.from('next'), ExtFunction.of(next));
basicStdLib.set(StringValue.from('pairs'), ExtFunction.of(pairs));
basicStdLib.set(StringValue.from('pcall'), ExtFunction.WithInterpreter(pcall));
basicStdLib.set(StringValue.from('tostring'), ExtFunction.of(toString));

export default basicStdLib;
