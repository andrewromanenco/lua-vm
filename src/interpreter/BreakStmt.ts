import { ParserRuleContext } from 'antlr4';

export default class BreakStmt extends Error {
  private readonly _ctx: ParserRuleContext;

  constructor(ctx: ParserRuleContext) {
    super();
    this._ctx = ctx;
  }

  get ctx(): ParserRuleContext {
    return this._ctx;
  }

  static breakCalled(f: () => void): boolean {
    try {
      f();
    } catch (error) {
      if (error instanceof BreakStmt) {
        return true;
      } else {
        throw error;
      }
    }
    return false;
  }
}
