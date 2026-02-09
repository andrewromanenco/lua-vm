import LuaParserVisitor from '../parser/LuaParserVisitor';
import {
  Args_exp_listContext,
  Args_stringContext,
  Args_table_constructorContext,
  AttnamelistContext,
  AttribContext,
  BlockContext,
  ChunkContext,
  Exp_andContext,
  Exp_arithmetic_highContext,
  Exp_arithmetic_lowContext,
  Exp_bitsContext,
  Exp_concatContext,
  Exp_exponentContext,
  Exp_falseContext,
  Exp_function_defContext,
  Exp_nilContext,
  Exp_numberContext,
  Exp_orContext,
  Exp_relContext,
  Exp_stringContext,
  Exp_trueContext,
  Exp_unaryContext,
  Exp_varargContext,
  ExpContext,
  ExplistContext,
  Fcall_exp_extContext,
  Fcall_expContext,
  Fcall_function_call_extContext,
  Fcall_function_callContext,
  Fcall_name_extContext,
  Fcall_nameContext,
  Field_exp_expContext,
  Field_expContext,
  Field_name_expContext,
  FieldlistContext,
  FieldsepContext,
  FuncbodyContext,
  FuncnameContext,
  FunctiondefContext,
  LabelContext,
  NamelistContext,
  Number_floatContext,
  Number_hex_floatContext,
  Number_hexContext,
  Number_intContext,
  Parlist_namellistContext,
  Parlist_noneContext,
  Parlist_varargContext,
  Prefixexp_expContext,
  Prefixexp_function_callContext,
  Prefixexp_nameContext,
  RetstatContext,
  Start_Context,
  Stat_assing_varsContext,
  Stat_breakContext,
  Stat_doContext,
  Stat_for_listContext,
  Stat_for_varContext,
  Stat_function_callContext,
  Stat_functionContext,
  Stat_gotoContext,
  Stat_ifContext,
  Stat_labelContext,
  Stat_local_attnamelistContext,
  Stat_local_functionContext,
  Stat_no_opContext,
  Stat_prefix_expContext,
  Stat_repeatContext,
  Stat_table_construnctorContext,
  Stat_whileContext,
  String_charstringContext,
  String_longstringContext,
  String_stringContext,
  TableconstructorContext,
  Var_expContext,
  Var_nameContext,
  VarlistContext,
} from '../parser/LuaParser';
import {
  BooleanValue,
  FunctionValue,
  InternalListValue,
  InternalPairValue,
  InternalVar,
  NilValue,
  NumberValue,
  StringValue,
  TableValue,
  Value,
} from './types';
import ReturnStmt from './ReturnStmt';
import VisibilityScope from './VisibilityScope';
import { LuaLangError, NotYetImplemented, RuntimeError } from './errors';
import BreakStmt from './BreakStmt';
import { firstValue, flattenList, isFalse, isTrue } from './utils';
import ExtFunction from './ExtFunction';
import { ParserRuleContext, TerminalNode } from 'antlr4';

export default class LuaInterpreter extends LuaParserVisitor<Value> {
  private currentScope: VisibilityScope;
  private runCredits: number;

  constructor(runCredits = 10000) {
    super();
    this.currentScope = VisibilityScope.root();
    this.runCredits = runCredits;
  }

  private consumeCredit(ctx: ParserRuleContext): void {
    if (this.runCredits == 0) {
      throw new RuntimeError('The program runs too long', ctx);
    } else {
      this.runCredits--;
    }
  }

  getAllGlobalVars(): TableValue {
    return this.currentScope.globalVars();
  }

  getGlobalVar(key: Value): Value {
    // this function is called after interpreter is done
    // as a result, current scope is the global scope
    return this.currentScope.get(key);
  }

  setVar(name: Value, value: Value): void {
    this.currentScope.set(name, value);
  }

  scoped(f: () => Value): Value {
    this.currentScope = VisibilityScope.childOf(this.currentScope);
    try {
      return f();
    } finally {
      this.currentScope = this.currentScope.parent();
    }
  }

  visitStart_ = (ctx: Start_Context): Value => {
    try {
      return ctx.chunk().accept(this);
    } catch (error) {
      if (error instanceof BreakStmt) {
        const breakCtx = (error as BreakStmt).ctx;
        const line = breakCtx && breakCtx.start ? breakCtx.start.line : -1;
        const col = breakCtx && breakCtx.start ? breakCtx.start.column : -1;
        throw new LuaLangError('Break called outside of a loop', line, col);
      } else {
        throw error;
      }
    }
  };

  visitChunk = (ctx: ChunkContext): Value => {
    return ReturnStmt.executeReturnable(() => {
      return ctx.block().accept(this);
    });
  };

  visitBlock = (ctx: BlockContext): Value => {
    return this.scoped(() => {
      ctx.stat_list().forEach(stat => stat.accept(this));
      if (ctx.retstat()) {
        ctx.retstat().accept(this);
      }
      return new NilValue();
    });
  };

  visitStat_no_op = (_ctx: Stat_no_opContext): Value => {
    return new NilValue();
  };

  visitStat_assing_vars = (ctx: Stat_assing_varsContext): Value => {
    const vars = flattenList(ctx.varlist().accept(this));
    const values = flattenList(ctx.explist().accept(this));
    for (let i = 1; i <= vars.size(); i++) {
      (vars.get(i) as InternalVar).set(values.getValueOrNil(i));
    }
    return new NilValue();
  };

  visitStat_function_call = (ctx: Stat_function_callContext): Value => {
    return ctx.functioncall().accept(this);
  };

  visitStat_label = (ctx: Stat_labelContext): Value => {
    throw new NotYetImplemented('label', ctx, 'N001');
  };

  visitStat_break = (ctx: Stat_breakContext): Value => {
    throw new BreakStmt(ctx);
  };

