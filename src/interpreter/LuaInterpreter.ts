import LuaParserVisitor from "../parser/LuaParserVisitor";
import {
    Start_Context,
    ChunkContext,
    BlockContext,
    Stat_no_opContext,
    Stat_assing_varsContext,
    Stat_function_callContext,
    Stat_labelContext,
    Stat_breakContext,
    Stat_gotoContext,
    Stat_doContext,
    Stat_whileContext,
    Stat_repeatContext,
    Stat_ifContext,
    Stat_for_varContext,
    Stat_for_listContext,
    Stat_functionContext,
    Stat_local_functionContext,
    Stat_local_attnamelistContext,
    AttnamelistContext,
    AttribContext,
    RetstatContext,
    LabelContext,
    FuncnameContext,
    VarlistContext,
    NamelistContext,
    ExplistContext,
    Exp_trueContext,
    Exp_bitsContext,
    Exp_andContext,
    Exp_stringContext,
    Exp_arithmetic_highContext,
    Exp_relContext,
    Stat_table_construnctorContext,
    Exp_unaryContext,
    Exp_orContext,
    Exp_falseContext,
    Stat_prefix_expContext,
    Exp_exponentContext,
    Exp_numberContext,
    Exp_concatContext,
    Exp_varargContext,
    Exp_arithmetic_lowContext,
    Exp_function_defContext,
    Exp_nilContext,
    Var_nameContext,
    Var_expContext,
    Prefixexp_nameContext,
    Prefixexp_function_callContext,
    Prefixexp_expContext,
    Fcall_nameContext,
    Fcall_name_extContext,
    Fcall_function_callContext,
    Fcall_expContext,
    Fcall_exp_extContext,
    Fcall_function_call_extContext,
    Args_exp_listContext,
    Args_table_constructorContext,
    Args_stringContext,
    FunctiondefContext,
    FuncbodyContext,
    Parlist_namellistContext,
    Parlist_varargContext,
    Parlist_noneContext,
    TableconstructorContext,
    FieldlistContext,
    Field_exp_expContext,
    Field_name_expContext,
    Field_expContext,
    FieldsepContext,
    Number_intContext,
    Number_hexContext,
    Number_floatContext,
    Number_hex_floatContext,
    String_stringContext,
    String_charstringContext,
    String_longstringContext
} from "../parser/LuaParser";
import { BooleanValue, FunctionValue, InternalListValue, NilValue, NumberValue, StringValue, TableValue, Value } from "./types";
import ReturnStmt from "./ReturnStmt";
import VisibilityScope from "./VisibilityScope";
import { NotYetImplemented, RuntimeError } from "./errors";
import BreakStmt from "./BreakStmt";
import { firstValue, flattenList, isFalse, isTrue } from "./utils";
import ExtFunction from "./ExtFunction";

export default class LuaInterpreter extends LuaParserVisitor<Value> {

    private currentScope: VisibilityScope;

    constructor() {
        super();
        this.currentScope = VisibilityScope.root();
    }

    getAllGlobalVars(): TableValue {
        return this.currentScope.globalVars();
    }

    getGlobalVar(key: Value): Value {
        // this function is called after interpreter is done
        // as a result, current scope is the global scope
        return this.currentScope.get(key);
    }

    setVar(name: StringValue, value: Value): void {
        this.currentScope.set(name, value);
    }

    scoped(f:() => Value): Value {
        this.currentScope = VisibilityScope.childOf(this.currentScope);
        try {
            return f();
        } finally {
            this.currentScope = this.currentScope.parent();
        }
    }

