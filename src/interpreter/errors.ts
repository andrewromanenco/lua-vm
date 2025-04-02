import { ParserRuleContext } from "antlr4/src/antlr4/context/ParserRuleContext";

class VMError extends Error {
    constructor(message: string) {
        super(message);
    }
}

class NotYetImplemented extends VMError {
    constructor(feature: string, ctx: ParserRuleContext) {
        const line = ctx && ctx.start? ctx.start.line : -1;
        const col = ctx && ctx.start? ctx.start.column : -1;
        super(`Feature not yet implemented(line: ${line}, col: ${col}): ${feature}`);
    }
}

class RuntimeError extends VMError {
    constructor(message: string, ctx: ParserRuleContext) {
        const line = ctx && ctx.start? ctx.start.line : -1;
        const col = ctx && ctx.start? ctx.start.column : -1;
        super(`Runtime error: (line: ${line}, col: ${col}): ${message}`);
    }
}

export { NotYetImplemented, RuntimeError };
