import { ExtFunctionError } from '@src/interpreter/errors';
import ExtFunction from '@src/interpreter/ExtFunction';
import {
  BooleanValue,
  NilValue,
  NumberValue,
  StringValue,
  TableValue,
  Value,
} from '@src/interpreter/types';
import { getOrNil } from '@src/interpreter/utils';

function find(args: Value[]): Value[] {
  const s = getOrNil(args, 0);
  const pattern = getOrNil(args, 1);
  const init = getOrNil(args, 2);
  const plain = getOrNil(args, 3);
  const flags = getOrNil(args, 4);
  if (!(s instanceof StringValue)) {
    throw new ExtFunctionError('first parameter is not string');
  }
  if (!(pattern instanceof StringValue)) {
    throw new ExtFunctionError('pattern parameter is not string');
  }
  if (!(init instanceof NilValue)) {
    if (!(init instanceof NumberValue)) {
      throw new ExtFunctionError('init parameter is not number');
    }
  }
  const startIndex = init instanceof NumberValue ? init.number - 1 : 0;
  if (!(plain instanceof NilValue)) {
    if (!(plain instanceof BooleanValue)) {
      throw new ExtFunctionError('plain parameter is not boolean');
    }
  }
  const plainSearch = plain instanceof BooleanValue ? plain.boolean : false;
  if (!(flags instanceof NilValue)) {
    if (!(flags instanceof StringValue)) {
      throw new ExtFunctionError('flags parameter is not string');
    }
  }
  const regexFlags = flags instanceof StringValue ? flags.string : '';
  if (plainSearch) {
    return plainFind(s.string, pattern.string, startIndex);
  } else {
    return regexFind(s.string, pattern.string, regexFlags, startIndex);
  }
}

function plainFind(s: string, pattern: string, startIndex: number): Value[] {
  const index = s.indexOf(pattern, startIndex);
  if (index === -1) {
    return [new NilValue()];
  }
  return [
    NumberValue.from(index + 1),
    NumberValue.from(index + pattern.length),
    StringValue.from(pattern),
  ];
}

function regexFind(
  s: string,
  pattern: string,
  flags: string,
  startIndex: number
): Value[] {
  const regex = new RegExp(pattern, flags + (startIndex > 0 ? 'g' : ''));
  regex.lastIndex = startIndex;
  const match = regex.exec(s);
  if (!match) {
    return [new NilValue()];
  }
  const index = match.index;
  const endIndex = index + match[0].length;
  return [
    NumberValue.from(index + 1),
    NumberValue.from(endIndex),
    StringValue.from(match[0]),
  ];
}

const functions = new TableValue();
functions.set(StringValue.from('find'), ExtFunction.of(find));

const stringStdLib = new TableValue();
stringStdLib.set(StringValue.from('string'), functions);

export default stringStdLib;
