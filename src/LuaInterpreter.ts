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

export default class LuaInterpreter extends LuaParserVisitor<number> {
    visitStart_ = (ctx: Start_Context): number => {
        throw new Error("Not Implemented");
    };

    visitChunk = (ctx: ChunkContext): number => {
        throw new Error("Not Implemented");
    };

    visitBlock = (ctx: BlockContext): number => {
        throw new Error("Not Implemented");
    };

    visitStat_no_op = (ctx: Stat_no_opContext): number => {
        throw new Error("Not Implemented");
    };

    visitStat_assing_vars = (ctx: Stat_assing_varsContext): number => {
        throw new Error("Not Implemented");
    };

    visitStat_function_call = (ctx: Stat_function_callContext): number => {
        throw new Error("Not Implemented");
    };

    visitStat_label = (ctx: Stat_labelContext): number => {
        throw new Error("Not Implemented");
    };

    visitStat_break = (ctx: Stat_breakContext): number => {
        throw new Error("Not Implemented");
    };

    visitStat_goto = (ctx: Stat_gotoContext): number => {
        throw new Error("Not Implemented");
    };

    visitStat_do = (ctx: Stat_doContext): number => {
        throw new Error("Not Implemented");
    };

    visitStat_while = (ctx: Stat_whileContext): number => {
        throw new Error("Not Implemented");
    };

    visitStat_repeat = (ctx: Stat_repeatContext): number => {
        throw new Error("Not Implemented");
    };

    visitStat_if = (ctx: Stat_ifContext): number => {
        throw new Error("Not Implemented");
    };

    visitStat_for_var = (ctx: Stat_for_varContext): number => {
        throw new Error("Not Implemented");
    };

    visitStat_for_list = (ctx: Stat_for_listContext): number => {
        throw new Error("Not Implemented");
    };

    visitStat_function = (ctx: Stat_functionContext): number => {
        throw new Error("Not Implemented");
    };

    visitStat_local_function = (ctx: Stat_local_functionContext): number => {
        throw new Error("Not Implemented");
    };

    visitStat_local_attnamelist = (ctx: Stat_local_attnamelistContext): number => {
        throw new Error("Not Implemented");
    };

    visitAttnamelist = (ctx: AttnamelistContext): number => {
        throw new Error("Not Implemented");
    };

    visitAttrib = (ctx: AttribContext): number => {
        throw new Error("Not Implemented");
    };

    visitRetstat = (ctx: RetstatContext): number => {
        throw new Error("Not Implemented");
    };

    visitLabel = (ctx: LabelContext): number => {
        throw new Error("Not Implemented");
    };

    visitFuncname = (ctx: FuncnameContext): number => {
        throw new Error("Not Implemented");
    };

    visitVarlist = (ctx: VarlistContext): number => {
        throw new Error("Not Implemented");
    };

    visitNamelist = (ctx: NamelistContext): number => {
        throw new Error("Not Implemented");
    };

    visitExplist = (ctx: ExplistContext): number => {
        throw new Error("Not Implemented");
    };

    visitExp_true = (ctx: Exp_trueContext): number => {
        throw new Error("Not Implemented");
    };

    visitExp_bits = (ctx: Exp_bitsContext): number => {
        throw new Error("Not Implemented");
    };

    visitExp_and = (ctx: Exp_andContext): number => {
        throw new Error("Not Implemented");
    };

    visitExp_string = (ctx: Exp_stringContext): number => {
        throw new Error("Not Implemented");
    };

    visitExp_arithmetic_high = (ctx: Exp_arithmetic_highContext): number => {
        throw new Error("Not Implemented");
    };

    visitExp_rel = (ctx: Exp_relContext): number => {
        throw new Error("Not Implemented");
    };

    visitStat_table_construnctor = (ctx: Stat_table_construnctorContext): number => {
        throw new Error("Not Implemented");
    };

    visitExp_unary = (ctx: Exp_unaryContext): number => {
        throw new Error("Not Implemented");
    };

    visitExp_or = (ctx: Exp_orContext): number => {
        throw new Error("Not Implemented");
    };

    visitExp_false = (ctx: Exp_falseContext): number => {
        throw new Error("Not Implemented");
    };

    visitStat_prefix_exp = (ctx: Stat_prefix_expContext): number => {
        throw new Error("Not Implemented");
    };

    visitExp_exponent = (ctx: Exp_exponentContext): number => {
        throw new Error("Not Implemented");
    };