  visitStat_goto = (ctx: Stat_gotoContext): Value => {
    throw new NotYetImplemented('goto', ctx, 'N001');
  };

  visitStat_do = (ctx: Stat_doContext): Value => {
    return ctx.block().accept(this);
  };

  visitStat_while = (ctx: Stat_whileContext): Value => {
    let exp = firstValue(ctx.exp().accept(this));
    while (isTrue(exp)) {
      if (
        BreakStmt.breakCalled(() => {
          ctx.block().accept(this);
        })
      ) {
        return new NilValue();
      }
      exp = firstValue(ctx.exp().accept(this));
    }
    return new NilValue();
  };

  visitStat_repeat = (ctx: Stat_repeatContext): Value => {
    return this.scoped(() => {
      let exp;
      do {
        const breaked = BreakStmt.breakCalled(() => {
          ctx
            .block()
            .stat_list()
            .forEach(stmt => stmt.accept(this));
        });
        if (breaked) {
          break;
        }
        exp = firstValue(ctx.exp().accept(this));
      } while (isFalse(exp));
      return new NilValue();
    });
  };

  visitStat_if = (ctx: Stat_ifContext): Value => {
    for (let i = 0; i < ctx.exp_list().length; i++) {
      const expValue = firstValue(ctx.exp_list()[i].accept(this));
      if (isFalse(expValue)) {
        continue;
      }
      return ctx.block_list()[i].accept(this);
    }
    if (ctx.ELSE()) {
      const elseBlock = ctx.block_list()[ctx.block_list().length - 1];
      return elseBlock.accept(this);
    } else {
      return new NilValue();
    }
  };

  visitStat_for_var = (ctx: Stat_for_varContext): Value => {
    const varName = StringValue.from(ctx.NAME().getText());
    const initValue = firstValue(ctx.exp(0).accept(this));
    const limit = firstValue(ctx.exp(1).accept(this));
    const step =
      ctx.exp_list().length == 3
        ? firstValue(ctx.exp(2).accept(this))
        : NumberValue.from(1);
    if (!(initValue instanceof NumberValue)) {
      throw new RuntimeError('init value is not a number', ctx);
    }
    if (!(limit instanceof NumberValue)) {
      throw new RuntimeError('limit value is not a number', ctx);
    }
    if (!(step instanceof NumberValue)) {
      throw new RuntimeError('step is not a number', ctx);
    }
    if (step.number == 0) {
      throw new RuntimeError('step is Zero', ctx);
    }
    const n = limit.number;
    const s = step.number;
    const block = ctx.block();
    return this.scoped(() => {
      let i = initValue.number;
      while (s > 0 ? i <= n : i >= n) {
        this.currentScope.setLocal(varName, NumberValue.from(i));
        if (
          BreakStmt.breakCalled(() => {
            block.accept(this);
          })
        ) {
          break;
        }
        const afterBodyI = this.currentScope.get(varName);
        if (!(afterBodyI instanceof NumberValue)) {
          throw new RuntimeError(
            'FOR loop variable is not a number any more (changed in loop body)',
            ctx
          );
        }
        i = (afterBodyI as NumberValue).number;
        i += s;
      }
      return new NilValue();
    });
  };

  visitStat_for_list = (ctx: Stat_for_listContext): Value => {
    const names = ctx.namelist().accept(this) as InternalListValue;
    const expressions = flattenList(ctx.explist().accept(this));
    const block = ctx.block();
    const iteratorFunction = expressions.getValueOrNil(1);
    const state = expressions.getValueOrNil(2);
    let controlVariable = expressions.getValueOrNil(3);
    if (
      !(iteratorFunction instanceof FunctionValue) &&
      !(iteratorFunction instanceof ExtFunction)
    ) {
      throw new RuntimeError('Iterator is not a function', ctx);
    }
    do {
      const iterationResult = flattenList(
        this.exec_function(
          iteratorFunction,
          new InternalListValue([state, controlVariable]),
          ctx
        )
      );
      controlVariable = iterationResult.getValueOrNil(1);
      if (controlVariable instanceof NilValue) return new NilValue();
      this.scoped(() => {
        for (let i = 1; i <= names.size(); i++) {
          this.currentScope.setLocal(
            names.getValueOrNil(i),
            iterationResult.getValueOrNil(i)
          );
        }
        if (
          BreakStmt.breakCalled(() => {
            block.accept(this);
          })
        ) {
          return new NilValue();
        }
        return new NilValue();
      });
    } while (true); // eslint-disable-line no-constant-condition
  };

  visitStat_function = (ctx: Stat_functionContext): Value => {
    const v = ctx.funcname().accept(this) as InternalVar;
    const fun = ctx.funcbody().accept(this) as FunctionValue;
    v.set(fun);
    return new NilValue();
  };

  visitStat_local_function = (ctx: Stat_local_functionContext): Value => {
    const name = StringValue.from(ctx.NAME().getText());
    const fun = ctx.funcbody().accept(this);
    this.currentScope.setLocal(name, fun);
    return new NilValue();
  };

  visitStat_local_attnamelist = (ctx: Stat_local_attnamelistContext): Value => {
    const names = flattenList(ctx.attnamelist().accept(this));
    const exps = ctx.explist()
      ? flattenList(ctx.explist().accept(this))
      : new InternalListValue([]);
    for (let i = 1; i <= names.size(); i++) {
      this.currentScope.setLocal(names.get(i), exps.getValueOrNil(i));
    }
    return new NilValue();
  };

  visitAttnamelist = (ctx: AttnamelistContext): Value => {
    const result: Value[] = [];
    ctx.NAME_list().forEach(name => {
      result.push(StringValue.from(name.getText()));
    });
    return new InternalListValue(result);
  };

