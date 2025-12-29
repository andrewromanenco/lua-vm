/*

MIT license

Author: Ken Domino, October 2023

Based on previous work of: Kazunori Sakamoto, Alexander Alexeev

*/

// $antlr-format alignTrailingComments true, columnLimit 150, minEmptyLines 1, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine false, allowShortBlocksOnASingleLine true, alignSemicolons hanging, alignColons hanging

parser grammar LuaParser;

options {
    tokenVocab = LuaLexer;
}

start_
    : chunk EOF
    ;

chunk
    : block
    ;

block
    : stat* retstat?
    ;

stat
    : ';' #stat_no_op
    | varlist '=' explist # stat_assing_vars
    | functioncall # stat_function_call
    | label # stat_label
    | 'break' # stat_break
    | 'goto' NAME #stat_goto
    | 'do' block 'end' #stat_do
    | 'while' exp 'do' block 'end' # stat_while
    | 'repeat' block 'until' exp # stat_repeat
    | 'if' exp 'then' block ('elseif' exp 'then' block)* ('else' block)? 'end' #stat_if
    | 'for' NAME '=' exp ',' exp (',' exp)? 'do' block 'end' #stat_for_var
    | 'for' namelist 'in' explist 'do' block 'end' # stat_for_list
    | 'function' funcname funcbody # stat_function
    | 'local' 'function' NAME funcbody # stat_local_function
    | 'local' attnamelist ('=' explist)? # stat_local_attnamelist
    ;

attnamelist
    : NAME attrib (',' NAME attrib)*
    ;

attrib
    : ('<' NAME '>')?
    ;

retstat
    : 'return' explist? ';'?
    ;

label
    : '::' NAME '::'
    ;

funcname
    : NAME ('.' NAME)* (':' NAME)?
    ;

varlist
    : var (',' var)*
    ;

namelist
    : NAME (',' NAME)*
    ;

explist
    : exp (',' exp)*
    ;

exp
    : 'nil' # exp_nil
    | 'false' # exp_false
    | 'true' # exp_true
    | number # exp_number
    | string # exp_string
    | '...' # exp_vararg
    | functiondef # exp_function_def
    | prefixexp # stat_prefix_exp
    | tableconstructor #stat_table_construnctor
    | <assoc = right> exp ('^') exp # exp_exponent
    | ('not' | '#' | '-' | '~') exp # exp_unary
    | exp ('*' | '/' | '%' | '//') exp # exp_arithmetic_high
    | exp ('+' | '-') exp # exp_arithmetic_low
    | <assoc = right> exp ('..') exp # exp_concat
    | exp ('<' | '>' | '<=' | '>=' | '~=' | '==') exp # exp_rel
    | exp ('and') exp # exp_and
    | exp ('or') exp # exp_or
    | exp ('&' | '|' | '~' | '<<' | '>>') exp # exp_bits
    ;

// var ::=  Name | prefixexp '[' exp ']' | prefixexp '.' Name 
var
    : NAME # var_name
    | prefixexp ('[' exp ']' | '.' NAME) # var_exp
    ;

// prefixexp ::= var | functioncall | '(' exp ')'
prefixexp
    : NAME ('[' exp ']' | '.' NAME)* # prefixexp_name
    | functioncall ('[' exp ']' | '.' NAME)* # prefixexp_function_call
    | '(' exp ')' ('[' exp ']' | '.' NAME)* # prefixexp_exp
    ;

// functioncall ::=  prefixexp args | prefixexp ':' Name args;
functioncall
    : NAME ('[' exp ']' | '.' NAME)* args # fcall_name
    | functioncall ('[' exp ']' | '.' NAME)* args # fcall_function_call
    | '(' exp ')' ('[' exp ']' | '.' NAME)* args # fcall_exp
    | NAME ('[' exp ']' | '.' NAME)* ':' NAME args # fcall_name_ext
    | functioncall ('[' exp ']' | '.' NAME)* ':' NAME args # fcall_function_call_ext
    | '(' exp ')' ('[' exp ']' | '.' NAME)* ':' NAME args # fcall_exp_ext
    ;

args
    : '(' explist? ')' # args_exp_list
    | tableconstructor # args_table_constructor
    | string # args_string
    ;

functiondef
    : 'function' funcbody
    ;

funcbody
    : '(' parlist ')' block 'end'
    ;

/* lparser.c says "is 'parlist' not empty?"
 * That code does so by checking la(1) == ')'.
 * This means that parlist can derive empty.
 */
parlist
    : namelist (',' '...')? # parlist_namellist
    | '...' # parlist_vararg
    | # parlist_none
    ;

tableconstructor
    : '{' fieldlist? '}'
    ;

fieldlist
    : field (fieldsep field)* fieldsep?
    ;

field
    : '[' exp ']' '=' exp # field_exp_exp
    | NAME '=' exp # field_name_exp
    | exp # field_exp
    ;

fieldsep
    : ','
    | ';'
    ;

number
    : INT # number_int
    | HEX # number_hex
    | FLOAT # number_float
    | HEX_FLOAT # number_hex_float
    ;

string
    : NORMALSTRING # string_string
    | CHARSTRING # string_charstring
    | LONGSTRING # string_longstring
    ;
