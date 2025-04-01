import { CharStreams, CommonTokenStream } from "antlr4";
import LuaLexer from "../parser/LuaLexer";
import LuaParser from "../parser/LuaParser";
import LuaInterpreter from "./LuaInterpreter";
import { BooleanValue, InternalListValue, NilValue, Value } from "./types";

function make_parser(lua_code: string): LuaParser {
    const charStream = CharStreams.fromString(lua_code);
    const lexer = new LuaLexer(charStream);
    const tokenStream = new CommonTokenStream(lexer);
    return new LuaParser(tokenStream);
}

function executeWithInterpreter(lua_code: string, interpreter: LuaInterpreter): Value {
    const parser = make_parser(lua_code);
    const start = parser.start_();
    return start.accept(interpreter);
}

function isFalse(value: Value): boolean {
    if (value instanceof InternalListValue) {
        value = (value as InternalListValue).getValueOrNil(1);
    }
    return value instanceof NilValue
        || (value instanceof BooleanValue && !(value as BooleanValue).boolean);
}

function isTrue(value: Value): boolean {
    return !isFalse(value);
}

function unpack(value: Value) {
    return value instanceof InternalListValue ?
        (value as InternalListValue).getValueOrNil(1) : value;
}

export { make_parser, executeWithInterpreter, isFalse, isTrue, unpack };