    visitExp_number = (ctx: Exp_numberContext): number => {
        throw new Error("Not Implemented");
    };

    visitExp_concat = (ctx: Exp_concatContext): number => {
        throw new Error("Not Implemented");
    };

    visitExp_vararg = (ctx: Exp_varargContext): number => {
        throw new Error("Not Implemented");
    };

    visitExp_arithmetic_low = (ctx: Exp_arithmetic_lowContext): number => {
        throw new Error("Not Implemented");
    };

    visitExp_function_def = (ctx: Exp_function_defContext): number => {
        throw new Error("Not Implemented");
    };

    visitExp_nil = (ctx: Exp_nilContext): number => {
        throw new Error("Not Implemented");
    };

    visitVar_name = (ctx: Var_nameContext): number => {
        throw new Error("Not Implemented");
    };

    visitVar_exp = (ctx: Var_expContext): number => {
        throw new Error("Not Implemented");
    };

    visitPrefixexp_name = (ctx: Prefixexp_nameContext): number => {
        throw new Error("Not Implemented");
    };

    visitPrefixexp_function_call = (ctx: Prefixexp_function_callContext): number => {
        throw new Error("Not Implemented");
    };

    visitPrefixexp_exp = (ctx: Prefixexp_expContext): number => {
        throw new Error("Not Implemented");
    };

    visitFcall_name = (ctx: Fcall_nameContext): number => {
        throw new Error("Not Implemented");
    };

    visitFcall_name_ext = (ctx: Fcall_name_extContext): number => {
        throw new Error("Not Implemented");
    };

    visitFcall_function_call = (ctx: Fcall_function_callContext): number => {
        throw new Error("Not Implemented");
    };

    visitFcall_exp = (ctx: Fcall_expContext): number => {
        throw new Error("Not Implemented");
    };

    visitFcall_exp_ext = (ctx: Fcall_exp_extContext): number => {
        throw new Error("Not Implemented");
    };

    visitFcall_function_call_ext = (ctx: Fcall_function_call_extContext): number => {
        throw new Error("Not Implemented");
    };

    visitArgs_exp_list = (ctx: Args_exp_listContext): number => {
        throw new Error("Not Implemented");
    };

    visitArgs_table_constructor = (ctx: Args_table_constructorContext): number => {
        throw new Error("Not Implemented");
    };

    visitArgs_string = (ctx: Args_stringContext): number => {
        throw new Error("Not Implemented");
    };

    visitFunctiondef = (ctx: FunctiondefContext): number => {
        throw new Error("Not Implemented");
    };

    visitFuncbody = (ctx: FuncbodyContext): number => {
        throw new Error("Not Implemented");
    };

    visitParlist_namellist = (ctx: Parlist_namellistContext): number => {
        throw new Error("Not Implemented");
    };

    visitParlist_vararg = (ctx: Parlist_varargContext): number => {
        throw new Error("Not Implemented");
    };

    visitParlist_none = (ctx: Parlist_noneContext): number => {
        throw new Error("Not Implemented");
    };

    visitTableconstructor = (ctx: TableconstructorContext): number => {
        throw new Error("Not Implemented");
    };

    visitFieldlist = (ctx: FieldlistContext): number => {
        throw new Error("Not Implemented");
    };

    visitField_exp_exp = (ctx: Field_exp_expContext): number => {
        throw new Error("Not Implemented");
    };

    visitField_name_exp = (ctx: Field_name_expContext): number => {
        throw new Error("Not Implemented");
    };

    visitField_exp = (ctx: Field_expContext): number => {
        throw new Error("Not Implemented");
    };

    visitFieldsep = (ctx: FieldsepContext): number => {
        throw new Error("Not Implemented");
    };

    visitNumber_int = (ctx: Number_intContext): number => {
        throw new Error("Not Implemented");
    };

    visitNumber_hex = (ctx: Number_hexContext): number => {
        throw new Error("Not Implemented");
    };

    visitNumber_float = (ctx: Number_floatContext): number => {
        throw new Error("Not Implemented");
    };

    visitNumber_hex_float = (ctx: Number_hex_floatContext): number => {
        throw new Error("Not Implemented");
    };

    visitString_string = (ctx: String_stringContext): number => {
        throw new Error("Not Implemented");
    };

    visitString_charstring = (ctx: String_charstringContext): number => {
        throw new Error("Not Implemented");
    };

    visitString_longstring = (ctx: String_longstringContext): number => {
        throw new Error("Not Implemented");
    };
}
