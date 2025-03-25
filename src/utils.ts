import { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import LuaLexer from "./parser/LuaLexer";
import LuaParser from "./parser/LuaParser";

export function make_parser(lua_code: string): LuaParser {
    const charStream = CharStreams.fromString(lua_code);
    const lexer = new LuaLexer(charStream);
    const tokenStream = new CommonTokenStream(lexer);
    return new LuaParser(tokenStream);
}