    visitStart_ = (ctx: Start_Context): Value => {
        return ctx.chunk().accept(this);
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
            return new NilValue;
        });
    };

    visitStat_no_op = (ctx: Stat_no_opContext): Value => {
        return new NilValue();
    };

    visitStat_assing_vars = (ctx: Stat_assing_varsContext): Value => {
        const names = flattenList(ctx.varlist().accept(this));
        const values = flattenList(ctx.explist().accept(this));
        for (let i = 1; i <= names.size(); i++) {
            const name = names.get(i);
            const value = values.getValueOrNil(i);
            this.currentScope.set(name , value);
        }
        return new NilValue();
    };

    visitStat_function_call = (ctx: Stat_function_callContext): Value => {
        return ctx.functioncall().accept(this);
    };

    visitStat_label = (ctx: Stat_labelContext): Value => {
        throw new NotYetImplemented("label", ctx);
    };

    visitStat_break = (ctx: Stat_breakContext): Value => {
        throw new BreakStmt();
    };

    visitStat_goto = (ctx: Stat_gotoContext): Value => {
        throw new NotYetImplemented("goto", ctx);
    };

    visitStat_do = (ctx: Stat_doContext): Value => {
        return ctx.block().accept(this);
    };

    visitStat_while = (ctx: Stat_whileContext): Value => {
        let exp = firstValue(ctx.exp().accept(this));
        while (isTrue(exp)) {
            if (BreakStmt.breakCalled(()=>{
                    ctx.block().accept(this);
                })) {
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
                    ctx.block().stat_list().forEach(stmt => stmt.accept(this));
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
            let expValue = firstValue(ctx.exp_list()[i].accept(this));
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
        const initValue = firstValue(ctx.exp(0).accept(this))
        const limit = firstValue(ctx.exp(1).accept(this))
        const step = ctx.exp_list().length == 3 ? firstValue(ctx.exp(2).accept(this)) : NumberValue.from(1)
        if (!(initValue instanceof NumberValue)) {
            throw new RuntimeError("init value is not a number", ctx);
        }
        if (!(limit instanceof NumberValue)) {
            throw new RuntimeError("limit value is not a number", ctx);
        }
        if (!(step instanceof NumberValue)) {
            throw new RuntimeError("step is not a number", ctx);
        }
        if (step.number == 0) {
            throw new RuntimeError("step is Zero", ctx);
        }
        let n = limit.number;
        const s = step.number;
        const block = ctx.block();
        return this.scoped(() => {
            let i = initValue.number;
            while ((s > 0)? i <= n: i >= n) {
                this.currentScope.setLocal(varName, NumberValue.from(i));
                if (BreakStmt.breakCalled(() => {
                    block.accept(this);
                })) {
                    break;
                }
                const afterBodyI = this.currentScope.get(varName);
                if (!(afterBodyI instanceof NumberValue)) {
                    throw new RuntimeError("FOR loop variable is not a number any more (changed in loop body)", ctx);
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
        if (!(iteratorFunction instanceof FunctionValue) && !(iteratorFunction instanceof ExtFunction)) {
            throw new RuntimeError("Iterator is not a function", ctx);
        }
        do {
            const iterationResult = flattenList(this.exec_function(
                iteratorFunction, new InternalListValue([state, controlVariable])));
            controlVariable = iterationResult.getValueOrNil(1);
            if (controlVariable instanceof NilValue) return new NilValue();
            this.scoped(() => {
                for (let i = 1; i <= names.size(); i++) {
                    this.currentScope.setLocal(names.getValueOrNil(i), iterationResult.getValueOrNil(i));
                }
                if (BreakStmt.breakCalled(() => {block.accept(this);})) {
                    return new NilValue();
                }
                return new NilValue();
            });
        } while(true);
    };

    visitStat_function = (ctx: Stat_functionContext): Value => {
        if (ctx.funcname().NAME_list().length != 1) {
            throw new Error("Only simple function names are supported");
        }
        const name = StringValue.from(ctx.funcname().NAME(0).getText());
        const parameters = ctx.funcbody().parlist().accept(this);
        const block = ctx.funcbody().block();
        const f = new FunctionValue(parameters as InternalListValue, block);
        this.currentScope.set(name, f);
        return new NilValue();
    };

    visitStat_local_function = (ctx: Stat_local_functionContext): Value => {
        throw new NotYetImplemented("local function", ctx);
    };

    visitStat_local_attnamelist = (ctx: Stat_local_attnamelistContext): Value => {
        const names = flattenList(ctx.attnamelist().accept(this));
        const exps = ctx.explist() ?
            flattenList(ctx.explist().accept(this)) : new InternalListValue([]);
        for (let i = 1; i <= names.size(); i++) {
            this.currentScope.setLocal(
                names.get(i),
                exps.getValueOrNil(i)
            );
        }
        return new NilValue();
    };

    visitAttnamelist = (ctx: AttnamelistContext): Value => {
        const result: Value[] = [];
        ctx.NAME_list().forEach((name) => {
            result.push(StringValue.from(name.getText()));
        });
        return new InternalListValue(result);
    };

    visitAttrib = (ctx: AttribContext): Value => {
        throw new NotYetImplemented("attribute", ctx);
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
            throw  ReturnStmt.withList(resultList);
        } else if (ctx.CONTINUE()) {
            throw new NotYetImplemented("continue is not supported in Lua",ctx)
        } else {
            throw new RuntimeError("This 'break' should not happen; open an issue on GitHub", ctx);
        }
    };

    visitLabel = (ctx: LabelContext): Value => {
        throw new NotYetImplemented("label", ctx);
    };

    visitFuncname = (ctx: FuncnameContext): Value => {
        throw new NotYetImplemented("function name", ctx);
    };

    visitVarlist = (ctx: VarlistContext): Value => {
        const result: Value[] = []
        ctx.var__list().forEach(v => result.push(v.accept(this)));
        return new InternalListValue(result);
    };

    visitNamelist = (ctx: NamelistContext): Value => {
        const result: Value[] = []
        ctx.NAME_list().forEach(name => result.push(StringValue.from(name.getText())));
        return new InternalListValue(result);
    };

    visitExplist = (ctx: ExplistContext): Value => {
        const values = ctx.exp_list().map(exp => exp.accept(this));
        return new InternalListValue(values);
    };

    visitExp_true = (ctx: Exp_trueContext): Value => {
        return BooleanValue.true();
    };

    visitExp_bits = (ctx: Exp_bitsContext): Value => {
        throw new NotYetImplemented("bits", ctx);
    };

    visitExp_and = (ctx: Exp_andContext): Value => {
        const left = firstValue(ctx.exp(0).accept(this));
        const right = firstValue(ctx.exp(1).accept(this));
        return BooleanValue.from(isTrue(left) && isTrue(right));
    };

    visitExp_string = (ctx: Exp_stringContext): Value => {
        return ctx.string_().accept(this);
    };

    visitExp_arithmetic_high = (ctx: Exp_arithmetic_highContext): Value => {
        const left = firstValue(ctx.exp(0).accept(this));
        const right = firstValue(ctx.exp(1).accept(this));

        if (!(left instanceof NumberValue)) {
            throw new Error(`Expected NumberValue, but got ${left.constructor.name}`);
        }
        if (!(right instanceof NumberValue)) {
            throw new Error(`Expected NumberValue, but got ${right.constructor.name}`);
        }
        const l = (left as NumberValue).number;
        const r = (right as NumberValue).number;
        if (ctx.STAR()) {
            return new NumberValue(l*r);
        } else if (ctx.SLASH()) {
            return new NumberValue(l/r);
        } else if (ctx.SLASH()) {
            return new NumberValue(l/r);
        } else if (ctx.PER()) {
            return new NumberValue(l%r);
        } else if (ctx.SS()) {
            return new NumberValue(Math.floor(l/r));
        }
        throw new NotYetImplemented("will never happen", ctx);
    };

    visitExp_rel = (ctx: Exp_relContext): Value => {
        const left = firstValue(ctx.exp(0).accept(this));
        const right = firstValue(ctx.exp(1).accept(this));
        if (ctx.EE()) {
            return this.compare_ee(left, right);
        }
        if (ctx.SQEQ()) {
            return BooleanValue.from(!this.compare_ee(left, right).boolean);
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
        throw new NotYetImplemented("compare for non numbers", ctx);
    };

    private compare_lt(left: Value, right: Value, ctx: Exp_relContext, le: boolean): BooleanValue {
        if (left instanceof NumberValue) {
            if (!(right instanceof NumberValue)) {
                throw new RuntimeError(`Right expression not a Number - ${right.constructor.name}`, ctx);
            }
            const less = (left as NumberValue).number < (right as NumberValue).number;
            const eq = (left as NumberValue).number == (right as NumberValue).number;
            return BooleanValue.from(less || (le && eq));
        } else if (left instanceof StringValue) {
            if (!(right instanceof StringValue)) {
                throw new RuntimeError(`Right expression not a String - ${right.constructor.name}`, ctx);
            }
            const less = (left as StringValue).string < (right as StringValue).string;
            const eq = (left as StringValue).string == (right as StringValue).string;
            return BooleanValue.from(less || (le && eq));
        } else {
            throw new RuntimeError(`Can't compare type ${left.constructor.name}`, ctx);
        }
    }

    private compare_ee(left: Value, right: Value): BooleanValue {
        if (left.constructor != right.constructor) {
            return BooleanValue.false();
        } else if ((left instanceof NumberValue)
                    && ((left as NumberValue).number == (right as NumberValue).number)) {
                        return BooleanValue.true();
        } else if ((left instanceof StringValue)
            && ((left as StringValue).string == (right as StringValue).string)) {
                return BooleanValue.true();
        } else if ((left instanceof BooleanValue)
            && ((left as BooleanValue).boolean == (right as BooleanValue).boolean)) {
                return BooleanValue.true();
        } else if ((left instanceof NilValue) && (right instanceof NilValue)) {
                return BooleanValue.true();
        } else {
            return BooleanValue.from(left == right);
        }
    }

    visitStat_table_construnctor = (ctx: Stat_table_construnctorContext): Value => {
        throw new NotYetImplemented("table constructor", ctx);
    };

    visitExp_unary = (ctx: Exp_unaryContext): Value => {
        if (ctx.MINUS()) {
            const exp = firstValue(ctx.exp().accept(this));
            if (exp instanceof NumberValue) {
                return new NumberValue(-1*(exp as NumberValue).number);
            } else {
                new NotYetImplemented(`minus unary only supported for number, got ${exp.constructor.name}`, ctx);
            }
        }
        throw new NotYetImplemented("this unary", ctx);
    };

    visitExp_or = (ctx: Exp_orContext): Value => {
        const left = firstValue(ctx.exp(0).accept(this));
        const right = firstValue(ctx.exp(1).accept(this));
        return BooleanValue.from(isTrue(left) || isTrue(right));
    };

    visitExp_false = (ctx: Exp_falseContext): Value => {
        return BooleanValue.false();
    };

    visitStat_prefix_exp = (ctx: Stat_prefix_expContext): Value => {
        return ctx.prefixexp().accept(this);
    };

    visitExp_exponent = (ctx: Exp_exponentContext): Value => {
        const left = firstValue(ctx.exp(0).accept(this));
        const right = firstValue(ctx.exp(1).accept(this));

        if (!(left instanceof NumberValue)) {
            throw new Error(`Expected NumberValue, but got ${left.constructor.name}`);
        }
        if (!(right instanceof NumberValue)) {
            throw new Error(`Expected NumberValue, but got ${right.constructor.name}`);
        }
        const l = (left as NumberValue).number;
        const r = (right as NumberValue).number;
        return new NumberValue(Math.pow(l, r));
    };

    visitExp_number = (ctx: Exp_numberContext): Value => {
        return ctx.number_().accept(this);
    };

    visitExp_concat = (ctx: Exp_concatContext): Value => {
        const left = firstValue(ctx.exp(0).accept(this));
        const right = firstValue(ctx.exp(1).accept(this));
        return StringValue.from(
            this.valueToString(left)
             + this.valueToString(right));
    };

    private valueToString(value: Value):string {
        if (value instanceof NilValue) {
            return "nil";
        } else if (value instanceof NumberValue) {
            return (value as NumberValue).number.toString();
        } else if (value instanceof StringValue) {
            return (value as StringValue).string;
        } else if (value instanceof BooleanValue){
            return (value as BooleanValue).boolean.toString();
        } else if (value instanceof TableValue){
            return "table-support-tbd";
        } else if (value instanceof FunctionValue){
            return (value as FunctionValue).asIdString();
        } else {
            return "unkown_type";
        }
    }

    visitExp_vararg = (ctx: Exp_varargContext): Value => {
        throw new NotYetImplemented("vararg", ctx);
    };

    visitExp_arithmetic_low = (ctx: Exp_arithmetic_lowContext): Value => {
        const left = firstValue(ctx.exp(0).accept(this));
        const right = firstValue(ctx.exp(1).accept(this));
        if (!(left instanceof NumberValue)) {
            throw new Error(`Expected NumberValue, but got ${left.constructor.name}`);
        }
        if (!(right instanceof NumberValue)) {
            throw new Error(`Expected NumberValue, but got ${right.constructor.name}`);
        }
        if (ctx.PLUS()) {
            return new NumberValue((left as NumberValue).number + (right as NumberValue).number)
        } else {
            return new NumberValue((left as NumberValue).number - (right as NumberValue).number)
        }
    };

    visitExp_function_def = (ctx: Exp_function_defContext): Value => {
        throw new NotYetImplemented("funct def", ctx);
    };

    visitExp_nil = (ctx: Exp_nilContext): Value => {
        return new NilValue();
    };

    visitVar_name = (ctx: Var_nameContext): Value => {
        return StringValue.from(ctx.NAME().getText());
    };

    visitVar_exp = (ctx: Var_expContext): Value => {
        throw new NotYetImplemented("var exp", ctx);
    };

    visitPrefixexp_name = (ctx: Prefixexp_nameContext): Value => {
        if (ctx.NAME_list().length == 1) {
            const name = StringValue.from(ctx.NAME(0).getText());
            return this.currentScope.get(name);
        }
        throw new NotYetImplemented("prefix", ctx);
    };

    visitPrefixexp_function_call = (ctx: Prefixexp_function_callContext): Value => {
        if (ctx.NAME_list().length > 0) {
            throw new NotYetImplemented("prefix function", ctx);
        }
        return ctx.functioncall().accept(this);
    };

    visitPrefixexp_exp = (ctx: Prefixexp_expContext): Value => {
        if (ctx.exp_list.length > 1) {
            throw new NotYetImplemented("this operation", ctx);
        }
        return ctx.exp(0).accept(this);
    };

    private exec_lua_function(f: FunctionValue, args: InternalListValue): Value {
        const list_params = (f as FunctionValue).params() as InternalListValue;
        const list_args = flattenList(args);
        return this.scoped(() => {
            for (let i = 1; i <= list_params.size(); i++) {
                this.currentScope.setLocal(list_params.get(i), list_args.getValueOrNil(i));
            }
            const result = ReturnStmt.executeReturnable(() => {
                return (f as FunctionValue).body().accept(this);
            });
            return result;
        });
    }

    private exec_ext_function(f: ExtFunction, args: InternalListValue): Value {
        const list_args = flattenList(args);
        return f.run(list_args);
    }

    private exec_function(f:FunctionValue|ExtFunction, args: InternalListValue): Value {
        return f instanceof FunctionValue ?
            this.exec_lua_function(f as FunctionValue, args) :
            this.exec_ext_function(f as ExtFunction, args);
    }

    visitFcall_name = (ctx: Fcall_nameContext): Value => {
        if (ctx.exp_list().length > 0) {
            throw new NotYetImplemented("invocation", ctx);
        }
        const fname = ctx.NAME(0).getText();
        const fun = this.currentScope.get(StringValue.from(fname));
        const list_args = ctx.args().accept(this) as InternalListValue;
        if (fun instanceof ExtFunction) {
            return this.exec_ext_function(fun as ExtFunction, list_args);
        } else if (fun instanceof FunctionValue) {
            return this.exec_lua_function(fun as FunctionValue, list_args);
        } else {
            throw new RuntimeError(`Can't execute non-function: ${fun.constructor.name}`, ctx);
        }
    };

    visitFcall_name_ext = (ctx: Fcall_name_extContext): Value => {
        throw new NotYetImplemented("fcall", ctx);
    };

    visitFcall_function_call = (ctx: Fcall_function_callContext): Value => {
        throw new NotYetImplemented("fcall", ctx);
    };

    visitFcall_exp = (ctx: Fcall_expContext): Value => {
        throw new NotYetImplemented("fcall", ctx);
    };

    visitFcall_exp_ext = (ctx: Fcall_exp_extContext): Value => {
        throw new NotYetImplemented("fcall", ctx);
    };

    visitFcall_function_call_ext = (ctx: Fcall_function_call_extContext): Value => {
        throw new NotYetImplemented("fcall", ctx);
    };

    visitArgs_exp_list = (ctx: Args_exp_listContext): Value => {
        if (ctx.explist()) {
            return flattenList(ctx.explist().accept(this));
        } else {
            return new InternalListValue([]);
        }
    };

    visitArgs_table_constructor = (ctx: Args_table_constructorContext): Value => {
        throw new NotYetImplemented("table constructor", ctx);
    };

    visitArgs_string = (ctx: Args_stringContext): Value => {
        throw new NotYetImplemented("string", ctx);
    };

    visitFunctiondef = (ctx: FunctiondefContext): Value => {
        throw new NotYetImplemented("fdef", ctx);
    };

    visitFuncbody = (ctx: FuncbodyContext): Value => {
        throw new NotYetImplemented("fbody", ctx);
    };

    visitParlist_namellist = (ctx: Parlist_namellistContext): Value => {
        if (ctx.DDD()) {
            throw new NotYetImplemented("...", ctx);
        }
        return ctx.namelist().accept(this);
    };

    visitParlist_vararg = (ctx: Parlist_varargContext): Value => {
        throw new NotYetImplemented("varargs", ctx);
    };

    visitParlist_none = (ctx: Parlist_noneContext): Value => {
        return new InternalListValue([]);
    };

    visitTableconstructor = (ctx: TableconstructorContext): Value => {
        throw new NotYetImplemented("table constructor", ctx);
    };

    visitFieldlist = (ctx: FieldlistContext): Value => {
        throw new NotYetImplemented("filed list", ctx);
    };

    visitField_exp_exp = (ctx: Field_exp_expContext): Value => {
        throw new NotYetImplemented("field exp", ctx);
    };

    visitField_name_exp = (ctx: Field_name_expContext): Value => {
        throw new NotYetImplemented("field name", ctx);
    };

    visitField_exp = (ctx: Field_expContext): Value => {
        throw new NotYetImplemented("field exp", ctx);
    };

    visitFieldsep = (ctx: FieldsepContext): Value => {
        throw new NotYetImplemented("field sep", ctx);
    };

    visitNumber_int = (ctx: Number_intContext): Value => {
        return new NumberValue(parseInt(ctx.getText()));
    };

    visitNumber_hex = (ctx: Number_hexContext): Value => {
        throw new NotYetImplemented("hex", ctx);;
    };

    visitNumber_float = (ctx: Number_floatContext): Value => {
        throw new NotYetImplemented("float", ctx);
    };

    visitNumber_hex_float = (ctx: Number_hex_floatContext): Value => {
        throw new NotYetImplemented("hex loat", ctx);
    };

    visitString_string = (ctx: String_stringContext): Value => {
        const text = ctx.getText();
        return StringValue.from(text.substring(1, text.length - 1));
    };

    visitString_charstring = (ctx: String_charstringContext): Value => {
        throw new NotYetImplemented("char string", ctx);
    };

    visitString_longstring = (ctx: String_longstringContext): Value => {
        throw new NotYetImplemented("long string", ctx);
    };
}
