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
import { NotYetImplemented } from "./errors";
import BreakStmt from "./BreakStmt";

export default class LuaInterpreter extends LuaParserVisitor<Value> {

    private readonly globalScope: VisibilityScope;
    private currentScope: VisibilityScope;

    constructor() {
        super();
        this.globalScope = VisibilityScope.root();
        this.currentScope = this.globalScope;
    }

    getAllGlobalVars(): TableValue {
        return this.globalScope.getAll();
    }

    getGlobalVar(key: Value): Value {
        return this.globalScope.get(key);
    }

    setGlobalVar(key: Value, value: Value): void {
        this.globalScope.set(key, value);
    }

    private isFalse(value: Value): boolean {
        if (value instanceof InternalListValue) {
            value = (value as InternalListValue).getValueOrNil(1);
        }
        return value instanceof NilValue
            || (value instanceof BooleanValue && !(value as BooleanValue).boolean);
    }

    visitStart_ = (ctx: Start_Context): Value => {
        return ctx.chunk().accept(this);
    };

    visitChunk = (ctx: ChunkContext): Value => {
        try {
            ctx.block().accept(this);
        } catch (error) {
            if (error instanceof ReturnStmt) {
                return (error as ReturnStmt).retValues();
            } else {
                throw error;
            }
        }
        return new NilValue();
    };

    visitBlock = (ctx: BlockContext): Value => {
        this.currentScope = VisibilityScope.childOf(this.currentScope);
        try {
            ctx.stat_list().forEach(stat => stat.accept(this));
            if (ctx.retstat()) {
                ctx.retstat().accept(this);
            }
        } finally {
            this.currentScope = this.currentScope.parent();
        }
        return new NilValue;
    };

    visitStat_no_op = (ctx: Stat_no_opContext): Value => {
        return new NilValue();
    };

