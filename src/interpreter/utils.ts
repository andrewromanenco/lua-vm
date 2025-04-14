import {
  CharStreams,
  CommonTokenStream,
  ErrorListener,
  RecognitionException,
  Recognizer,
} from 'antlr4';
import LuaLexer from '../parser/LuaLexer';
import LuaParser from '../parser/LuaParser';
import LuaInterpreter from './LuaInterpreter';
import { BooleanValue, InternalListValue, NilValue, Value } from './types';
import { LuaLangError } from './errors';

class ThrowErrorListener<T> extends ErrorListener<T> {
  syntaxError(
    recognizer: Recognizer<T>,
    offendingSymbol: T,
    line: number,
    column: number,
    msg: string,
    _e: RecognitionException | undefined
  ): void {
    throw new LuaLangError(msg, line, column);
  }
}

function make_parser(lua_code: string, showAntlrError = true): LuaParser {
  const charStream = CharStreams.fromString(lua_code);
  const lexer = new LuaLexer(charStream);
  if (!showAntlrError) {
    lexer.removeErrorListeners();
    lexer.addErrorListener(new ThrowErrorListener());
  }
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new LuaParser(tokenStream);
  if (!showAntlrError) {
    parser.removeErrorListeners();
    parser.addErrorListener(new ThrowErrorListener());
  }
  return parser;
}

function executeWithInterpreter(
  lua_code: string,
  interpreter: LuaInterpreter,
  showAntlrError = true
): Value {
  const parser = make_parser(lua_code, showAntlrError);
  const start = parser.start_();
  return start.accept(interpreter);
}

function isFalse(value: Value): boolean {
  if (value instanceof InternalListValue) {
    value = (value as InternalListValue).getValueOrNil(1);
  }
  return (
    value instanceof NilValue ||
    (value instanceof BooleanValue && !(value as BooleanValue).boolean)
  );
}

function isTrue(value: Value): boolean {
  return !isFalse(value);
}

function firstValue(value: Value): Value {
  return flattenList(value).getValueOrNil(1);
}

function flattenList(value: Value): InternalListValue {
  if (value instanceof InternalListValue) {
    const list = value as InternalListValue;
    const result: Value[] = [];
    for (let i = 1; i < list.size(); i++) {
      if (list.get(i) instanceof InternalListValue) {
        result.push((list.get(i) as InternalListValue).getValueOrNil(1));
      } else {
        result.push(list.get(i));
      }
    }
    if (list.get(list.size()) instanceof InternalListValue) {
      const lastList = flattenList(list.get(list.size())) as InternalListValue;
      result.push(...lastList.asList());
    } else {
      result.push(list.getValueOrNil(list.size()));
    }
    return new InternalListValue(result);
  } else {
    return new InternalListValue([value]);
  }
}

export {
  make_parser,
  executeWithInterpreter,
  isFalse,
  isTrue,
  firstValue,
  flattenList,
};
