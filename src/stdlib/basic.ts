import ExtFunction from '@src/interpreter/ExtFunction';
import {
  NilValue,
  StringValue,
  TableValue,
  Value,
} from '@src/interpreter/types';

function toString(args: Value[]): Value[] {
  if (args.length == 0) {
    return [StringValue.from(new NilValue().toString())];
  }
  return [StringValue.from(args[0].toString())];
}

const basicStdLib = new TableValue();
basicStdLib.set(StringValue.from('tostring'), ExtFunction.of(toString));

export default basicStdLib;