  visitAttrib = (ctx: AttribContext): Value => {
    throw new NotYetImplemented('attribute', ctx, 'N002');
  };

  visitRetstat = (ctx: RetstatContext): Value => {
    if (ctx.RETURN()) {
      const resultList: Value[] = [];
      if (ctx.explist()) {
        const values = flattenList(ctx.explist().accept(this));
        const list = values as InternalListValue;
        for (let i = 1; i <= list.size(); i++) {
          resultList.push(list.get(i));
        }
      }
      throw ReturnStmt.withList(resultList);
    } else if (ctx.CONTINUE()) {
      throw new NotYetImplemented(
        'continue is not supported in Lua',
        ctx,
        'N003'
      );
    } else {
      throw new RuntimeError(
        "This 'break' should not happen; open an issue on GitHub",
        ctx
      );
    }
  };

  visitLabel = (ctx: LabelContext): Value => {
    throw new NotYetImplemented('label', ctx, 'N001');
  };

  visitFuncname = (ctx: FuncnameContext): Value => {
    const name = StringValue.from(ctx.NAME(0).getText());
    if (ctx.NAME_list().length == 1) {
      return new InternalVar(v => this.currentScope.set(name, v));
    }
    let table = this.currentScope.get(name);
    if (!(table instanceof TableValue)) {
      throw new RuntimeError(
        `expecting table, got ${table.constructor.name}`,
        ctx
      );
    }
    for (let i = 1; i < ctx.NAME_list().length - 1; i++) {
      table = (table as TableValue).get(
        StringValue.from(ctx.NAME(i).getText())
      );
      if (!(table instanceof TableValue)) {
        throw new RuntimeError(
          `got ${table.constructor.name} instead of table`,
          ctx
        );
      }
    }
    const lastName = StringValue.from(
      ctx.NAME_list()[ctx.NAME_list().length - 1].getText()
    );
    return new InternalVar(v => table.set(lastName, v));
  };

  visitVarlist = (ctx: VarlistContext): Value => {
    const result: Value[] = [];
    ctx.var__list().forEach(v => result.push(v.accept(this)));
    return new InternalListValue(result);
  };

  visitNamelist = (ctx: NamelistContext): Value => {
    const result: Value[] = [];
    ctx
      .NAME_list()
      .forEach(name => result.push(StringValue.from(name.getText())));
    return new InternalListValue(result);
  };

  visitExplist = (ctx: ExplistContext): Value => {
    const values = ctx.exp_list().map(exp => exp.accept(this));
    return new InternalListValue(values);
  };

  visitExp_true = (ctx: Exp_trueContext): Value => {
    this.consumeCredit(ctx);
    return BooleanValue.true();
  };

  visitExp_bits = (ctx: Exp_bitsContext): Value => {
    this.consumeCredit(ctx);
    const left = firstValue(ctx.exp(0).accept(this));
    const right = firstValue(ctx.exp(1).accept(this));

    let op: string;
    if (ctx.AMP()) {
      op = '__band';
    } else if (ctx.PIPE()) {
      op = '__bor';
    } else if (ctx.SQUIG()) {
      op = '__bxor';
    } else if (ctx.GG()) {
      op = '__shr';
    } else {
      op = '__shl';
    }

    const metatableOperation =
      getMetatableOperation(left, op) || getMetatableOperation(right, op);

    if (metatableOperation) {
      return this.exec_function(
        metatableOperation,
        new InternalListValue([left, right]),
        ctx
      );
    }

    if (!(left instanceof NumberValue)) {
      throw new RuntimeError(
        `Expected NumberValue, but got ${left.constructor.name}`,
        ctx
      );
    }
    if (!(right instanceof NumberValue)) {
      throw new RuntimeError(
        `Expected NumberValue, but got ${right.constructor.name}`,
        ctx
      );
    }
    const l = (left as NumberValue).number;
    const r = (right as NumberValue).number;
    if (ctx.AMP()) {
      return NumberValue.from(l & r);
    } else if (ctx.PIPE()) {
      return NumberValue.from(l | r);
    } else if (ctx.SQUIG()) {
      return NumberValue.from(l ^ r);
    } else if (ctx.GG()) {
      return NumberValue.from(l >> r);
    } else {
      return NumberValue.from(l << r);
    }
  };

  visitExp_and = (ctx: Exp_andContext): Value => {
    this.consumeCredit(ctx);
    const left = firstValue(ctx.exp(0).accept(this));

    if (isFalse(left)) {
      return left;
    }

    const right = firstValue(ctx.exp(1).accept(this));
    return right;
  };

  visitExp_string = (ctx: Exp_stringContext): Value => {
    this.consumeCredit(ctx);
    return ctx.string_().accept(this);
  };

  visitExp_arithmetic_high = (ctx: Exp_arithmetic_highContext): Value => {
    this.consumeCredit(ctx);
    const left = firstValue(ctx.exp(0).accept(this));
    const right = firstValue(ctx.exp(1).accept(this));

    let op: string;
    if (ctx.STAR()) {
      op = '__mul';
    } else if (ctx.SLASH()) {
      op = '__div';
    } else if (ctx.PER()) {
      op = '__mod';
    } else if (ctx.SS()) {
      op = '__idiv';
    } else {
      throw new NotYetImplemented('will never happen', ctx, 'N999');
    }
    const metatableOperation =
      getMetatableOperation(left, op) || getMetatableOperation(right, op);

    if (metatableOperation) {
      return this.exec_function(
        metatableOperation,
        new InternalListValue([left, right]),
        ctx
      );
    }

    if (!(left instanceof NumberValue)) {
      throw new RuntimeError(
        `Expected NumberValue, but got ${left.constructor.name}`,
        ctx
      );
    }
    if (!(right instanceof NumberValue)) {
      throw new RuntimeError(
        `Expected NumberValue, but got ${right.constructor.name}`,
        ctx
      );
    }
    const l = (left as NumberValue).number;
    const r = (right as NumberValue).number;
    if (ctx.STAR()) {
      return new NumberValue(l * r);
    } else if (ctx.SLASH()) {
      return new NumberValue(l / r);
    } else if (ctx.PER()) {
      return new NumberValue(l % r);
    } else if (ctx.SS()) {
      return new NumberValue(Math.floor(l / r));
    }
    throw new NotYetImplemented('will never happen', ctx, 'N999');
  };

