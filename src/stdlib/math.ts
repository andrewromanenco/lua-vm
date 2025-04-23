import { ExtFunctionError } from '@src/interpreter/errors';
import ExtFunction from '@src/interpreter/ExtFunction';
import {
  NilValue,
  NumberValue,
  StringValue,
  TableValue,
  Value,
} from '@src/interpreter/types';
import { getOrNil } from '@src/interpreter/utils';

function getNumberOrError(args: Value[]): number {
  const n = getOrNil(args, 0);
  if (!(n instanceof NumberValue)) {
    throw new ExtFunctionError('not a number parameter');
  }
  return n.number;
}

function abs(args: Value[]): Value[] {
  const n = getNumberOrError(args);
  return [NumberValue.from(Math.abs(n))];
}

function ceil(args: Value[]): Value[] {
  const n = getNumberOrError(args);
  return [NumberValue.from(Math.ceil(n))];
}

function floor(args: Value[]): Value[] {
  const n = getNumberOrError(args);
  return [NumberValue.from(Math.floor(n))];
}

function minMax(args: Value[], max: boolean): Value[] {
  if (args.length == 0) {
    return [new NilValue()];
  }
  getNumberOrError(args);
  let result = args[0] as NumberValue;
  for (let i = 1; i < args.length; i++) {
    const n = getOrNil(args, i);
    if (!(n instanceof NumberValue)) {
      throw new ExtFunctionError('an element is not a number');
    }
    if (
      (max && result.number < n.number) ||
      (!max && result.number > n.number)
    ) {
      result = n;
    }
  }
  return [result];
}

function max(args: Value[]): Value[] {
  return minMax(args, true);
}

function min(args: Value[]): Value[] {
  return minMax(args, false);
}

function sqrt(args: Value[]): Value[] {
  const n = getNumberOrError(args);
  return [NumberValue.from(Math.sqrt(n))];
}

const functions = new TableValue();
functions.set(StringValue.from('abs'), ExtFunction.of(abs));
functions.set(StringValue.from('ceil'), ExtFunction.of(ceil));
functions.set(StringValue.from('floor'), ExtFunction.of(floor));
functions.set(StringValue.from('max'), ExtFunction.of(max));
functions.set(StringValue.from('min'), ExtFunction.of(min));
functions.set(StringValue.from('sqrt'), ExtFunction.of(sqrt));
const mathStdLib = new TableValue();
mathStdLib.set(StringValue.from('math'), functions);

export default mathStdLib;
