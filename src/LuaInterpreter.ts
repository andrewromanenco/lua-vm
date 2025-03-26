import LuaParserVisitor from "./parser/LuaParserVisitor";
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
} from "./parser/LuaParser";
import { NumberValue, Value } from "./types";

export default class LuaInterpreter extends LuaParserVisitor<Value> {
    visitStart_ = (ctx: Start_Context): Value => {
        throw new Error("Not Implemented");
    };

    visitChunk = (ctx: ChunkContext): Value => {
        throw new Error("Not Implemented");
    };

    visitBlock = (ctx: BlockContext): Value => {
        throw new Error("Not Implemented");
    };

    visitStat_no_op = (ctx: Stat_no_opContext): Value => {
        throw new Error("Not Implemented");
    };

    visitStat_assing_vars = (ctx: Stat_assing_varsContext): Value => {
        throw new Error("Not Implemented");
    };

    visitStat_function_call = (ctx: Stat_function_callContext): Value => {
        throw new Error("Not Implemented");
    };

    visitStat_label = (ctx: Stat_labelContext): Value => {
        throw new Error("Not Implemented");
    };

    visitStat_break = (ctx: Stat_breakContext): Value => {
        throw new Error("Not Implemented");
    };

    visitStat_goto = (ctx: Stat_gotoContext): Value => {
        throw new Error("Not Implemented");
    };

    visitStat_do = (ctx: Stat_doContext): Value => {
        throw new Error("Not Implemented");
    };

    visitStat_while = (ctx: Stat_whileContext): Value => {
        throw new Error("Not Implemented");
    };

    visitStat_repeat = (ctx: Stat_repeatContext): Value => {
        throw new Error("Not Implemented");
    };

    visitStat_if = (ctx: Stat_ifContext): Value => {
        throw new Error("Not Implemented");
    };

    visitStat_for_var = (ctx: Stat_for_varContext): Value => {
        throw new Error("Not Implemented");
    };

    visitStat_for_list = (ctx: Stat_for_listContext): Value => {
        throw new Error("Not Implemented");
    };

    visitStat_function = (ctx: Stat_functionContext): Value => {
        throw new Error("Not Implemented");
    };

    visitStat_local_function = (ctx: Stat_local_functionContext): Value => {
        throw new Error("Not Implemented");
    };

    visitStat_local_attnamelist = (ctx: Stat_local_attnamelistContext): Value => {
        throw new Error("Not Implemented");
    };

    visitAttnamelist = (ctx: AttnamelistContext): Value => {
        throw new Error("Not Implemented");
    };

    visitAttrib = (ctx: AttribContext): Value => {
        throw new Error("Not Implemented");
    };

    visitRetstat = (ctx: RetstatContext): Value => {
        throw new Error("Not Implemented");
    };

    visitLabel = (ctx: LabelContext): Value => {
        throw new Error("Not Implemented");
    };

    visitFuncname = (ctx: FuncnameContext): Value => {
        throw new Error("Not Implemented");
    };

    visitVarlist = (ctx: VarlistContext): Value => {
        throw new Error("Not Implemented");
    };

    visitNamelist = (ctx: NamelistContext): Value => {
        throw new Error("Not Implemented");
    };

    visitExplist = (ctx: ExplistContext): Value => {
        throw new Error("Not Implemented");
    };

    visitExp_true = (ctx: Exp_trueContext): Value => {
        throw new Error("Not Implemented");
    };

    visitExp_bits = (ctx: Exp_bitsContext): Value => {
        throw new Error("Not Implemented");
    };

    visitExp_and = (ctx: Exp_andContext): Value => {
        throw new Error("Not Implemented");
    };

    visitExp_string = (ctx: Exp_stringContext): Value => {
        throw new Error("Not Implemented");
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
        throw new Error("Other operations not yet supported");
    };

    visitExp_rel = (ctx: Exp_relContext): Value => {
        throw new Error("Not Implemented");
    };

    visitStat_table_construnctor = (ctx: Stat_table_construnctorContext): Value => {
        throw new Error("Not Implemented");
    };

    visitExp_unary = (ctx: Exp_unaryContext): Value => {
        if (ctx.MINUS()) {
            const exp = ctx.exp().accept(this);
            if (exp instanceof NumberValue) {
                return new NumberValue(-1*(exp as NumberValue).number);
            } else {
                new Error(`minus unary only supported for number, got ${exp.constructor.name}`);
            }
        }
        throw new Error("Other unary ops are not yet implemented");
    };

    visitExp_or = (ctx: Exp_orContext): Value => {
        throw new Error("Not Implemented");
    };

    visitExp_false = (ctx: Exp_falseContext): Value => {
        throw new Error("Not Implemented");
    };