  visitExp_rel = (ctx: Exp_relContext): Value => {
    this.consumeCredit(ctx);
    const left = firstValue(ctx.exp(0).accept(this));
    const right = firstValue(ctx.exp(1).accept(this));
    if (ctx.EE()) {
      return this.compare_ee(left, right, ctx);
    }
    if (ctx.SQEQ()) {
      return BooleanValue.from(!this.compare_ee(left, right, ctx).boolean);
    }
    if (ctx.LT()) {
      return this.compare_lt(left, right, ctx, false);
    }
    if (ctx.LE()) {
      return this.compare_lt(left, right, ctx, true);
    }
    if (ctx.GT()) {
      return this.compare_lt(right, left, ctx, false);
    }
    if (ctx.GE()) {
      return this.compare_lt(right, left, ctx, true);
    }
    throw new NotYetImplemented('compare for non numbers', ctx, 'N999');
  };

  private compare_lt(
    left: Value,
    right: Value,
    ctx: Exp_relContext,
    le: boolean
  ): BooleanValue {
    this.consumeCredit(ctx);

    const op = le ? '__le' : '__lt';
    const metatableOperation =
      getMetatableOperation(left, op) || getMetatableOperation(right, op);

    if (metatableOperation) {
      return BooleanValue.from(
        isTrue(
          this.exec_function(
            metatableOperation,
            new InternalListValue([left, right]),
            ctx
          )
        )
      );
    }

    if (left instanceof NumberValue) {
      if (!(right instanceof NumberValue)) {
        throw new RuntimeError(
          `Right expression not a Number - ${right.constructor.name}`,
          ctx
        );
      }
      const less = (left as NumberValue).number < (right as NumberValue).number;
      const eq = (left as NumberValue).number == (right as NumberValue).number;
      return BooleanValue.from(less || (le && eq));
    } else if (left instanceof StringValue) {
      if (!(right instanceof StringValue)) {
        throw new RuntimeError(
          `Right expression not a String - ${right.constructor.name}`,
          ctx
        );
      }
      const less = (left as StringValue).string < (right as StringValue).string;
      const eq = (left as StringValue).string == (right as StringValue).string;
      return BooleanValue.from(less || (le && eq));
    } else {
      throw new RuntimeError(
        `Can't compare type ${left.constructor.name}`,
        ctx
      );
    }
  }

  private compare_ee(
    left: Value,
    right: Value,
    ctx: ParserRuleContext
  ): BooleanValue {
    const op = '__eq';
    const metatableOperation =
      getMetatableOperation(left, op) || getMetatableOperation(right, op);

    if (left.constructor != right.constructor) {
      return BooleanValue.false();
    } else if (
      left instanceof NumberValue &&
      (left as NumberValue).number == (right as NumberValue).number
    ) {
      return BooleanValue.true();
    } else if (
      left instanceof StringValue &&
      (left as StringValue).string == (right as StringValue).string
    ) {
      return BooleanValue.true();
    } else if (
      left instanceof BooleanValue &&
      (left as BooleanValue).boolean == (right as BooleanValue).boolean
    ) {
      return BooleanValue.true();
    } else if (left instanceof NilValue && right instanceof NilValue) {
      return BooleanValue.true();
    } else if (left == right) {
      return BooleanValue.true();
    } else if (metatableOperation) {
      return BooleanValue.from(
        isTrue(
          this.exec_function(
            metatableOperation,
            new InternalListValue([left, right]),
            ctx
          )
        )
      );
    }
    return BooleanValue.false();
  }

  visitStat_table_construnctor = (
    ctx: Stat_table_construnctorContext
  ): Value => {
    this.consumeCredit(ctx);
    return ctx.tableconstructor().accept(this);
  };

  visitExp_unary = (ctx: Exp_unaryContext): Value => {
    this.consumeCredit(ctx);
    const exp = firstValue(ctx.exp().accept(this));
    if (ctx.MINUS()) {
      const metatableOperation = getMetatableOperation(exp, '__unm');

      if (exp instanceof NumberValue) {
        return new NumberValue(-1 * (exp as NumberValue).number);
      } else if (metatableOperation) {
        return this.exec_function(
          metatableOperation,
          new InternalListValue([exp, exp]),
          ctx
        );
      } else {
        throw new RuntimeError(
          `expecting number, but got ${exp.constructor.name}`,
          ctx
        );
      }
    } else if (ctx.NOT()) {
      return BooleanValue.from(!isTrue(exp));
    } else if (ctx.POUND()) {
      const metatableOperation = getMetatableOperation(exp, '__len');

      if (exp instanceof StringValue) {
        return NumberValue.from((exp as StringValue).string.length);
      } else if (metatableOperation) {
        return this.exec_function(
          metatableOperation,
          new InternalListValue([exp, exp]),
          ctx
        );
      } else if (exp instanceof TableValue) {
        return NumberValue.from((exp as TableValue).size());
      } else {
        throw new RuntimeError(
          `expecting string or table, but got ${exp.constructor.name}`,
          ctx
        );
      }
    } else if (ctx.SQUIG()) {
      const metatableOperation = getMetatableOperation(exp, '__bnot');

      if (exp instanceof NumberValue) {
        return NumberValue.from(~(exp as NumberValue).number);
      } else if (metatableOperation) {
        return this.exec_function(
          metatableOperation,
          new InternalListValue([exp, exp]),
          ctx
        );
      } else {
        throw new RuntimeError(
          `expecting number, but got ${exp.constructor.name}`,
          ctx
        );
      }
    }
    throw new NotYetImplemented('will never happen', ctx, 'N999');
  };

