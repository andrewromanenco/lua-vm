import { ExtFunctionError } from '@src/interpreter/errors';
import ExtFunction from '@src/interpreter/ExtFunction';
import {
  NilValue,
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

function toString(args: Value[]): Value[] {
  return [StringValue.from(getOrNil(args, 0).toString())];
}

const basicStdLib = new TableValue();
basicStdLib.set(StringValue.from('assert'), ExtFunction.of(assert));
basicStdLib.set(StringValue.from('error'), ExtFunction.of(error));
basicStdLib.set(StringValue.from('tostring'), ExtFunction.of(toString));

export default basicStdLib;