    visitStat_prefix_exp = (ctx: Stat_prefix_expContext): Value => {
        throw new Error("Not Implemented");
    };

    visitExp_exponent = (ctx: Exp_exponentContext): Value => {
        throw new Error("Not Implemented");
    };

    visitExp_number = (ctx: Exp_numberContext): Value => {
        return ctx.number_().accept(this);
    };

    visitExp_concat = (ctx: Exp_concatContext): Value => {
        throw new Error("Not Implemented");
    };

    visitExp_vararg = (ctx: Exp_varargContext): Value => {
        throw new Error("Not Implemented");
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
        throw new Error("Not Implemented");
    };

    visitExp_nil = (ctx: Exp_nilContext): Value => {
        throw new Error("Not Implemented");
    };

    visitVar_name = (ctx: Var_nameContext): Value => {
        throw new Error("Not Implemented");
    };

    visitVar_exp = (ctx: Var_expContext): Value => {
        throw new Error("Not Implemented");
    };

    visitPrefixexp_name = (ctx: Prefixexp_nameContext): Value => {
        throw new Error("Not Implemented");
    };

    visitPrefixexp_function_call = (ctx: Prefixexp_function_callContext): Value => {
        throw new Error("Not Implemented");
    };

    visitPrefixexp_exp = (ctx: Prefixexp_expContext): Value => {
        throw new Error("Not Implemented");
    };

    visitFcall_name = (ctx: Fcall_nameContext): Value => {
        throw new Error("Not Implemented");
    };

    visitFcall_name_ext = (ctx: Fcall_name_extContext): Value => {
        throw new Error("Not Implemented");
    };

    visitFcall_function_call = (ctx: Fcall_function_callContext): Value => {
        throw new Error("Not Implemented");
    };

    visitFcall_exp = (ctx: Fcall_expContext): Value => {
        throw new Error("Not Implemented");
    };

    visitFcall_exp_ext = (ctx: Fcall_exp_extContext): Value => {
        throw new Error("Not Implemented");
    };

    visitFcall_function_call_ext = (ctx: Fcall_function_call_extContext): Value => {
        throw new Error("Not Implemented");
    };

    visitArgs_exp_list = (ctx: Args_exp_listContext): Value => {
        throw new Error("Not Implemented");
    };

    visitArgs_table_constructor = (ctx: Args_table_constructorContext): Value => {
        throw new Error("Not Implemented");
    };

    visitArgs_string = (ctx: Args_stringContext): Value => {
        throw new Error("Not Implemented");
    };

    visitFunctiondef = (ctx: FunctiondefContext): Value => {
        throw new Error("Not Implemented");
    };

    visitFuncbody = (ctx: FuncbodyContext): Value => {
        throw new Error("Not Implemented");
    };

    visitParlist_namellist = (ctx: Parlist_namellistContext): Value => {
        throw new Error("Not Implemented");
    };

    visitParlist_vararg = (ctx: Parlist_varargContext): Value => {
        throw new Error("Not Implemented");
    };

    visitParlist_none = (ctx: Parlist_noneContext): Value => {
        throw new Error("Not Implemented");
    };

    visitTableconstructor = (ctx: TableconstructorContext): Value => {
        throw new Error("Not Implemented");
    };

    visitFieldlist = (ctx: FieldlistContext): Value => {
        throw new Error("Not Implemented");
    };

    visitField_exp_exp = (ctx: Field_exp_expContext): Value => {
        throw new Error("Not Implemented");
    };

    visitField_name_exp = (ctx: Field_name_expContext): Value => {
        throw new Error("Not Implemented");
    };

    visitField_exp = (ctx: Field_expContext): Value => {
        throw new Error("Not Implemented");
    };

    visitFieldsep = (ctx: FieldsepContext): Value => {
        throw new Error("Not Implemented");
    };

    visitNumber_int = (ctx: Number_intContext): Value => {
        return new NumberValue(parseInt(ctx.getText()));
    };

    visitNumber_hex = (ctx: Number_hexContext): Value => {
        throw new Error("Not Implemented");
    };

    visitNumber_float = (ctx: Number_floatContext): Value => {
        throw new Error("Not Implemented");
    };

    visitNumber_hex_float = (ctx: Number_hex_floatContext): Value => {
        throw new Error("Not Implemented");
    };

    visitString_string = (ctx: String_stringContext): Value => {
        throw new Error("Not Implemented");
    };

    visitString_charstring = (ctx: String_charstringContext): Value => {
        throw new Error("Not Implemented");
    };

    visitString_longstring = (ctx: String_longstringContext): Value => {
        throw new Error("Not Implemented");
    };
}