  visitExp_or = (ctx: Exp_orContext): Value => {
    this.consumeCredit(ctx);
    const left = firstValue(ctx.exp(0).accept(this));

    if (isTrue(left)) {
      return left;
    }

    const right = firstValue(ctx.exp(1).accept(this));
    return right;
  };

  visitExp_false = (ctx: Exp_falseContext): Value => {
    this.consumeCredit(ctx);
    return BooleanValue.false();
  };

  visitStat_prefix_exp = (ctx: Stat_prefix_expContext): Value => {
    this.consumeCredit(ctx);
    return ctx.prefixexp().accept(this);
  };

  visitExp_exponent = (ctx: Exp_exponentContext): Value => {
    this.consumeCredit(ctx);
    const left = firstValue(ctx.exp(0).accept(this));
    const right = firstValue(ctx.exp(1).accept(this));

    const op = '__pow';
    const metatableOperation =
      getMetatableOperation(left, op) || getMetatableOperation(right, op);

    if (metatableOperation) {
      return this.exec_function(
        metatableOperation,
        new InternalListValue([left, right]),
        ctx
      );
    }

    if (!(left instanceof NumberValue)) {
      throw new RuntimeError(
        `Expected NumberValue, but got ${left.constructor.name}`,
        ctx
      );
    }
    if (!(right instanceof NumberValue)) {
      throw new RuntimeError(
        `Expected NumberValue, but got ${right.constructor.name}`,
        ctx
      );
    }
    const l = (left as NumberValue).number;
    const r = (right as NumberValue).number;
    return new NumberValue(Math.pow(l, r));
  };

  visitExp_number = (ctx: Exp_numberContext): Value => {
    this.consumeCredit(ctx);
    return ctx.number_().accept(this);
  };

  visitExp_concat = (ctx: Exp_concatContext): Value => {
    this.consumeCredit(ctx);
    const left = firstValue(ctx.exp(0).accept(this));
    const right = firstValue(ctx.exp(1).accept(this));

    const op = '__concat';
    const metatableOperation =
      getMetatableOperation(left, op) || getMetatableOperation(right, op);

    if (metatableOperation) {
      return this.exec_function(
        metatableOperation,
        new InternalListValue([left, right]),
        ctx
      );
    }

    return StringValue.from(
      this.valueToString(left) + this.valueToString(right)
    );
  };

  private valueToString(value: Value): string {
    if (value instanceof NilValue) {
      return 'nil';
    } else if (value instanceof NumberValue) {
      return (value as NumberValue).number.toString();
    } else if (value instanceof StringValue) {
      return (value as StringValue).string;
    } else if (value instanceof BooleanValue) {
      return (value as BooleanValue).boolean.toString();
    } else if (value instanceof TableValue) {
      return 'table-support-tbd';
    } else if (value instanceof FunctionValue) {
      return (value as FunctionValue).asIdString();
    } else {
      return 'unkown_type';
    }
  }

  visitExp_vararg = (ctx: Exp_varargContext): Value => {
    this.consumeCredit(ctx);
    const varargs = this.currentScope.get(StringValue.from('...'));
    if (varargs instanceof NilValue) {
      return new InternalListValue([]);
    } else {
      const list: Value[] = [];
      for (let i = 1; i <= (varargs as TableValue).size(); i++) {
        list.push((varargs as TableValue).get(NumberValue.from(i)));
      }
      return new InternalListValue(list);
    }
  };

  visitExp_arithmetic_low = (ctx: Exp_arithmetic_lowContext): Value => {
    this.consumeCredit(ctx);
    const left = firstValue(ctx.exp(0).accept(this));
    const right = firstValue(ctx.exp(1).accept(this));

    const op = ctx.PLUS() ? '__add' : '__sub';
    const metatableOperation =
      getMetatableOperation(left, op) || getMetatableOperation(right, op);

    if (metatableOperation) {
      return this.exec_function(
        metatableOperation,
        new InternalListValue([left, right]),
        ctx
      );
    }

    if (!(left instanceof NumberValue)) {
      throw new RuntimeError(
        `Expected NumberValue, but got ${left.constructor.name}`,
        ctx
      );
    }
    if (!(right instanceof NumberValue)) {
      throw new RuntimeError(
        `Expected NumberValue, but got ${right.constructor.name}`,
        ctx
      );
    }
    if (ctx.PLUS()) {
      return new NumberValue(
        (left as NumberValue).number + (right as NumberValue).number
      );
    } else {
      return new NumberValue(
        (left as NumberValue).number - (right as NumberValue).number
      );
    }
  };

  visitExp_function_def = (ctx: Exp_function_defContext): Value => {
    this.consumeCredit(ctx);
    return ctx.functiondef().accept(this);
  };

  visitExp_nil = (ctx: Exp_nilContext): Value => {
    this.consumeCredit(ctx);
    return new NilValue();
  };

  visitVar_name = (ctx: Var_nameContext): Value => {
    const varName = ctx.NAME().getText();
    return new InternalVar(v => {
      this.currentScope.set(StringValue.from(varName), v);
    });
  };

