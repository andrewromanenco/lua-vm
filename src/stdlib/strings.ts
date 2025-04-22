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

function len(args: Value[]): Value[] {
  const s = getOrNil(args, 0);
  if (!(s instanceof StringValue)) {
    throw new ExtFunctionError('parameter is not string');
  }
  return [NumberValue.from(s.string.length)];
}

function lower(args: Value[]): Value[] {
  const s = getOrNil(args, 0);
  if (!(s instanceof StringValue)) {
    throw new ExtFunctionError('parameter is not string');
  }
  return [StringValue.from(s.string.toLowerCase())];
}

function upper(args: Value[]): Value[] {
  const s = getOrNil(args, 0);
  if (!(s instanceof StringValue)) {
    throw new ExtFunctionError('parameter is not string');
  }
  return [StringValue.from(s.string.toUpperCase())];
}

function rep(args: Value[]): Value[] {
  const s = getOrNil(args, 0);
  if (!(s instanceof StringValue)) {
    throw new ExtFunctionError('parameter is not string');
  }
  const n = getOrNil(args, 1);
  if (!(n instanceof NumberValue)) {
    throw new ExtFunctionError('parameter is not number');
  }
  const sep = getOrNil(args, 2);
  if (!(sep instanceof NilValue)) {
    if (!(sep instanceof StringValue)) {
      throw new ExtFunctionError('separator parameter is not string');
    }
  }
  const separator = sep instanceof StringValue ? sep.string : '';
  return [StringValue.from(Array(n.number).fill(s.string).join(separator))];
}

function reverse(args: Value[]): Value[] {
  const s = getOrNil(args, 0);
  if (!(s instanceof StringValue)) {
    throw new ExtFunctionError('parameter is not string');
  }
  return [StringValue.from(s.string.split('').reverse().join(''))];
}

function sub(args: Value[]): Value[] {
  const s = getOrNil(args, 0);
  if (!(s instanceof StringValue)) {
    throw new ExtFunctionError('parameter is not string');
  }
  const start = getOrNil(args, 1);
  if (!(start instanceof NumberValue)) {
    throw new ExtFunctionError('start parameter is not number');
  }
  const end = getOrNil(args, 2);
  if (!(end instanceof NilValue)) {
    if (!(end instanceof NumberValue)) {
      throw new ExtFunctionError('end parameter is not number');
    }
  }
  const strLength = s.string.length;
  const startIndex =
    start.number < 0 ? Math.max(0, strLength + start.number) : start.number - 1;
  const endIndex =
    end instanceof NumberValue
      ? end.number < 0
        ? strLength + end.number + 1
        : end.number
      : strLength;
  return [StringValue.from(s.string.substring(startIndex, endIndex))];
}

const functions = new TableValue();
functions.set(StringValue.from('find'), ExtFunction.of(find));
functions.set(StringValue.from('len'), ExtFunction.of(len));
functions.set(StringValue.from('lower'), ExtFunction.of(lower));
functions.set(StringValue.from('upper'), ExtFunction.of(upper));
functions.set(StringValue.from('rep'), ExtFunction.of(rep));
functions.set(StringValue.from('reverse'), ExtFunction.of(reverse));
functions.set(StringValue.from('sub'), ExtFunction.of(sub));

const stringStdLib = new TableValue();
stringStdLib.set(StringValue.from('string'), functions);

export default stringStdLib;
