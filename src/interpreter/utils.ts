import { CharStreams, CommonTokenStream } from "antlr4";
import LuaLexer from "../parser/LuaLexer";
import LuaParser from "../parser/LuaParser";
import LuaInterpreter from "./LuaInterpreter";
import { Value } from "./types";

function make_parser(lua_code: string): LuaParser {
    const charStream = CharStreams.fromString(lua_code);
    const lexer = new LuaLexer(charStream);
    const tokenStream = new CommonTokenStream(lexer);
    return new LuaParser(tokenStream);
}

function execute(lua_code: string, interpreter: LuaInterpreter): Value {
    const parser = make_parser(lua_code);
    const start = parser.start_();
    return start.accept(interpreter);
}

export { make_parser, execute };
