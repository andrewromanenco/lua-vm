// Generated from ./LuaParser.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `LuaParser`.
 */
export default class LuaParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `LuaParser.start_`.
	 * @param ctx the parse tree
	 */
	enterStart_?: (ctx: Start_Context) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.start_`.
	 * @param ctx the parse tree
	 */
	exitStart_?: (ctx: Start_Context) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.chunk`.
	 * @param ctx the parse tree
	 */
	enterChunk?: (ctx: ChunkContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.chunk`.
	 * @param ctx the parse tree
	 */
	exitChunk?: (ctx: ChunkContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by the `stat_no_op`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat_no_op?: (ctx: Stat_no_opContext) => void;
	/**
	 * Exit a parse tree produced by the `stat_no_op`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat_no_op?: (ctx: Stat_no_opContext) => void;
	/**
	 * Enter a parse tree produced by the `stat_assing_vars`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat_assing_vars?: (ctx: Stat_assing_varsContext) => void;
	/**
	 * Exit a parse tree produced by the `stat_assing_vars`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat_assing_vars?: (ctx: Stat_assing_varsContext) => void;
	/**
	 * Enter a parse tree produced by the `stat_function_call`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat_function_call?: (ctx: Stat_function_callContext) => void;
	/**
	 * Exit a parse tree produced by the `stat_function_call`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat_function_call?: (ctx: Stat_function_callContext) => void;
	/**
	 * Enter a parse tree produced by the `stat_label`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat_label?: (ctx: Stat_labelContext) => void;
	/**
	 * Exit a parse tree produced by the `stat_label`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat_label?: (ctx: Stat_labelContext) => void;
	/**
	 * Enter a parse tree produced by the `stat_break`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat_break?: (ctx: Stat_breakContext) => void;
	/**
	 * Exit a parse tree produced by the `stat_break`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat_break?: (ctx: Stat_breakContext) => void;
	/**
	 * Enter a parse tree produced by the `stat_goto`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat_goto?: (ctx: Stat_gotoContext) => void;
	/**
	 * Exit a parse tree produced by the `stat_goto`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat_goto?: (ctx: Stat_gotoContext) => void;
	/**
	 * Enter a parse tree produced by the `stat_do`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat_do?: (ctx: Stat_doContext) => void;
	/**
	 * Exit a parse tree produced by the `stat_do`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat_do?: (ctx: Stat_doContext) => void;
	/**
	 * Enter a parse tree produced by the `stat_while`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat_while?: (ctx: Stat_whileContext) => void;
	/**
	 * Exit a parse tree produced by the `stat_while`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat_while?: (ctx: Stat_whileContext) => void;
	/**
	 * Enter a parse tree produced by the `stat_repeat`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat_repeat?: (ctx: Stat_repeatContext) => void;
	/**
	 * Exit a parse tree produced by the `stat_repeat`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat_repeat?: (ctx: Stat_repeatContext) => void;
	/**
	 * Enter a parse tree produced by the `stat_if`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat_if?: (ctx: Stat_ifContext) => void;
	/**
	 * Exit a parse tree produced by the `stat_if`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat_if?: (ctx: Stat_ifContext) => void;
	/**
	 * Enter a parse tree produced by the `stat_for_var`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat_for_var?: (ctx: Stat_for_varContext) => void;
	/**
	 * Exit a parse tree produced by the `stat_for_var`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat_for_var?: (ctx: Stat_for_varContext) => void;
	/**
	 * Enter a parse tree produced by the `stat_for_list`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat_for_list?: (ctx: Stat_for_listContext) => void;
	/**
	 * Exit a parse tree produced by the `stat_for_list`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat_for_list?: (ctx: Stat_for_listContext) => void;
	/**
	 * Enter a parse tree produced by the `stat_function`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat_function?: (ctx: Stat_functionContext) => void;
	/**
	 * Exit a parse tree produced by the `stat_function`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat_function?: (ctx: Stat_functionContext) => void;
	/**
	 * Enter a parse tree produced by the `stat_local_function`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat_local_function?: (ctx: Stat_local_functionContext) => void;
	/**
	 * Exit a parse tree produced by the `stat_local_function`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat_local_function?: (ctx: Stat_local_functionContext) => void;
	/**
	 * Enter a parse tree produced by the `stat_local_attnamelist`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat_local_attnamelist?: (ctx: Stat_local_attnamelistContext) => void;
	/**
	 * Exit a parse tree produced by the `stat_local_attnamelist`
	 * labeled alternative in `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat_local_attnamelist?: (ctx: Stat_local_attnamelistContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.attnamelist`.
	 * @param ctx the parse tree
	 */
	enterAttnamelist?: (ctx: AttnamelistContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.attnamelist`.
	 * @param ctx the parse tree
	 */
	exitAttnamelist?: (ctx: AttnamelistContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.attrib`.
	 * @param ctx the parse tree
	 */
	enterAttrib?: (ctx: AttribContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.attrib`.
	 * @param ctx the parse tree
	 */
	exitAttrib?: (ctx: AttribContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.retstat`.
	 * @param ctx the parse tree
	 */
	enterRetstat?: (ctx: RetstatContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.retstat`.
	 * @param ctx the parse tree
	 */
	exitRetstat?: (ctx: RetstatContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.funcname`.
	 * @param ctx the parse tree
	 */
	enterFuncname?: (ctx: FuncnameContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.funcname`.
	 * @param ctx the parse tree
	 */
	exitFuncname?: (ctx: FuncnameContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.varlist`.
	 * @param ctx the parse tree
	 */
	enterVarlist?: (ctx: VarlistContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.varlist`.
	 * @param ctx the parse tree
	 */
	exitVarlist?: (ctx: VarlistContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.namelist`.
	 * @param ctx the parse tree
	 */
	enterNamelist?: (ctx: NamelistContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.namelist`.
	 * @param ctx the parse tree
	 */
	exitNamelist?: (ctx: NamelistContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.explist`.
	 * @param ctx the parse tree
	 */
	enterExplist?: (ctx: ExplistContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.explist`.
	 * @param ctx the parse tree
	 */
	exitExplist?: (ctx: ExplistContext) => void;
	/**
	 * Enter a parse tree produced by the `exp_true`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp_true?: (ctx: Exp_trueContext) => void;
	/**
	 * Exit a parse tree produced by the `exp_true`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp_true?: (ctx: Exp_trueContext) => void;
	/**
	 * Enter a parse tree produced by the `exp_bits`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp_bits?: (ctx: Exp_bitsContext) => void;
	/**
	 * Exit a parse tree produced by the `exp_bits`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp_bits?: (ctx: Exp_bitsContext) => void;
	/**
	 * Enter a parse tree produced by the `exp_and`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp_and?: (ctx: Exp_andContext) => void;
	/**
	 * Exit a parse tree produced by the `exp_and`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp_and?: (ctx: Exp_andContext) => void;
	/**
	 * Enter a parse tree produced by the `exp_string`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp_string?: (ctx: Exp_stringContext) => void;
	/**
	 * Exit a parse tree produced by the `exp_string`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp_string?: (ctx: Exp_stringContext) => void;
	/**
	 * Enter a parse tree produced by the `exp_arithmetic_high`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp_arithmetic_high?: (ctx: Exp_arithmetic_highContext) => void;
	/**
	 * Exit a parse tree produced by the `exp_arithmetic_high`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp_arithmetic_high?: (ctx: Exp_arithmetic_highContext) => void;
	/**
	 * Enter a parse tree produced by the `exp_rel`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp_rel?: (ctx: Exp_relContext) => void;
	/**
	 * Exit a parse tree produced by the `exp_rel`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp_rel?: (ctx: Exp_relContext) => void;
	/**
	 * Enter a parse tree produced by the `stat_table_construnctor`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	enterStat_table_construnctor?: (ctx: Stat_table_construnctorContext) => void;
	/**
	 * Exit a parse tree produced by the `stat_table_construnctor`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	exitStat_table_construnctor?: (ctx: Stat_table_construnctorContext) => void;
	/**
	 * Enter a parse tree produced by the `exp_unary`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp_unary?: (ctx: Exp_unaryContext) => void;
	/**
	 * Exit a parse tree produced by the `exp_unary`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp_unary?: (ctx: Exp_unaryContext) => void;
	/**
	 * Enter a parse tree produced by the `exp_or`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp_or?: (ctx: Exp_orContext) => void;
	/**
	 * Exit a parse tree produced by the `exp_or`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp_or?: (ctx: Exp_orContext) => void;
	/**
	 * Enter a parse tree produced by the `exp_false`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp_false?: (ctx: Exp_falseContext) => void;
	/**
	 * Exit a parse tree produced by the `exp_false`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp_false?: (ctx: Exp_falseContext) => void;
	/**
	 * Enter a parse tree produced by the `stat_prefix_exp`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	enterStat_prefix_exp?: (ctx: Stat_prefix_expContext) => void;
	/**
	 * Exit a parse tree produced by the `stat_prefix_exp`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	exitStat_prefix_exp?: (ctx: Stat_prefix_expContext) => void;
	/**
	 * Enter a parse tree produced by the `exp_exponent`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp_exponent?: (ctx: Exp_exponentContext) => void;
	/**
	 * Exit a parse tree produced by the `exp_exponent`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp_exponent?: (ctx: Exp_exponentContext) => void;
	/**
	 * Enter a parse tree produced by the `exp_number`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp_number?: (ctx: Exp_numberContext) => void;
	/**
	 * Exit a parse tree produced by the `exp_number`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp_number?: (ctx: Exp_numberContext) => void;
	/**
	 * Enter a parse tree produced by the `exp_concat`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp_concat?: (ctx: Exp_concatContext) => void;
	/**
	 * Exit a parse tree produced by the `exp_concat`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp_concat?: (ctx: Exp_concatContext) => void;
	/**
	 * Enter a parse tree produced by the `exp_vararg`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp_vararg?: (ctx: Exp_varargContext) => void;
	/**
	 * Exit a parse tree produced by the `exp_vararg`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp_vararg?: (ctx: Exp_varargContext) => void;
	/**
	 * Enter a parse tree produced by the `exp_arithmetic_low`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp_arithmetic_low?: (ctx: Exp_arithmetic_lowContext) => void;
	/**
	 * Exit a parse tree produced by the `exp_arithmetic_low`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp_arithmetic_low?: (ctx: Exp_arithmetic_lowContext) => void;
	/**
	 * Enter a parse tree produced by the `exp_function_def`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp_function_def?: (ctx: Exp_function_defContext) => void;
	/**
	 * Exit a parse tree produced by the `exp_function_def`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp_function_def?: (ctx: Exp_function_defContext) => void;
	/**
	 * Enter a parse tree produced by the `exp_nil`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp_nil?: (ctx: Exp_nilContext) => void;
	/**
	 * Exit a parse tree produced by the `exp_nil`
	 * labeled alternative in `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp_nil?: (ctx: Exp_nilContext) => void;
	/**
	 * Enter a parse tree produced by the `var_name`
	 * labeled alternative in `LuaParser.var`.
	 * @param ctx the parse tree
	 */
	enterVar_name?: (ctx: Var_nameContext) => void;
	/**
	 * Exit a parse tree produced by the `var_name`
	 * labeled alternative in `LuaParser.var`.
	 * @param ctx the parse tree
	 */
	exitVar_name?: (ctx: Var_nameContext) => void;
	/**
	 * Enter a parse tree produced by the `var_exp`
	 * labeled alternative in `LuaParser.var`.
	 * @param ctx the parse tree
	 */
	enterVar_exp?: (ctx: Var_expContext) => void;
	/**
	 * Exit a parse tree produced by the `var_exp`
	 * labeled alternative in `LuaParser.var`.
	 * @param ctx the parse tree
	 */
	exitVar_exp?: (ctx: Var_expContext) => void;
	/**
	 * Enter a parse tree produced by the `prefixexp_name`
	 * labeled alternative in `LuaParser.prefixexp`.
	 * @param ctx the parse tree
	 */
	enterPrefixexp_name?: (ctx: Prefixexp_nameContext) => void;
	/**
	 * Exit a parse tree produced by the `prefixexp_name`
	 * labeled alternative in `LuaParser.prefixexp`.
	 * @param ctx the parse tree
	 */
	exitPrefixexp_name?: (ctx: Prefixexp_nameContext) => void;
	/**
	 * Enter a parse tree produced by the `prefixexp_function_call`
	 * labeled alternative in `LuaParser.prefixexp`.
	 * @param ctx the parse tree
	 */
	enterPrefixexp_function_call?: (ctx: Prefixexp_function_callContext) => void;
	/**
	 * Exit a parse tree produced by the `prefixexp_function_call`
	 * labeled alternative in `LuaParser.prefixexp`.
	 * @param ctx the parse tree
	 */
	exitPrefixexp_function_call?: (ctx: Prefixexp_function_callContext) => void;
	/**
	 * Enter a parse tree produced by the `prefixexp_exp`
	 * labeled alternative in `LuaParser.prefixexp`.
	 * @param ctx the parse tree
	 */
	enterPrefixexp_exp?: (ctx: Prefixexp_expContext) => void;
	/**
	 * Exit a parse tree produced by the `prefixexp_exp`
	 * labeled alternative in `LuaParser.prefixexp`.
	 * @param ctx the parse tree
	 */
	exitPrefixexp_exp?: (ctx: Prefixexp_expContext) => void;
	/**
	 * Enter a parse tree produced by the `fcall_name`
	 * labeled alternative in `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 */
	enterFcall_name?: (ctx: Fcall_nameContext) => void;
	/**
	 * Exit a parse tree produced by the `fcall_name`
	 * labeled alternative in `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 */
	exitFcall_name?: (ctx: Fcall_nameContext) => void;
	/**
	 * Enter a parse tree produced by the `fcall_name_ext`
	 * labeled alternative in `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 */
	enterFcall_name_ext?: (ctx: Fcall_name_extContext) => void;
	/**
	 * Exit a parse tree produced by the `fcall_name_ext`
	 * labeled alternative in `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 */
	exitFcall_name_ext?: (ctx: Fcall_name_extContext) => void;
	/**
	 * Enter a parse tree produced by the `fcall_function_call`
	 * labeled alternative in `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 */
	enterFcall_function_call?: (ctx: Fcall_function_callContext) => void;
	/**
	 * Exit a parse tree produced by the `fcall_function_call`
	 * labeled alternative in `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 */
	exitFcall_function_call?: (ctx: Fcall_function_callContext) => void;
	/**
	 * Enter a parse tree produced by the `fcall_exp`
	 * labeled alternative in `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 */
	enterFcall_exp?: (ctx: Fcall_expContext) => void;
	/**
	 * Exit a parse tree produced by the `fcall_exp`
	 * labeled alternative in `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 */
	exitFcall_exp?: (ctx: Fcall_expContext) => void;
	/**
	 * Enter a parse tree produced by the `fcall_exp_ext`
	 * labeled alternative in `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 */
	enterFcall_exp_ext?: (ctx: Fcall_exp_extContext) => void;
	/**
	 * Exit a parse tree produced by the `fcall_exp_ext`
	 * labeled alternative in `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 */
	exitFcall_exp_ext?: (ctx: Fcall_exp_extContext) => void;
	/**
	 * Enter a parse tree produced by the `fcall_function_call_ext`
	 * labeled alternative in `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 */
	enterFcall_function_call_ext?: (ctx: Fcall_function_call_extContext) => void;
	/**
	 * Exit a parse tree produced by the `fcall_function_call_ext`
	 * labeled alternative in `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 */
	exitFcall_function_call_ext?: (ctx: Fcall_function_call_extContext) => void;
	/**
	 * Enter a parse tree produced by the `args_exp_list`
	 * labeled alternative in `LuaParser.args`.
	 * @param ctx the parse tree
	 */
	enterArgs_exp_list?: (ctx: Args_exp_listContext) => void;
	/**
	 * Exit a parse tree produced by the `args_exp_list`
	 * labeled alternative in `LuaParser.args`.
	 * @param ctx the parse tree
	 */
	exitArgs_exp_list?: (ctx: Args_exp_listContext) => void;
	/**
	 * Enter a parse tree produced by the `args_table_constructor`
	 * labeled alternative in `LuaParser.args`.
	 * @param ctx the parse tree
	 */
	enterArgs_table_constructor?: (ctx: Args_table_constructorContext) => void;
	/**
	 * Exit a parse tree produced by the `args_table_constructor`
	 * labeled alternative in `LuaParser.args`.
	 * @param ctx the parse tree
	 */
	exitArgs_table_constructor?: (ctx: Args_table_constructorContext) => void;
	/**
	 * Enter a parse tree produced by the `args_string`
	 * labeled alternative in `LuaParser.args`.
	 * @param ctx the parse tree
	 */
	enterArgs_string?: (ctx: Args_stringContext) => void;
	/**
	 * Exit a parse tree produced by the `args_string`
	 * labeled alternative in `LuaParser.args`.
	 * @param ctx the parse tree
	 */
	exitArgs_string?: (ctx: Args_stringContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.functiondef`.
	 * @param ctx the parse tree
	 */
	enterFunctiondef?: (ctx: FunctiondefContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.functiondef`.
	 * @param ctx the parse tree
	 */
	exitFunctiondef?: (ctx: FunctiondefContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.funcbody`.
	 * @param ctx the parse tree
	 */
	enterFuncbody?: (ctx: FuncbodyContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.funcbody`.
	 * @param ctx the parse tree
	 */
	exitFuncbody?: (ctx: FuncbodyContext) => void;
	/**
	 * Enter a parse tree produced by the `parlist_namellist`
	 * labeled alternative in `LuaParser.parlist`.
	 * @param ctx the parse tree
	 */
	enterParlist_namellist?: (ctx: Parlist_namellistContext) => void;
	/**
	 * Exit a parse tree produced by the `parlist_namellist`
	 * labeled alternative in `LuaParser.parlist`.
	 * @param ctx the parse tree
	 */
	exitParlist_namellist?: (ctx: Parlist_namellistContext) => void;
	/**
	 * Enter a parse tree produced by the `parlist_vararg`
	 * labeled alternative in `LuaParser.parlist`.
	 * @param ctx the parse tree
	 */
	enterParlist_vararg?: (ctx: Parlist_varargContext) => void;
	/**
	 * Exit a parse tree produced by the `parlist_vararg`
	 * labeled alternative in `LuaParser.parlist`.
	 * @param ctx the parse tree
	 */
	exitParlist_vararg?: (ctx: Parlist_varargContext) => void;
	/**
	 * Enter a parse tree produced by the `parlist_none`
	 * labeled alternative in `LuaParser.parlist`.
	 * @param ctx the parse tree
	 */
	enterParlist_none?: (ctx: Parlist_noneContext) => void;
	/**
	 * Exit a parse tree produced by the `parlist_none`
	 * labeled alternative in `LuaParser.parlist`.
	 * @param ctx the parse tree
	 */
	exitParlist_none?: (ctx: Parlist_noneContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.tableconstructor`.
	 * @param ctx the parse tree
	 */
	enterTableconstructor?: (ctx: TableconstructorContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.tableconstructor`.
	 * @param ctx the parse tree
	 */
	exitTableconstructor?: (ctx: TableconstructorContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.fieldlist`.
	 * @param ctx the parse tree
	 */
	enterFieldlist?: (ctx: FieldlistContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.fieldlist`.
	 * @param ctx the parse tree
	 */
	exitFieldlist?: (ctx: FieldlistContext) => void;
	/**
	 * Enter a parse tree produced by the `field_exp_exp`
	 * labeled alternative in `LuaParser.field`.
	 * @param ctx the parse tree
	 */
	enterField_exp_exp?: (ctx: Field_exp_expContext) => void;
	/**
	 * Exit a parse tree produced by the `field_exp_exp`
	 * labeled alternative in `LuaParser.field`.
	 * @param ctx the parse tree
	 */
	exitField_exp_exp?: (ctx: Field_exp_expContext) => void;
	/**
	 * Enter a parse tree produced by the `field_name_exp`
	 * labeled alternative in `LuaParser.field`.
	 * @param ctx the parse tree
	 */
	enterField_name_exp?: (ctx: Field_name_expContext) => void;
	/**
	 * Exit a parse tree produced by the `field_name_exp`
	 * labeled alternative in `LuaParser.field`.
	 * @param ctx the parse tree
	 */
	exitField_name_exp?: (ctx: Field_name_expContext) => void;
	/**
	 * Enter a parse tree produced by the `field_exp`
	 * labeled alternative in `LuaParser.field`.
	 * @param ctx the parse tree
	 */
	enterField_exp?: (ctx: Field_expContext) => void;
	/**
	 * Exit a parse tree produced by the `field_exp`
	 * labeled alternative in `LuaParser.field`.
	 * @param ctx the parse tree
	 */
	exitField_exp?: (ctx: Field_expContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.fieldsep`.
	 * @param ctx the parse tree
	 */
	enterFieldsep?: (ctx: FieldsepContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.fieldsep`.
	 * @param ctx the parse tree
	 */
	exitFieldsep?: (ctx: FieldsepContext) => void;
	/**
	 * Enter a parse tree produced by the `number_int`
	 * labeled alternative in `LuaParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber_int?: (ctx: Number_intContext) => void;
	/**
	 * Exit a parse tree produced by the `number_int`
	 * labeled alternative in `LuaParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber_int?: (ctx: Number_intContext) => void;
	/**
	 * Enter a parse tree produced by the `number_hex`
	 * labeled alternative in `LuaParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber_hex?: (ctx: Number_hexContext) => void;
	/**
	 * Exit a parse tree produced by the `number_hex`
	 * labeled alternative in `LuaParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber_hex?: (ctx: Number_hexContext) => void;
	/**
	 * Enter a parse tree produced by the `number_float`
	 * labeled alternative in `LuaParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber_float?: (ctx: Number_floatContext) => void;
	/**
	 * Exit a parse tree produced by the `number_float`
	 * labeled alternative in `LuaParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber_float?: (ctx: Number_floatContext) => void;
	/**
	 * Enter a parse tree produced by the `number_hex_float`
	 * labeled alternative in `LuaParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber_hex_float?: (ctx: Number_hex_floatContext) => void;
	/**
	 * Exit a parse tree produced by the `number_hex_float`
	 * labeled alternative in `LuaParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber_hex_float?: (ctx: Number_hex_floatContext) => void;
	/**
	 * Enter a parse tree produced by the `string_string`
	 * labeled alternative in `LuaParser.string`.
	 * @param ctx the parse tree
	 */
	enterString_string?: (ctx: String_stringContext) => void;
	/**
	 * Exit a parse tree produced by the `string_string`
	 * labeled alternative in `LuaParser.string`.
	 * @param ctx the parse tree
	 */
	exitString_string?: (ctx: String_stringContext) => void;
	/**
	 * Enter a parse tree produced by the `string_charstring`
	 * labeled alternative in `LuaParser.string`.
	 * @param ctx the parse tree
	 */
	enterString_charstring?: (ctx: String_charstringContext) => void;
	/**
	 * Exit a parse tree produced by the `string_charstring`
	 * labeled alternative in `LuaParser.string`.
	 * @param ctx the parse tree
	 */
	exitString_charstring?: (ctx: String_charstringContext) => void;
	/**
	 * Enter a parse tree produced by the `string_longstring`
	 * labeled alternative in `LuaParser.string`.
	 * @param ctx the parse tree
	 */
	enterString_longstring?: (ctx: String_longstringContext) => void;
	/**
	 * Exit a parse tree produced by the `string_longstring`
	 * labeled alternative in `LuaParser.string`.
	 * @param ctx the parse tree
	 */
	exitString_longstring?: (ctx: String_longstringContext) => void;
}