  visitVar_exp = (ctx: Var_expContext): Value => {
    const top = ctx.prefixexp().accept(this);
    if (!(top instanceof TableValue)) {
      throw new RuntimeError(
        `Table expected, got ${top.constructor.name}`,
        ctx
      );
    }
    const key = ctx.NAME()
      ? StringValue.from(ctx.NAME().getText())
      : firstValue(ctx.exp().accept(this));
    return new InternalVar(v => {
      this.setTableValue(top as TableValue, key, v, ctx);
    });
  };

  private setTableValue(
    table: TableValue,
    key: Value,
    value: Value,
    ctx: ParserRuleContext
  ): void {
    const oldVal = table.get(key);
    if (!(oldVal instanceof NilValue)) {
      table.set(key, value);
      return;
    }

    const metamethodOrTable = getMetatableField(table, '__newindex');
    if (metamethodOrTable instanceof NilValue) {
      table.set(key, value);
      return;
    }

    if (
      metamethodOrTable instanceof FunctionValue ||
      metamethodOrTable instanceof ExtFunction
    ) {
      this.exec_function(
        metamethodOrTable,
        new InternalListValue([table, key, value]),
        ctx
      );
      return;
    }

    if (metamethodOrTable instanceof TableValue) {
      this.setTableValue(metamethodOrTable, key, value, ctx);
      return;
    }

    throw new RuntimeError(
      `__newindex must be a function or table, got ${metamethodOrTable.constructor.name}`,
      ctx
    );
  }

  visitPrefixexp_name = (ctx: Prefixexp_nameContext): Value => {
    this.consumeCredit(ctx);
    const topName = ctx.NAME_list()[0].getText();
    return this.walkExpAndName(
      this.currentScope.get(StringValue.from(topName)),
      ctx.exp_list(),
      ctx.NAME_list(),
      1,
      0,
      1,
      ctx
    );
  };

  visitPrefixexp_function_call = (
    ctx: Prefixexp_function_callContext
  ): Value => {
    this.consumeCredit(ctx);
    const value = this.walkExpAndName(
      ctx.functioncall().accept(this),
      ctx.exp_list(),
      ctx.NAME_list(),
      1,
      0,
      0,
      ctx
    );
    return value;
  };

  visitPrefixexp_exp = (ctx: Prefixexp_expContext): Value => {
    this.consumeCredit(ctx);
    const f = ctx.exp(0).accept(this);
    return this.walkExpAndName(
      f,
      ctx.exp_list(),
      ctx.NAME_list(),
      3,
      1,
      0,
      ctx
    );
  };

  private exec_lua_function(f: FunctionValue, args: InternalListValue): Value {
    const list_params = (f as FunctionValue).params() as InternalListValue;
    const hasVarargs =
      list_params.size() > 0 &&
      (list_params.get(list_params.size()) as StringValue).string === '...';
    const list_args = flattenList(args);
    return this.scoped(() => {
      let i = 1;
      for (; i <= list_params.size() - (hasVarargs ? 1 : 0); i++) {
        this.currentScope.setLocal(
          list_params.get(i),
          list_args.getValueOrNil(i)
        );
      }
      if (hasVarargs) {
        const table = new TableValue();
        let index = 1;
        for (; i <= list_args.size(); i++) {
          table.set(NumberValue.from(index), list_args.getValueOrNil(i));
          index++;
        }
        this.currentScope.setLocal(StringValue.from('...'), table);
      }
      const result = ReturnStmt.executeReturnable(() => {
        return (f as FunctionValue).body().accept(this);
      });
      return result;
    });
  }

  private exec_ext_function(
    f: ExtFunction,
    args: InternalListValue,
    ctx: ParserRuleContext
  ): Value {
    const list_args = flattenList(args);
    return f.run(list_args, ctx, this);
  }

  exec_function(
    f: FunctionValue | ExtFunction,
    args: InternalListValue,
    ctx: ParserRuleContext
  ): Value {
    return f instanceof FunctionValue
      ? this.exec_lua_function(f as FunctionValue, args)
      : this.exec_ext_function(f as ExtFunction, args, ctx);
  }

  exec_setmetatable(list_args: InternalListValue, ctx: Fcall_nameContext) {
    const table = list_args.get(1);
    const metatable = list_args.get(2);

    if (!(table instanceof TableValue)) {
      // throw new RuntimeError(`Cannot execute setmetatable on non-table value ${table}`, ctx)
      return new NilValue();
    }

    if (
      !(metatable instanceof TableValue) &&
      !(metatable instanceof NilValue)
    ) {
      throw new RuntimeError(
        `Cannot execute setmetatable on non-table metatable ${metatable}`,
        ctx
      );
    }

    table.setMetatable(metatable);
    return metatable;
  }

  exec_getmetatable(list_args: InternalListValue) {
    const table = list_args.get(1);

    return table.getMetatable();
  }

  private callValue(
    value: Value,
    args: InternalListValue,
    ctx: ParserRuleContext
  ): Value {
    if (value instanceof ExtFunction) {
      return this.exec_ext_function(value as ExtFunction, args, ctx);
    } else if (value instanceof FunctionValue) {
      return this.exec_lua_function(value as FunctionValue, args);
    }

    const metamethod = getMetatableField(value, '__call');
    if (!(metamethod instanceof NilValue)) {
      const callArgs = args.asList();
      callArgs.unshift(value);
      return this.callValue(metamethod, new InternalListValue(callArgs), ctx);
    }

    throw new RuntimeError(
      `Can't execute non-function: ${value.constructor.name}`,
      ctx
    );
  }

  visitFcall_name = (ctx: Fcall_nameContext): Value => {
    this.consumeCredit(ctx);
    const fname = ctx.NAME(0).getText();
    const value = this.walkExpAndName(
      this.currentScope.get(StringValue.from(fname)),
      ctx.exp_list(),
      ctx.NAME_list(),
      1,
      0,
      1,
      ctx
    );
    const list_args = ctx.args().accept(this) as InternalListValue;
    if (fname === 'setmetatable') {
      return this.exec_setmetatable(list_args, ctx);
    }
    if (fname === 'getmetatable') {
      return this.exec_getmetatable(list_args);
    }
    return this.callValue(value, list_args, ctx);
  };

