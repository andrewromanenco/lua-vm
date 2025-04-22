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

function concat(args: Value[]): Value[] {
  const list = getOrNil(args, 0);
  if (!(list instanceof TableValue)) {
    throw new ExtFunctionError('concat requires first argument to be a table');
  }
  const sep = getOrNil(args, 1);
  if (!(sep instanceof StringValue)) {
    throw new ExtFunctionError('concat requires separator to be a string');
  }
  const iArg = getOrNil(args, 2);
  if (!(iArg instanceof NilValue)) {
    if (!(iArg instanceof NumberValue)) {
      throw new ExtFunctionError('concat requires index to be a number');
    }
  }
  const jArg = getOrNil(args, 3);
  if (!(jArg instanceof NilValue)) {
    if (!(jArg instanceof NumberValue)) {
      throw new ExtFunctionError('concat requires index to be a number');
    }
  }
  const i = iArg instanceof NilValue ? 1 : iArg.number;
  const j = jArg instanceof NilValue ? lastIndex(list) : jArg.number;
  const resultList = [];
  for (let k = i; k <= j; k++) {
    resultList.push(list.get(NumberValue.from(k)).toString());
  }
  return [StringValue.from(resultList.join(sep.string))];
}

function lastIndex(table: TableValue): number {
  let i = 1;
  while (!(table.get(NumberValue.from(i)) instanceof NilValue)) {
    i++;
  }
  return i - 1;
}

const functions = new TableValue();
functions.set(StringValue.from('concat'), ExtFunction.of(concat));

const tableStdLib = new TableValue();
tableStdLib.set(StringValue.from('table'), functions);

export default tableStdLib;
