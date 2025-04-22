import { BlockContext } from '../parser/LuaParser';
import LuaInterpreter from './LuaInterpreter';

abstract class Value {
  abstract asIdString(): string;
  abstract toString(): string;
}

class NilValue extends Value {
  asIdString(): string {
    return 'nil';
  }

  toString(): string {
    return 'nil';
  }
}

class NumberValue extends Value {
  private static readonly uuid = 'a189a0cc-c7c9-4300-9f71-305029698356';
  private readonly _number: number;

  static from(number: number): NumberValue {
    return new NumberValue(number);
  }

  constructor(number: number) {
    super();
    this._number = number;
  }

  get number(): number {
    return this._number;
  }

  asIdString(): string {
    return `num:${NumberValue.uuid}:${this._number}`;
  }

  toString(): string {
    return this._number.toString();
  }
}

class StringValue extends Value {
  private static readonly uuid = 'a189a0cc-c7c9-4300-9f71-305029698357';
  private readonly _str: string;

  static from(str: string): StringValue {
    return new StringValue(str);
  }

  constructor(str: string) {
    super();
    this._str = str;
  }

  get string(): string {
    return this._str;
  }

  asIdString(): string {
    return `str:${StringValue.uuid}:${this._str}`;
  }

  toString(): string {
    return this._str;
  }
}

class TableValue extends Value {
  private readonly uuid = crypto.randomUUID();
  // ref to key mapped to [key, value]
  private readonly _table: Map<string, Value[]> = new Map<string, Value[]>();

  get(key: Value): Value {
    const value = this._table.get(key.asIdString());
    return value ? value[1] : new NilValue();
  }

  getKeys(): Value[] {
    const keys: Value[] = [];
    this._table.forEach((value, _key) => {
      keys.push(value[0]);
    });
    return keys;
  }

  set(key: Value, value: Value): void {
    if (key instanceof NilValue) return;
    this._table.set(key.asIdString(), [key, value]);
  }

  remove(key: Value): Value {
    if (key instanceof NilValue) return new NilValue();
    const result = this.get(key);
    this._table.delete(key.asIdString());
    return result;
  }

  hasKey(key: Value): boolean {
    return this._table.has(key.asIdString());
  }

  asIdString(): string {
    return `table:${this.uuid}`;
  }

  toString(): string {
    return this.asIdString();
  }

  size(): number {
    return this._table.size;
  }

  mergeInWithOverride(table: TableValue): void {
    table.getKeys().forEach(key => {
      const value = table.get(key);
      this.set(key, value);
    });
  }
}

class BooleanValue extends Value {
  private static readonly uuid = 'a189a0cc-c7c9-4300-9f71-305029698358';
  private readonly value: boolean;

  static true(): BooleanValue {
    return new BooleanValue(true);
  }

  static false(): BooleanValue {
    return new BooleanValue(false);
  }

  static from(b: boolean): BooleanValue {
    return new BooleanValue(b);
  }

  constructor(value: boolean) {
    super();
    this.value = value;
  }

  get boolean(): boolean {
    return this.value;
  }

  asIdString(): string {
    return `bool:${BooleanValue.uuid}:${this.value}`;
  }

  toString(): string {
    return this.value.toString();
  }
}

class FunctionValue extends Value {
  private readonly uuid: string;
  private readonly parameters: InternalListValue;
  private readonly block: BlockContext;

  constructor(parameters: InternalListValue, block: BlockContext) {
    super();
    this.uuid = crypto.randomUUID();
    this.parameters = parameters;
    this.block = block;
  }

  body(): BlockContext {
    return this.block;
  }

  params(): InternalListValue {
    return this.parameters;
  }

  asIdString(): string {
    return `fun:${this.uuid}`;
  }

  toString(): string {
    return this.asIdString();
  }
}

class InternalListValue extends Value {
  private readonly _list: Value[];

  constructor(values: Value[]) {
    super();
    this._list = values;
  }

  get list(): Value[] {
    return this._list;
  }

  get(index: number): Value {
    return this._list[index - 1];
  }

  getValueOrNil(index: number) {
    if (index <= this._list.length) {
      return this._list[index - 1];
    } else {
      return new NilValue();
    }
  }

  size(): number {
    return this._list.length;
  }

  asList(): Value[] {
    return this._list;
  }

  asIdString(): string {
    throw new Error('Not implemented');
  }

  toString(): string {
    throw new Error('Not implemented');
  }
}

class InternalPairValue extends Value {
  private readonly _left: Value;
  private readonly _right: Value;

  static from(left: Value, right: Value): InternalPairValue {
    return new InternalPairValue(left, right);
  }

  static fromRight(right: Value): InternalPairValue {
    return new InternalPairValue(new NilValue(), right);
  }

  private constructor(left: Value, right: Value) {
    super();
    this._left = left;
    this._right = right;
  }

  get left(): Value {
    return this._left;
  }

  get isLeftNil(): boolean {
    return this._left instanceof NilValue;
  }

  get right(): Value {
    return this._right;
  }

  asIdString(): string {
    throw new Error('Method not implemented.');
  }

  toString(): string {
    throw new Error('Not implemented');
  }
}

class InternalVar extends Value {
  private f: (value: Value) => void;

  constructor(f: (value: Value) => void) {
    super();
    this.f = f;
  }

  set(value: Value): void {
    this.f(value);
  }

  asIdString(): string {
    throw new Error('Method not implemented.');
  }

  toString(): string {
    throw new Error('Not implemented');
  }
}

class InterpreterValue extends Value {
  private _interpreter: LuaInterpreter;

  constructor(interpreter: LuaInterpreter) {
    super();
    this._interpreter = interpreter;
  }

  get interpreter(): LuaInterpreter {
    return this._interpreter;
  }
  asIdString(): string {
    throw new Error('Method not implemented.');
  }
  toString(): string {
    throw new Error('Method not implemented.');
  }
}

export {
  Value,
  NilValue,
  NumberValue,
  StringValue,
  BooleanValue,
  TableValue,
  FunctionValue,
  InternalListValue,
  InternalPairValue,
  InternalVar,
  InterpreterValue,
};