    visitStat_assing_vars = (ctx: Stat_assing_varsContext): Value => {
        const names = ctx.varlist().accept(this) as InternalListValue;
        const values = ctx.explist().accept(this) as InternalListValue;
        for (let i = 1; i <= names.size(); i++) {
            const name = names.get(i);
            const value = values.getValueOrNil(i);
            let scope = this.currentScope;
            while (true) {
                if (scope.has(name)) {
                    scope.set(name, value);
                    break;
                } else if (scope.parent() !== undefined) {
                    scope = scope.parent();
                } else {
                    scope.set(name, value);
                    break;
                }
            }
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
        while (true) {
            const exp = ctx.exp().accept(this);
            if (this.isFalse(exp)) {
                return new NilValue();
            }
            try {
                ctx.block().accept(this);
            } catch (error) {
                if (error instanceof BreakStmt) {
                    return new NilValue();
                } else {
                    throw error;
                }
            }
        }
    };

    visitStat_repeat = (ctx: Stat_repeatContext): Value => {
        this.currentScope = VisibilityScope.childOf(this.currentScope);
        try {
            while (true) {
                try {
                    ctx.block().stat_list().forEach(stmt => stmt.accept(this));
                } catch (error) {
                    if (error instanceof BreakStmt) {
                        break;
                    } else {
                        throw error;
                    }
                }
                const exp = ctx.exp().accept(this);
                if (!this.isFalse(exp)) {
                    break;
                }
            }
        } finally {
            this.currentScope = this.currentScope.parent();
        }
        return new NilValue();
    };

    visitStat_if = (ctx: Stat_ifContext): Value => {
        for (let i = 0; i < ctx.exp_list().length; i++) {
            let expValue = ctx.exp_list()[i].accept(this);
            if (expValue instanceof InternalListValue) {
                expValue = (expValue as InternalListValue).getValueOrNil(1);
            }
            if ((expValue instanceof NilValue)||
                ((expValue instanceof BooleanValue) && !(expValue as BooleanValue).boolean)) {
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
        throw new NotYetImplemented("for exp", ctx);
    };

    visitStat_for_list = (ctx: Stat_for_listContext): Value => {
        throw new NotYetImplemented("for list", ctx);
    };

    visitStat_function = (ctx: Stat_functionContext): Value => {
        if (ctx.funcname().NAME_list().length != 1) {
            throw new Error("Only simple function names are supported");
        }
        const name = StringValue.from(ctx.funcname().NAME(0).getText());
        const parameters = ctx.funcbody().parlist().accept(this);
        const block = ctx.funcbody().block();
        const f = new FunctionValue(parameters as InternalListValue, block);
        this.setGlobalVar(name, f);
        return new NilValue();
    };

    visitStat_local_function = (ctx: Stat_local_functionContext): Value => {
        throw new NotYetImplemented("local function", ctx);
    };

    visitStat_local_attnamelist = (ctx: Stat_local_attnamelistContext): Value => {
        const names = ctx.attnamelist().accept(this) as InternalListValue;
        const exps = ctx.explist() ?
            ctx.explist().accept(this) as InternalListValue : new InternalListValue([]);
        for (let i = 1; i <= names.size(); i++) {
            this.currentScope.set(
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
                const values = ctx.explist().accept(this);
                if (!(values instanceof InternalListValue)) {
                    throw new Error("Should never happen");
                }
                const list = values as InternalListValue;
                for (let i = 1; i <= list.size(); i++) {
                    resultList.push(list.get(i));
                }
            }
            throw  ReturnStmt.withList(resultList);
        }
        throw new NotYetImplemented("break & continue", ctx);
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
        const result: Value[] = []
        values.forEach(v => {
            if (v instanceof InternalListValue) {
                (v as InternalListValue).list.forEach(item => result.push(item));
            } else {
                result.push(v);
            }
        });
        return new InternalListValue(result);
    };

    visitExp_true = (ctx: Exp_trueContext): Value => {
        return BooleanValue.true();
    };

    visitExp_bits = (ctx: Exp_bitsContext): Value => {
        throw new NotYetImplemented("bits", ctx);
    };

    visitExp_and = (ctx: Exp_andContext): Value => {
        throw new NotYetImplemented("and", ctx);
    };

    visitExp_string = (ctx: Exp_stringContext): Value => {
        return ctx.string_().accept(this);
    };

    visitExp_arithmetic_high = (ctx: Exp_arithmetic_highContext): Value => {
        const left = ctx.exp(0).accept(this);
        const right = ctx.exp(1).accept(this);
        if (!(left instanceof NumberValue)) {
            throw new Error(`Expected NumberValue, but got ${left.constructor.name}`);
        }
        if (!(right instanceof NumberValue)) {
            throw new Error(`Expected NumberValue, but got ${right.constructor.name}`);
        }
        if (ctx.STAR()) {
            return new NumberValue((left as NumberValue).number * (right as NumberValue).number)
        }
        if (ctx.SLASH()) {
            return new NumberValue((left as NumberValue).number / (right as NumberValue).number)
        }
        throw new NotYetImplemented("operation", ctx);
    };

    visitExp_rel = (ctx: Exp_relContext): Value => {
        const left = ctx.exp(0).accept(this);
        const right = ctx.exp(1).accept(this);
        if ((left instanceof NumberValue) && (right instanceof NumberValue)) {
            const l = (left as NumberValue).number;
            const r = (right as NumberValue).number;
            if (ctx.LT()) return BooleanValue.from(l < r);
            if (ctx.EE()) return BooleanValue.from(l == r);
            throw new NotYetImplemented("OP Not Implemented", ctx);
        }
        throw new NotYetImplemented("compare for non numbers", ctx);
    };

    visitStat_table_construnctor = (ctx: Stat_table_construnctorContext): Value => {
        throw new NotYetImplemented("table constructor", ctx);
    };

    visitExp_unary = (ctx: Exp_unaryContext): Value => {
        if (ctx.MINUS()) {
            const exp = ctx.exp().accept(this);
            if (exp instanceof NumberValue) {
                return new NumberValue(-1*(exp as NumberValue).number);
            } else {
                new NotYetImplemented(`minus unary only supported for number, got ${exp.constructor.name}`, ctx);
            }
        }
        throw new NotYetImplemented("this unary", ctx);
    };

    visitExp_or = (ctx: Exp_orContext): Value => {
        throw new NotYetImplemented("or", ctx);
    };

    visitExp_false = (ctx: Exp_falseContext): Value => {
        return BooleanValue.false();
    };

    visitStat_prefix_exp = (ctx: Stat_prefix_expContext): Value => {
        return ctx.prefixexp().accept(this);
    };

    visitExp_exponent = (ctx: Exp_exponentContext): Value => {
        throw new NotYetImplemented("exponent", ctx);
    };

    visitExp_number = (ctx: Exp_numberContext): Value => {
        return ctx.number_().accept(this);
    };

    visitExp_concat = (ctx: Exp_concatContext): Value => {
        throw new NotYetImplemented("concat", ctx);
    };

    visitExp_vararg = (ctx: Exp_varargContext): Value => {
        throw new NotYetImplemented("vararg", ctx);
    };

    visitExp_arithmetic_low = (ctx: Exp_arithmetic_lowContext): Value => {
        const left = ctx.exp(0).accept(this);
        const right = ctx.exp(1).accept(this);
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

    visitFcall_name = (ctx: Fcall_nameContext): Value => {
        if (ctx.exp_list().length > 0) {
            throw new NotYetImplemented("invocation", ctx);
        }
        const fname = ctx.NAME(0).getText();
        const fun = this.currentScope.get(StringValue.from(fname));
        if (!(fun instanceof FunctionValue)) {
            throw new NotYetImplemented("non function", ctx);
        }
        const list_params = (fun as FunctionValue).params() as InternalListValue;
        const list_args = ctx.args().accept(this) as InternalListValue;
        this.currentScope = VisibilityScope.childOf(this.currentScope);
        const len = Math.max(list_params.size(), list_args.size());
        for (let i = 1; i <= len; i++) {
            this.currentScope.set(list_params.get(i), list_args.get(i));
        }
        if (len < list_params.size()) {
            for (let i = len+1; i <= list_params.size(); i++) {
                this.currentScope.set(list_params.get(i), new NilValue());
            }
        }
        let result = new NilValue();
        try {
            (fun as FunctionValue).body().accept(this);
        } catch (error) {
            if (error instanceof ReturnStmt) {
                result = (error as ReturnStmt).retValues();
            } else {
                throw error;
            }
        }
        this.currentScope = this.currentScope.parent();
        return result;
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
            return ctx.explist().accept(this);
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
