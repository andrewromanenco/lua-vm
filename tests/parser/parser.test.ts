import LuaLexer from "@src/parser/LuaLexer";
import LuaParser, { Exp_numberContext } from "@src/parser/LuaParser";
import LuaParserListener from "@src/parser/LuaParserListener";
import { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";

class TestListener extends LuaParserListener {

    public callBackWasCalled = false;

    enterExp_number = (_ctx: Exp_numberContext): void => {
        this.callBackWasCalled = true;
    }

}

test("parser smoke test: expression is called", () => {
    const charStream = CharStreams.fromString('foo = 1;');
    const lexer = new LuaLexer(charStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new LuaParser(tokenStream);
    const ruleContext = parser.block();
    
    const testListener = new TestListener();
    ParseTreeWalker.DEFAULT.walk(testListener, ruleContext);

    expect(testListener.callBackWasCalled).toBe(true);
});

test("parser smoke test: expression is NOT alled", () => {
    const charStream = CharStreams.fromString('some_function();');
    const lexer = new LuaLexer(charStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new LuaParser(tokenStream);
    const ruleContext = parser.block();
    
    const testListener = new TestListener();
    ParseTreeWalker.DEFAULT.walk(testListener, ruleContext);

    expect(testListener.callBackWasCalled).toBe(false);
});
