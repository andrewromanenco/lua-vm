// Generated from LuaParser.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { Start_Context } from "./LuaParser.js";
import { ChunkContext } from "./LuaParser.js";
import { BlockContext } from "./LuaParser.js";
import { Stat_no_opContext } from "./LuaParser.js";
import { Stat_assing_varsContext } from "./LuaParser.js";
import { Stat_function_callContext } from "./LuaParser.js";
import { Stat_labelContext } from "./LuaParser.js";
import { Stat_breakContext } from "./LuaParser.js";
import { Stat_gotoContext } from "./LuaParser.js";
import { Stat_doContext } from "./LuaParser.js";
import { Stat_whileContext } from "./LuaParser.js";
import { Stat_repeatContext } from "./LuaParser.js";
import { Stat_ifContext } from "./LuaParser.js";
import { Stat_for_varContext } from "./LuaParser.js";
import { Stat_for_listContext } from "./LuaParser.js";
import { Stat_functionContext } from "./LuaParser.js";
import { Stat_local_functionContext } from "./LuaParser.js";
import { Stat_local_attnamelistContext } from "./LuaParser.js";
import { AttnamelistContext } from "./LuaParser.js";
import { AttribContext } from "./LuaParser.js";
import { RetstatContext } from "./LuaParser.js";
import { LabelContext } from "./LuaParser.js";
import { FuncnameContext } from "./LuaParser.js";
import { VarlistContext } from "./LuaParser.js";
import { NamelistContext } from "./LuaParser.js";
import { ExplistContext } from "./LuaParser.js";
import { Exp_trueContext } from "./LuaParser.js";
import { Exp_bitsContext } from "./LuaParser.js";
import { Exp_andContext } from "./LuaParser.js";
import { Exp_stringContext } from "./LuaParser.js";
import { Exp_arithmetic_highContext } from "./LuaParser.js";
import { Exp_relContext } from "./LuaParser.js";
import { Stat_table_construnctorContext } from "./LuaParser.js";
import { Exp_unaryContext } from "./LuaParser.js";
import { Exp_orContext } from "./LuaParser.js";
import { Exp_falseContext } from "./LuaParser.js";
import { Stat_prefix_expContext } from "./LuaParser.js";
import { Exp_exponentContext } from "./LuaParser.js";
import { Exp_numberContext } from "./LuaParser.js";
import { Exp_concatContext } from "./LuaParser.js";
import { Exp_varargContext } from "./LuaParser.js";
import { Exp_arithmetic_lowContext } from "./LuaParser.js";
import { Exp_function_defContext } from "./LuaParser.js";
import { Exp_nilContext } from "./LuaParser.js";
import { Var_nameContext } from "./LuaParser.js";
import { Var_expContext } from "./LuaParser.js";
import { Prefixexp_nameContext } from "./LuaParser.js";
import { Prefixexp_function_callContext } from "./LuaParser.js";
import { Prefixexp_expContext } from "./LuaParser.js";
import { Fcall_nameContext } from "./LuaParser.js";
import { Fcall_name_extContext } from "./LuaParser.js";
import { Fcall_function_callContext } from "./LuaParser.js";
import { Fcall_expContext } from "./LuaParser.js";
import { Fcall_exp_extContext } from "./LuaParser.js";
import { Fcall_function_call_extContext } from "./LuaParser.js";
import { Args_exp_listContext } from "./LuaParser.js";
import { Args_table_constructorContext } from "./LuaParser.js";
import { Args_stringContext } from "./LuaParser.js";
import { FunctiondefContext } from "./LuaParser.js";
import { FuncbodyContext } from "./LuaParser.js";
import { Parlist_namellistContext } from "./LuaParser.js";
import { Parlist_varargContext } from "./LuaParser.js";
import { Parlist_noneContext } from "./LuaParser.js";
import { TableconstructorContext } from "./LuaParser.js";
import { FieldlistContext } from "./LuaParser.js";
import { Field_exp_expContext } from "./LuaParser.js";
import { Field_name_expContext } from "./LuaParser.js";
import { Field_expContext } from "./LuaParser.js";
import { FieldsepContext } from "./LuaParser.js";
import { Number_intContext } from "./LuaParser.js";
import { Number_hexContext } from "./LuaParser.js";
import { Number_floatContext } from "./LuaParser.js";
import { Number_hex_floatContext } from "./LuaParser.js";
import { String_stringContext } from "./LuaParser.js";
import { String_charstringContext } from "./LuaParser.js";
import { String_longstringContext } from "./LuaParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LuaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class LuaParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `LuaParser.start_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart_?: (ctx: Start_Context) => Result;
	/**
	 * Visit a parse tree produced by `LuaParser.chunk`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChunk?: (ctx: ChunkContext) => Result;
	/**
	 * Visit a parse tree produced by `LuaParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;
	/**
	 * Visit a parse tree produced by the `stat_no_op`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat_no_op?: (ctx: Stat_no_opContext) => Result;
	/**
	 * Visit a parse tree produced by the `stat_assing_vars`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat_assing_vars?: (ctx: Stat_assing_varsContext) => Result;
	/**
	 * Visit a parse tree produced by the `stat_function_call`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat_function_call?: (ctx: Stat_function_callContext) => Result;
	/**
	 * Visit a parse tree produced by the `stat_label`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat_label?: (ctx: Stat_labelContext) => Result;
	/**
	 * Visit a parse tree produced by the `stat_break`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat_break?: (ctx: Stat_breakContext) => Result;
	/**
	 * Visit a parse tree produced by the `stat_goto`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat_goto?: (ctx: Stat_gotoContext) => Result;
	/**
	 * Visit a parse tree produced by the `stat_do`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat_do?: (ctx: Stat_doContext) => Result;
	/**
	 * Visit a parse tree produced by the `stat_while`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat_while?: (ctx: Stat_whileContext) => Result;
	/**
	 * Visit a parse tree produced by the `stat_repeat`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat_repeat?: (ctx: Stat_repeatContext) => Result;
	/**
	 * Visit a parse tree produced by the `stat_if`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat_if?: (ctx: Stat_ifContext) => Result;
	/**
	 * Visit a parse tree produced by the `stat_for_var`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat_for_var?: (ctx: Stat_for_varContext) => Result;
	/**
	 * Visit a parse tree produced by the `stat_for_list`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat_for_list?: (ctx: Stat_for_listContext) => Result;
	/**
	 * Visit a parse tree produced by the `stat_function`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat_function?: (ctx: Stat_functionContext) => Result;
	/**
	 * Visit a parse tree produced by the `stat_local_function`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat_local_function?: (ctx: Stat_local_functionContext) => Result;
	/**
	 * Visit a parse tree produced by the `stat_local_attnamelist`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat_local_attnamelist?: (ctx: Stat_local_attnamelistContext) => Result;
	/**
	 * Visit a parse tree produced by `LuaParser.attnamelist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttnamelist?: (ctx: AttnamelistContext) => Result;
	/**
	 * Visit a parse tree produced by `LuaParser.attrib`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttrib?: (ctx: AttribContext) => Result;
	/**
	 * Visit a parse tree produced by `LuaParser.retstat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRetstat?: (ctx: RetstatContext) => Result;
	/**
	 * Visit a parse tree produced by `LuaParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;
	/**
	 * Visit a parse tree produced by `LuaParser.funcname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncname?: (ctx: FuncnameContext) => Result;
	/**
	 * Visit a parse tree produced by `LuaParser.varlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarlist?: (ctx: VarlistContext) => Result;
	/**
	 * Visit a parse tree produced by `LuaParser.namelist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamelist?: (ctx: NamelistContext) => Result;
	/**
	 * Visit a parse tree produced by `LuaParser.explist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplist?: (ctx: ExplistContext) => Result;
	/**
	 * Visit a parse tree produced by the `exp_true`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp_true?: (ctx: Exp_trueContext) => Result;
	/**
	 * Visit a parse tree produced by the `exp_bits`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp_bits?: (ctx: Exp_bitsContext) => Result;
	/**
	 * Visit a parse tree produced by the `exp_and`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp_and?: (ctx: Exp_andContext) => Result;
	/**
	 * Visit a parse tree produced by the `exp_string`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp_string?: (ctx: Exp_stringContext) => Result;
	/**
	 * Visit a parse tree produced by the `exp_arithmetic_high`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp_arithmetic_high?: (ctx: Exp_arithmetic_highContext) => Result;
	/**
	 * Visit a parse tree produced by the `exp_rel`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp_rel?: (ctx: Exp_relContext) => Result;
	/**
	 * Visit a parse tree produced by the `stat_table_construnctor`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat_table_construnctor?: (ctx: Stat_table_construnctorContext) => Result;
	/**
	 * Visit a parse tree produced by the `exp_unary`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp_unary?: (ctx: Exp_unaryContext) => Result;
	/**
	 * Visit a parse tree produced by the `exp_or`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp_or?: (ctx: Exp_orContext) => Result;
	/**
	 * Visit a parse tree produced by the `exp_false`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp_false?: (ctx: Exp_falseContext) => Result;
	/**
	 * Visit a parse tree produced by the `stat_prefix_exp`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat_prefix_exp?: (ctx: Stat_prefix_expContext) => Result;
	/**
	 * Visit a parse tree produced by the `exp_exponent`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp_exponent?: (ctx: Exp_exponentContext) => Result;
	/**
	 * Visit a parse tree produced by the `exp_number`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp_number?: (ctx: Exp_numberContext) => Result;
	/**
	 * Visit a parse tree produced by the `exp_concat`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp_concat?: (ctx: Exp_concatContext) => Result;
	/**
	 * Visit a parse tree produced by the `exp_vararg`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp_vararg?: (ctx: Exp_varargContext) => Result;
	/**
	 * Visit a parse tree produced by the `exp_arithmetic_low`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp_arithmetic_low?: (ctx: Exp_arithmetic_lowContext) => Result;
	/**
	 * Visit a parse tree produced by the `exp_function_def`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp_function_def?: (ctx: Exp_function_defContext) => Result;
	/**
	 * Visit a parse tree produced by the `exp_nil`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp_nil?: (ctx: Exp_nilContext) => Result;
	/**
	 * Visit a parse tree produced by the `var_name`
	 * labeled alternative in `LuaParser.var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar_name?: (ctx: Var_nameContext) => Result;
	/**
	 * Visit a parse tree produced by the `var_exp`
	 * labeled alternative in `LuaParser.var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar_exp?: (ctx: Var_expContext) => Result;
	/**
	 * Visit a parse tree produced by the `prefixexp_name`
	 * labeled alternative in `LuaParser.prefixexp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixexp_name?: (ctx: Prefixexp_nameContext) => Result;
	/**
	 * Visit a parse tree produced by the `prefixexp_function_call`
	 * labeled alternative in `LuaParser.prefixexp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixexp_function_call?: (ctx: Prefixexp_function_callContext) => Result;
	/**
	 * Visit a parse tree produced by the `prefixexp_exp`
	 * labeled alternative in `LuaParser.prefixexp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixexp_exp?: (ctx: Prefixexp_expContext) => Result;
	/**
	 * Visit a parse tree produced by the `fcall_name`
	 * labeled alternative in `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFcall_name?: (ctx: Fcall_nameContext) => Result;
	/**
	 * Visit a parse tree produced by the `fcall_name_ext`
	 * labeled alternative in `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFcall_name_ext?: (ctx: Fcall_name_extContext) => Result;
	/**
	 * Visit a parse tree produced by the `fcall_function_call`
	 * labeled alternative in `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFcall_function_call?: (ctx: Fcall_function_callContext) => Result;
	/**
	 * Visit a parse tree produced by the `fcall_exp`
	 * labeled alternative in `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFcall_exp?: (ctx: Fcall_expContext) => Result;
	/**
	 * Visit a parse tree produced by the `fcall_exp_ext`
	 * labeled alternative in `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFcall_exp_ext?: (ctx: Fcall_exp_extContext) => Result;
	/**
	 * Visit a parse tree produced by the `fcall_function_call_ext`
	 * labeled alternative in `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFcall_function_call_ext?: (ctx: Fcall_function_call_extContext) => Result;
	/**
	 * Visit a parse tree produced by the `args_exp_list`
	 * labeled alternative in `LuaParser.args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgs_exp_list?: (ctx: Args_exp_listContext) => Result;
	/**
	 * Visit a parse tree produced by the `args_table_constructor`
	 * labeled alternative in `LuaParser.args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgs_table_constructor?: (ctx: Args_table_constructorContext) => Result;
	/**
	 * Visit a parse tree produced by the `args_string`
	 * labeled alternative in `LuaParser.args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgs_string?: (ctx: Args_stringContext) => Result;
	/**
	 * Visit a parse tree produced by `LuaParser.functiondef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctiondef?: (ctx: FunctiondefContext) => Result;
	/**
	 * Visit a parse tree produced by `LuaParser.funcbody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncbody?: (ctx: FuncbodyContext) => Result;
	/**
	 * Visit a parse tree produced by the `parlist_namellist`
	 * labeled alternative in `LuaParser.parlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParlist_namellist?: (ctx: Parlist_namellistContext) => Result;
	/**
	 * Visit a parse tree produced by the `parlist_vararg`
	 * labeled alternative in `LuaParser.parlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParlist_vararg?: (ctx: Parlist_varargContext) => Result;
	/**
	 * Visit a parse tree produced by the `parlist_none`
	 * labeled alternative in `LuaParser.parlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParlist_none?: (ctx: Parlist_noneContext) => Result;
	/**
	 * Visit a parse tree produced by `LuaParser.tableconstructor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableconstructor?: (ctx: TableconstructorContext) => Result;
	/**
	 * Visit a parse tree produced by `LuaParser.fieldlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldlist?: (ctx: FieldlistContext) => Result;
	/**
	 * Visit a parse tree produced by the `field_exp_exp`
	 * labeled alternative in `LuaParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_exp_exp?: (ctx: Field_exp_expContext) => Result;
	/**
	 * Visit a parse tree produced by the `field_name_exp`
	 * labeled alternative in `LuaParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_name_exp?: (ctx: Field_name_expContext) => Result;
	/**
	 * Visit a parse tree produced by the `field_exp`
	 * labeled alternative in `LuaParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_exp?: (ctx: Field_expContext) => Result;
	/**
	 * Visit a parse tree produced by `LuaParser.fieldsep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldsep?: (ctx: FieldsepContext) => Result;
	/**
	 * Visit a parse tree produced by the `number_int`
	 * labeled alternative in `LuaParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber_int?: (ctx: Number_intContext) => Result;
	/**
	 * Visit a parse tree produced by the `number_hex`
	 * labeled alternative in `LuaParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber_hex?: (ctx: Number_hexContext) => Result;
	/**
	 * Visit a parse tree produced by the `number_float`
	 * labeled alternative in `LuaParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber_float?: (ctx: Number_floatContext) => Result;
	/**
	 * Visit a parse tree produced by the `number_hex_float`
	 * labeled alternative in `LuaParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber_hex_float?: (ctx: Number_hex_floatContext) => Result;
	/**
	 * Visit a parse tree produced by the `string_string`
	 * labeled alternative in `LuaParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_string?: (ctx: String_stringContext) => Result;
	/**
	 * Visit a parse tree produced by the `string_charstring`
	 * labeled alternative in `LuaParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_charstring?: (ctx: String_charstringContext) => Result;
	/**
	 * Visit a parse tree produced by the `string_longstring`
	 * labeled alternative in `LuaParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_longstring?: (ctx: String_longstringContext) => Result;
}