  private walkExpAndName(
    value: Value,
    exps: ExpContext[],
    names: TerminalNode[],
    startChildIndex: number,
    expIndex: number,
    nameIndex: number,
    ctx: ParserRuleContext
  ): Value {
    let i = startChildIndex;
    while (
      i < ctx.getChildCount() &&
      (expIndex < exps.length || nameIndex < names.length)
    ) {
      value = firstValue(value);
      if (!(value instanceof TableValue)) {
        throw new RuntimeError(
          `got ${value.constructor.name} instead of table`,
          ctx
        );
      }
      const child = ctx.getChild(i);
      const childText = child.getText();
      let key: Value;
      if (childText === '.') {
        key = StringValue.from(names[nameIndex].getText());
        nameIndex++;
        i += 2;
      } else if (childText === '[') {
        key = exps[expIndex].accept(this);
        expIndex++;
        i += 3;
      } else {
        break;
      }

      value = this.getTableValue(value as TableValue, key, ctx);
    }
    return value;
  }

  private getTableValue(
    table: TableValue,
    key: Value,
    ctx: ParserRuleContext
  ): Value {
    const res = table.get(key);
    if (!(res instanceof NilValue)) {
      return res;
    }

    const metamethodOrTable = getMetatableField(table, '__index');
    if (metamethodOrTable instanceof NilValue) {
      return res;
    }

    if (
      metamethodOrTable instanceof FunctionValue ||
      metamethodOrTable instanceof ExtFunction
    ) {
      return this.exec_function(
        metamethodOrTable,
        new InternalListValue([table, key]),
        ctx
      );
    }

    if (metamethodOrTable instanceof TableValue) {
      return this.getTableValue(metamethodOrTable, key, ctx);
    }

    throw new RuntimeError(
      `__index must be a function or table, got ${metamethodOrTable.constructor.name}`,
      ctx
    );
  }

  visitFcall_name_ext = (ctx: Fcall_name_extContext): Value => {
    this.consumeCredit(ctx);
    const table = firstValue(
      this.walkExpAndName(
        this.currentScope.get(StringValue.from(ctx.NAME(0).getText())),
        ctx.exp_list(),
        ctx.NAME_list(),
        1,
        0,
        1,
        ctx
      )
    );
    if (!(table instanceof TableValue)) {
      throw new RuntimeError(
        `expect table for ":", got ${table.constructor.name}`,
        ctx
      );
    }
    const fName = ctx.NAME_list()[ctx.NAME_list().length - 1].getText();
    const fun = (table as TableValue).get(StringValue.from(fName));
    const list_args = (ctx.args().accept(this) as InternalListValue).asList();
    list_args.unshift(table);
    return this.callValue(fun, new InternalListValue(list_args), ctx);
  };

  visitFcall_function_call = (ctx: Fcall_function_callContext): Value => {
    this.consumeCredit(ctx);
    const fun = firstValue(
      this.walkExpAndName(
        ctx.functioncall().accept(this),
        ctx.exp_list(),
        ctx.NAME_list(),
        1,
        0,
        0,
        ctx
      )
    );
    const list_args = ctx.args().accept(this) as InternalListValue;
    return this.callValue(fun, list_args, ctx);
  };

  visitFcall_exp = (ctx: Fcall_expContext): Value => {
    this.consumeCredit(ctx);
    const fun = firstValue(
      this.walkExpAndName(
        ctx.exp(0).accept(this),
        ctx.exp_list(),
        ctx.NAME_list(),
        3,
        1,
        0,
        ctx
      )
    );
    const list_args = ctx.args().accept(this) as InternalListValue;
    return this.callValue(fun, list_args, ctx);
  };

  visitFcall_exp_ext = (ctx: Fcall_exp_extContext): Value => {
    this.consumeCredit(ctx);
    const table = firstValue(
      this.walkExpAndName(
        firstValue(ctx.exp(0).accept(this)),
        ctx.exp_list(),
        ctx.NAME_list(),
        3,
        1,
        0,
        ctx
      )
    );
    if (!(table instanceof TableValue)) {
      throw new RuntimeError(
        `expect table for ":", got ${table.constructor.name}`,
        ctx
      );
    }
    const fName = ctx.NAME_list()[ctx.NAME_list().length - 1].getText();
    const fun = (table as TableValue).get(StringValue.from(fName));
    const list_args = (ctx.args().accept(this) as InternalListValue).asList();
    list_args.unshift(table);
    return this.callValue(fun, new InternalListValue(list_args), ctx);
  };

  visitFcall_function_call_ext = (
    ctx: Fcall_function_call_extContext
  ): Value => {
    this.consumeCredit(ctx);
    const table = firstValue(
      this.walkExpAndName(
        firstValue(ctx.functioncall().accept(this)),
        ctx.exp_list(),
        ctx.NAME_list(),
        1,
        0,
        0,
        ctx
      )
    );
    if (!(table instanceof TableValue)) {
      throw new RuntimeError(
        `expect table for ":", got ${table.constructor.name}`,
        ctx
      );
    }
    const fName = ctx.NAME_list()[ctx.NAME_list().length - 1].getText();
    const fun = (table as TableValue).get(StringValue.from(fName));
    const list_args = (ctx.args().accept(this) as InternalListValue).asList();
    list_args.unshift(table);
    return this.callValue(fun, new InternalListValue(list_args), ctx);
  };

  visitArgs_exp_list = (ctx: Args_exp_listContext): Value => {
    if (ctx.explist()) {
      return flattenList(ctx.explist().accept(this));
    } else {
      return new InternalListValue([]);
    }
  };

