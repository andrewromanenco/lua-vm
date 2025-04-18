import { ExtFunctionError } from '@src/interpreter/errors';
import ExtFunction from '@src/interpreter/ExtFunction';
import {
  NilValue,
  NumberValue,
  StringValue,
  TableValue,
  Value,
} from '@src/interpreter/types';
import { getOrNil, isFalse } from '@src/interpreter/utils';

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

function toString(args: Value[]): Value[] {
  return [StringValue.from(getOrNil(args, 0).toString())];
}

const basicStdLib = new TableValue();
basicStdLib.set(StringValue.from('assert'), ExtFunction.of(assert));
basicStdLib.set(StringValue.from('error'), ExtFunction.of(error));
basicStdLib.set(StringValue.from('ipairs'), ExtFunction.of(ipairs));
basicStdLib.set(StringValue.from('tostring'), ExtFunction.of(toString));

export default basicStdLib;