  visitArgs_table_constructor = (ctx: Args_table_constructorContext): Value => {
    return ctx.tableconstructor().accept(this);
  };

  visitArgs_string = (ctx: Args_stringContext): Value => {
    return new InternalListValue([ctx.string_().accept(this)]);
  };

  visitFunctiondef = (ctx: FunctiondefContext): Value => {
    return ctx.funcbody().accept(this);
  };

  visitFuncbody = (ctx: FuncbodyContext): Value => {
    const parameters = ctx.parlist().accept(this);
    const block = ctx.block();
    return new FunctionValue(parameters as InternalListValue, block);
  };

  visitParlist_namellist = (ctx: Parlist_namellistContext): Value => {
    const names = (ctx.namelist().accept(this) as InternalListValue).asList();
    if (ctx.COMMA()) {
      names.push(StringValue.from('...'));
    }
    return new InternalListValue(names);
  };

  visitParlist_vararg = (_ctx: Parlist_varargContext): Value => {
    return new InternalListValue([StringValue.from('...')]);
  };

  visitParlist_none = (_ctx: Parlist_noneContext): Value => {
    return new InternalListValue([]);
  };

  visitTableconstructor = (ctx: TableconstructorContext): Value => {
    if (ctx.fieldlist()) {
      return ctx.fieldlist().accept(this);
    } else {
      return new TableValue();
    }
  };

  visitFieldlist = (ctx: FieldlistContext): Value => {
    const result = new TableValue();
    let index = 1;
    for (let i = 0; i < ctx.field_list().length; i++) {
      const f = ctx.field_list()[i];
      const field = f.accept(this) as InternalPairValue;
      if (field.isLeftNil) {
        if (i == ctx.field_list().length - 1) {
          if (field.right instanceof InternalListValue) {
            const list = flattenList(field.right).asList();
            list.forEach(v => {
              result.set(NumberValue.from(index), firstValue(v));
              index++;
            });
          } else {
            result.set(NumberValue.from(index), firstValue(field.right));
            index++;
          }
        } else {
          result.set(NumberValue.from(index), firstValue(field.right));
          index++;
        }
      } else {
        result.set(firstValue(field.left), firstValue(field.right));
      }
    }
    return result;
  };

  visitField_exp_exp = (ctx: Field_exp_expContext): Value => {
    return InternalPairValue.from(
      firstValue(ctx.exp(0).accept(this)),
      firstValue(ctx.exp(1).accept(this))
    );
  };

  visitField_name_exp = (ctx: Field_name_expContext): Value => {
    return InternalPairValue.from(
      StringValue.from(ctx.NAME().getText()),
      firstValue(ctx.exp().accept(this))
    );
  };

  visitField_exp = (ctx: Field_expContext): Value => {
    return InternalPairValue.fromRight(ctx.exp().accept(this));
  };

  visitFieldsep = (ctx: FieldsepContext): Value => {
    throw new NotYetImplemented('field sep', ctx, 'N999');
  };

  visitNumber_int = (ctx: Number_intContext): Value => {
    return new NumberValue(parseInt(ctx.getText()));
  };

  visitNumber_hex = (ctx: Number_hexContext): Value => {
    const hex = ctx.HEX().getText();
    const number = parseInt(hex.substring(2), 16);
    return NumberValue.from(number);
  };

  visitNumber_float = (ctx: Number_floatContext): Value => {
    const floatAsString = ctx.FLOAT().getText();
    const number = parseFloat(floatAsString);
    return NumberValue.from(number);
  };

  visitNumber_hex_float = (ctx: Number_hex_floatContext): Value => {
    const str = ctx.HEX_FLOAT().getText();
    const match = str.match(
      /^0x([0-9a-fA-F]+)?(?:\.([0-9a-fA-F]*))?p([+-]?\d+)$/
    );
    if (!match) {
      throw new RuntimeError(`Invalid Lua hex float: ${str}`, ctx);
    }
    const [_, intPart = '0', fracPart = '', exponentStr] = match;
    const exponent = parseInt(exponentStr, 10);
    const intValue = parseInt(intPart, 16);
    let fracValue = 0;
    for (let i = 0; i < fracPart.length; i++) {
      const digit = parseInt(fracPart[i], 16);
      fracValue += digit / Math.pow(16, i + 1);
    }
    const total = (intValue + fracValue) * Math.pow(2, exponent);
    return NumberValue.from(total);
  };

  visitString_string = (ctx: String_stringContext): Value => {
    const text = ctx.getText();
    return StringValue.from(text.substring(1, text.length - 1));
  };

  visitString_charstring = (ctx: String_charstringContext): Value => {
    const text = ctx.CHARSTRING().getText();
    return StringValue.from(text.substring(1, text.length - 1));
  };

  visitString_longstring = (ctx: String_longstringContext): Value => {
    const text = ctx.LONGSTRING().getText();
    let i = 0;
    let j = text.length - 1;
    while (
      i < j &&
      (text[i] === '[' || text[i] === '=') &&
      ((text[i] == '[' && text[j] == ']') || text[i] == text[j])
    ) {
      i++;
      j--;
    }
    return StringValue.from(text.substring(i, j + 1));
  };
}

function getMetatableOperation(
  table: Value,
  op: string
): FunctionValue | ExtFunction | undefined {
  const method = getMetatableField(table, op);
  if (!(method instanceof FunctionValue) && !(method instanceof ExtFunction)) {
    return;
  }
  return method;
}

function getMetatableField(table: Value, op: string): Value {
  const metatable = table.getMetatable();
  if (!(metatable instanceof TableValue)) {
    return new NilValue();
  }
  return metatable.get(StringValue.from(op));
}
