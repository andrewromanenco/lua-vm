// Generated from LuaParser.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import LuaParserListener from "./LuaParserListener.js";
import LuaParserVisitor from "./LuaParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class LuaParser extends Parser {
	public static readonly SEMI = 1;
	public static readonly EQ = 2;
	public static readonly BREAK = 3;
	public static readonly GOTO = 4;
	public static readonly DO = 5;
	public static readonly END = 6;
	public static readonly WHILE = 7;
	public static readonly REPEAT = 8;
	public static readonly UNTIL = 9;
	public static readonly IF = 10;
	public static readonly THEN = 11;
	public static readonly ELSEIF = 12;
	public static readonly ELSE = 13;
	public static readonly FOR = 14;
	public static readonly COMMA = 15;
	public static readonly IN = 16;
	public static readonly FUNCTION = 17;
	public static readonly LOCAL = 18;
	public static readonly LT = 19;
	public static readonly GT = 20;
	public static readonly RETURN = 21;
	public static readonly CC = 22;
	public static readonly NIL = 23;
	public static readonly FALSE = 24;
	public static readonly TRUE = 25;
	public static readonly DOT = 26;
	public static readonly SQUIG = 27;
	public static readonly MINUS = 28;
	public static readonly POUND = 29;
	public static readonly OP = 30;
	public static readonly CP = 31;
	public static readonly NOT = 32;
	public static readonly LL = 33;
	public static readonly GG = 34;
	public static readonly AMP = 35;
	public static readonly SS = 36;
	public static readonly PER = 37;
	public static readonly COL = 38;
	public static readonly LE = 39;
	public static readonly GE = 40;
	public static readonly AND = 41;
	public static readonly OR = 42;
	public static readonly PLUS = 43;
	public static readonly STAR = 44;
	public static readonly OCU = 45;
	public static readonly CCU = 46;
	public static readonly OB = 47;
	public static readonly CB = 48;
	public static readonly EE = 49;
	public static readonly DD = 50;
	public static readonly PIPE = 51;
	public static readonly CARET = 52;
	public static readonly SLASH = 53;
	public static readonly DDD = 54;
	public static readonly SQEQ = 55;
	public static readonly NAME = 56;
	public static readonly NORMALSTRING = 57;
	public static readonly CHARSTRING = 58;
	public static readonly LONGSTRING = 59;
	public static readonly INT = 60;
	public static readonly HEX = 61;
	public static readonly FLOAT = 62;
	public static readonly HEX_FLOAT = 63;
	public static readonly COMMENT = 64;
	public static readonly WS = 65;
	public static readonly NL = 66;
	public static readonly SHEBANG = 67;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_start_ = 0;
	public static readonly RULE_chunk = 1;
	public static readonly RULE_block = 2;
	public static readonly RULE_stat = 3;
	public static readonly RULE_attnamelist = 4;
	public static readonly RULE_attrib = 5;
	public static readonly RULE_retstat = 6;
	public static readonly RULE_label = 7;
	public static readonly RULE_funcname = 8;
	public static readonly RULE_varlist = 9;
	public static readonly RULE_namelist = 10;
	public static readonly RULE_explist = 11;
	public static readonly RULE_exp = 12;
	public static readonly RULE_var = 13;
	public static readonly RULE_prefixexp = 14;
	public static readonly RULE_functioncall = 15;
	public static readonly RULE_args = 16;
	public static readonly RULE_functiondef = 17;
	public static readonly RULE_funcbody = 18;
	public static readonly RULE_parlist = 19;
	public static readonly RULE_tableconstructor = 20;
	public static readonly RULE_fieldlist = 21;
	public static readonly RULE_field = 22;
	public static readonly RULE_fieldsep = 23;
	public static readonly RULE_number = 24;
	public static readonly RULE_string = 25;
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "'='", "'break'", 
                                                            "'goto'", "'do'", 
                                                            "'end'", "'while'", 
                                                            "'repeat'", 
                                                            "'until'", "'if'", 
                                                            "'then'", "'elseif'", 
                                                            "'else'", "'for'", 
                                                            "','", "'in'", 
                                                            "'function'", 
                                                            "'local'", "'<'", 
                                                            "'>'", "'return'", 
                                                            "'::'", "'nil'", 
                                                            "'false'", "'true'", 
                                                            "'.'", "'~'", 
                                                            "'-'", "'#'", 
                                                            "'('", "')'", 
                                                            "'not'", "'<<'", 
                                                            "'>>'", "'&'", 
                                                            "'//'", "'%'", 
                                                            "':'", "'<='", 
                                                            "'>='", "'and'", 
                                                            "'or'", "'+'", 
                                                            "'*'", "'{'", 
                                                            "'}'", "'['", 
                                                            "']'", "'=='", 
                                                            "'..'", "'|'", 
                                                            "'^'", "'/'", 
                                                            "'...'", "'~='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "SEMI", 
                                                             "EQ", "BREAK", 
                                                             "GOTO", "DO", 
                                                             "END", "WHILE", 
                                                             "REPEAT", "UNTIL", 
                                                             "IF", "THEN", 
                                                             "ELSEIF", "ELSE", 
                                                             "FOR", "COMMA", 
                                                             "IN", "FUNCTION", 
                                                             "LOCAL", "LT", 
                                                             "GT", "RETURN", 
                                                             "CC", "NIL", 
                                                             "FALSE", "TRUE", 
                                                             "DOT", "SQUIG", 
                                                             "MINUS", "POUND", 
                                                             "OP", "CP", 
                                                             "NOT", "LL", 
                                                             "GG", "AMP", 
                                                             "SS", "PER", 
                                                             "COL", "LE", 
                                                             "GE", "AND", 
                                                             "OR", "PLUS", 
                                                             "STAR", "OCU", 
                                                             "CCU", "OB", 
                                                             "CB", "EE", 
                                                             "DD", "PIPE", 
                                                             "CARET", "SLASH", 
                                                             "DDD", "SQEQ", 
                                                             "NAME", "NORMALSTRING", 
                                                             "CHARSTRING", 
                                                             "LONGSTRING", 
                                                             "INT", "HEX", 
                                                             "FLOAT", "HEX_FLOAT", 
                                                             "COMMENT", 
                                                             "WS", "NL", 
                                                             "SHEBANG" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start_", "chunk", "block", "stat", "attnamelist", "attrib", "retstat", 
		"label", "funcname", "varlist", "namelist", "explist", "exp", "var", "prefixexp", 
		"functioncall", "args", "functiondef", "funcbody", "parlist", "tableconstructor", 
		"fieldlist", "field", "fieldsep", "number", "string",
	];
	public get grammarFileName(): string { return "LuaParser.g4"; }
	public get literalNames(): (string | null)[] { return LuaParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return LuaParser.symbolicNames; }
	public get ruleNames(): string[] { return LuaParser.ruleNames; }
	public get serializedATN(): number[] { return LuaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, LuaParser._ATN, LuaParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public start_(): Start_Context {
		let localctx: Start_Context = new Start_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 0, LuaParser.RULE_start_);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 52;
			this.chunk();
			this.state = 53;
			this.match(LuaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public chunk(): ChunkContext {
		let localctx: ChunkContext = new ChunkContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, LuaParser.RULE_chunk);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 55;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, LuaParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1078347194) !== 0) || _la===56) {
				{
				{
				this.state = 57;
				this.stat();
				}
				}
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===21) {
				{
				this.state = 63;
				this.retstat();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stat(): StatContext {
		let localctx: StatContext = new StatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, LuaParser.RULE_stat);
		let _la: number;
		try {
			this.state = 147;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				localctx = new Stat_no_opContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 66;
				this.match(LuaParser.SEMI);
				}
				break;
			case 2:
				localctx = new Stat_assing_varsContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 67;
				this.varlist();
				this.state = 68;
				this.match(LuaParser.EQ);
				this.state = 69;
				this.explist();
				}
				break;
			case 3:
				localctx = new Stat_function_callContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 71;
				this.functioncall(0);
				}
				break;
			case 4:
				localctx = new Stat_labelContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 72;
				this.label();
				}
				break;
			case 5:
				localctx = new Stat_breakContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 73;
				this.match(LuaParser.BREAK);
				}
				break;
			case 6:
				localctx = new Stat_gotoContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 74;
				this.match(LuaParser.GOTO);
				this.state = 75;
				this.match(LuaParser.NAME);
				}
				break;
			case 7:
				localctx = new Stat_doContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 76;
				this.match(LuaParser.DO);
				this.state = 77;
				this.block();
				this.state = 78;
				this.match(LuaParser.END);
				}
				break;
			case 8:
				localctx = new Stat_whileContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 80;
				this.match(LuaParser.WHILE);
				this.state = 81;
				this.exp(0);
				this.state = 82;
				this.match(LuaParser.DO);
				this.state = 83;
				this.block();
				this.state = 84;
				this.match(LuaParser.END);
				}
				break;
			case 9:
				localctx = new Stat_repeatContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 86;
				this.match(LuaParser.REPEAT);
				this.state = 87;
				this.block();
				this.state = 88;
				this.match(LuaParser.UNTIL);
				this.state = 89;
				this.exp(0);
				}
				break;
			case 10:
				localctx = new Stat_ifContext(this, localctx);
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 91;
				this.match(LuaParser.IF);
				this.state = 92;
				this.exp(0);
				this.state = 93;
				this.match(LuaParser.THEN);
				this.state = 94;
				this.block();
				this.state = 102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===12) {
					{
					{
					this.state = 95;
					this.match(LuaParser.ELSEIF);
					this.state = 96;
					this.exp(0);
					this.state = 97;
					this.match(LuaParser.THEN);
					this.state = 98;
					this.block();
					}
					}
					this.state = 104;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===13) {
					{
					this.state = 105;
					this.match(LuaParser.ELSE);
					this.state = 106;
					this.block();
					}
				}

				this.state = 109;
				this.match(LuaParser.END);
				}
				break;
			case 11:
				localctx = new Stat_for_varContext(this, localctx);
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 111;
				this.match(LuaParser.FOR);
				this.state = 112;
				this.match(LuaParser.NAME);
				this.state = 113;
				this.match(LuaParser.EQ);
				this.state = 114;
				this.exp(0);
				this.state = 115;
				this.match(LuaParser.COMMA);
				this.state = 116;
				this.exp(0);
				this.state = 119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===15) {
					{
					this.state = 117;
					this.match(LuaParser.COMMA);
					this.state = 118;
					this.exp(0);
					}
				}

				this.state = 121;
				this.match(LuaParser.DO);
				this.state = 122;
				this.block();
				this.state = 123;
				this.match(LuaParser.END);
				}
				break;
			case 12:
				localctx = new Stat_for_listContext(this, localctx);
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 125;
				this.match(LuaParser.FOR);
				this.state = 126;
				this.namelist();
				this.state = 127;
				this.match(LuaParser.IN);
				this.state = 128;
				this.explist();
				this.state = 129;
				this.match(LuaParser.DO);
				this.state = 130;
				this.block();
				this.state = 131;
				this.match(LuaParser.END);
				}
				break;
			case 13:
				localctx = new Stat_functionContext(this, localctx);
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 133;
				this.match(LuaParser.FUNCTION);
				this.state = 134;
				this.funcname();
				this.state = 135;
				this.funcbody();
				}
				break;
			case 14:
				localctx = new Stat_local_functionContext(this, localctx);
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 137;
				this.match(LuaParser.LOCAL);
				this.state = 138;
				this.match(LuaParser.FUNCTION);
				this.state = 139;
				this.match(LuaParser.NAME);
				this.state = 140;
				this.funcbody();
				}
				break;
			case 15:
				localctx = new Stat_local_attnamelistContext(this, localctx);
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 141;
				this.match(LuaParser.LOCAL);
				this.state = 142;
				this.attnamelist();
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 143;
					this.match(LuaParser.EQ);
					this.state = 144;
					this.explist();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attnamelist(): AttnamelistContext {
		let localctx: AttnamelistContext = new AttnamelistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, LuaParser.RULE_attnamelist);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 149;
			this.match(LuaParser.NAME);
			this.state = 150;
			this.attrib();
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15) {
				{
				{
				this.state = 151;
				this.match(LuaParser.COMMA);
				this.state = 152;
				this.match(LuaParser.NAME);
				this.state = 153;
				this.attrib();
				}
				}
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attrib(): AttribContext {
		let localctx: AttribContext = new AttribContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, LuaParser.RULE_attrib);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 159;
				this.match(LuaParser.LT);
				this.state = 160;
				this.match(LuaParser.NAME);
				this.state = 161;
				this.match(LuaParser.GT);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public retstat(): RetstatContext {
		let localctx: RetstatContext = new RetstatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, LuaParser.RULE_retstat);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 164;
			this.match(LuaParser.RETURN);
			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2072117248) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4282392577) !== 0)) {
				{
				this.state = 165;
				this.explist();
				}
			}

			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 168;
				this.match(LuaParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public label(): LabelContext {
		let localctx: LabelContext = new LabelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, LuaParser.RULE_label);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 171;
			this.match(LuaParser.CC);
			this.state = 172;
			this.match(LuaParser.NAME);
			this.state = 173;
			this.match(LuaParser.CC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public funcname(): FuncnameContext {
		let localctx: FuncnameContext = new FuncnameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, LuaParser.RULE_funcname);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 175;
			this.match(LuaParser.NAME);
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===26) {
				{
				{
				this.state = 176;
				this.match(LuaParser.DOT);
				this.state = 177;
				this.match(LuaParser.NAME);
				}
				}
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===38) {
				{
				this.state = 183;
				this.match(LuaParser.COL);
				this.state = 184;
				this.match(LuaParser.NAME);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varlist(): VarlistContext {
		let localctx: VarlistContext = new VarlistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, LuaParser.RULE_varlist);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 187;
			this.var_();
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15) {
				{
				{
				this.state = 188;
				this.match(LuaParser.COMMA);
				this.state = 189;
				this.var_();
				}
				}
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public namelist(): NamelistContext {
		let localctx: NamelistContext = new NamelistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, LuaParser.RULE_namelist);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 195;
			this.match(LuaParser.NAME);
			this.state = 200;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 196;
					this.match(LuaParser.COMMA);
					this.state = 197;
					this.match(LuaParser.NAME);
					}
					}
				}
				this.state = 202;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public explist(): ExplistContext {
		let localctx: ExplistContext = new ExplistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, LuaParser.RULE_explist);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 203;
			this.exp(0);
			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15) {
				{
				{
				this.state = 204;
				this.match(LuaParser.COMMA);
				this.state = 205;
				this.exp(0);
				}
				}
				this.state = 210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public exp(): ExpContext;
	public exp(_p: number): ExpContext;
	// @RuleVersion(0)
	public exp(_p?: number): ExpContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpContext = new ExpContext(this, this._ctx, _parentState);
		let _prevctx: ExpContext = localctx;
		let _startState: number = 24;
		this.enterRecursionRule(localctx, 24, LuaParser.RULE_exp, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 223;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 23:
				{
				localctx = new Exp_nilContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 212;
				this.match(LuaParser.NIL);
				}
				break;
			case 24:
				{
				localctx = new Exp_falseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 213;
				this.match(LuaParser.FALSE);
				}
				break;
			case 25:
				{
				localctx = new Exp_trueContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 214;
				this.match(LuaParser.TRUE);
				}
				break;
			case 60:
			case 61:
			case 62:
			case 63:
				{
				localctx = new Exp_numberContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 215;
				this.number_();
				}
				break;
			case 57:
			case 58:
			case 59:
				{
				localctx = new Exp_stringContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 216;
				this.string_();
				}
				break;
			case 54:
				{
				localctx = new Exp_varargContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 217;
				this.match(LuaParser.DDD);
				}
				break;
			case 17:
				{
				localctx = new Exp_function_defContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 218;
				this.functiondef();
				}
				break;
			case 30:
			case 56:
				{
				localctx = new Stat_prefix_expContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 219;
				this.prefixexp();
				}
				break;
			case 45:
				{
				localctx = new Stat_table_construnctorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 220;
				this.tableconstructor();
				}
				break;
			case 27:
			case 28:
			case 29:
			case 32:
				{
				localctx = new Exp_unaryContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 221;
				_la = this._input.LA(1);
				if(!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 39) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 222;
				this.exp(8);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 251;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 249;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
					case 1:
						{
						localctx = new Exp_exponentContext(this, new ExpContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 225;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						{
						this.state = 226;
						this.match(LuaParser.CARET);
						}
						this.state = 227;
						this.exp(9);
						}
						break;
					case 2:
						{
						localctx = new Exp_arithmetic_highContext(this, new ExpContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 228;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 229;
						_la = this._input.LA(1);
						if(!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 131331) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 230;
						this.exp(8);
						}
						break;
					case 3:
						{
						localctx = new Exp_arithmetic_lowContext(this, new ExpContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 231;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 232;
						_la = this._input.LA(1);
						if(!(_la===28 || _la===43)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 233;
						this.exp(7);
						}
						break;
					case 4:
						{
						localctx = new Exp_concatContext(this, new ExpContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 234;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						{
						this.state = 235;
						this.match(LuaParser.DD);
						}
						this.state = 236;
						this.exp(5);
						}
						break;
					case 5:
						{
						localctx = new Exp_relContext(this, new ExpContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 237;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 238;
						_la = this._input.LA(1);
						if(!(_la===19 || _la===20 || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 66563) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 239;
						this.exp(5);
						}
						break;
					case 6:
						{
						localctx = new Exp_andContext(this, new ExpContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 240;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						{
						this.state = 241;
						this.match(LuaParser.AND);
						}
						this.state = 242;
						this.exp(4);
						}
						break;
					case 7:
						{
						localctx = new Exp_orContext(this, new ExpContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 243;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						{
						this.state = 244;
						this.match(LuaParser.OR);
						}
						this.state = 245;
						this.exp(3);
						}
						break;
					case 8:
						{
						localctx = new Exp_bitsContext(this, new ExpContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 246;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 247;
						_la = this._input.LA(1);
						if(!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 16777665) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 248;
						this.exp(2);
						}
						break;
					}
					}
				}
				this.state = 253;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public var_(): VarContext {
		let localctx: VarContext = new VarContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, LuaParser.RULE_var);
		try {
			this.state = 264;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				localctx = new Var_nameContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 254;
				this.match(LuaParser.NAME);
				}
				break;
			case 2:
				localctx = new Var_expContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 255;
				this.prefixexp();
				this.state = 262;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 47:
					{
					this.state = 256;
					this.match(LuaParser.OB);
					this.state = 257;
					this.exp(0);
					this.state = 258;
					this.match(LuaParser.CB);
					}
					break;
				case 26:
					{
					this.state = 260;
					this.match(LuaParser.DOT);
					this.state = 261;
					this.match(LuaParser.NAME);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public prefixexp(): PrefixexpContext {
		let localctx: PrefixexpContext = new PrefixexpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, LuaParser.RULE_prefixexp);
		try {
			let _alt: number;
			this.state = 304;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				localctx = new Prefixexp_nameContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 266;
				this.match(LuaParser.NAME);
				this.state = 275;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 273;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 47:
							{
							this.state = 267;
							this.match(LuaParser.OB);
							this.state = 268;
							this.exp(0);
							this.state = 269;
							this.match(LuaParser.CB);
							}
							break;
						case 26:
							{
							this.state = 271;
							this.match(LuaParser.DOT);
							this.state = 272;
							this.match(LuaParser.NAME);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 277;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
				}
				}
				break;
			case 2:
				localctx = new Prefixexp_function_callContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 278;
				this.functioncall(0);
				this.state = 287;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 285;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 47:
							{
							this.state = 279;
							this.match(LuaParser.OB);
							this.state = 280;
							this.exp(0);
							this.state = 281;
							this.match(LuaParser.CB);
							}
							break;
						case 26:
							{
							this.state = 283;
							this.match(LuaParser.DOT);
							this.state = 284;
							this.match(LuaParser.NAME);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 289;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
				}
				}
				break;
			case 3:
				localctx = new Prefixexp_expContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 290;
				this.match(LuaParser.OP);
				this.state = 291;
				this.exp(0);
				this.state = 292;
				this.match(LuaParser.CP);
				this.state = 301;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 299;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 47:
							{
							this.state = 293;
							this.match(LuaParser.OB);
							this.state = 294;
							this.exp(0);
							this.state = 295;
							this.match(LuaParser.CB);
							}
							break;
						case 26:
							{
							this.state = 297;
							this.match(LuaParser.DOT);
							this.state = 298;
							this.match(LuaParser.NAME);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 303;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public functioncall(): FunctioncallContext;
	public functioncall(_p: number): FunctioncallContext;
	// @RuleVersion(0)
	public functioncall(_p?: number): FunctioncallContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: FunctioncallContext = new FunctioncallContext(this, this._ctx, _parentState);
		let _prevctx: FunctioncallContext = localctx;
		let _startState: number = 30;
		this.enterRecursionRule(localctx, 30, LuaParser.RULE_functioncall, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 369;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				localctx = new Fcall_nameContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 307;
				this.match(LuaParser.NAME);
				this.state = 316;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===26 || _la===47) {
					{
					this.state = 314;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 47:
						{
						this.state = 308;
						this.match(LuaParser.OB);
						this.state = 309;
						this.exp(0);
						this.state = 310;
						this.match(LuaParser.CB);
						}
						break;
					case 26:
						{
						this.state = 312;
						this.match(LuaParser.DOT);
						this.state = 313;
						this.match(LuaParser.NAME);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 318;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 319;
				this.args();
				}
				break;
			case 2:
				{
				localctx = new Fcall_expContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 320;
				this.match(LuaParser.OP);
				this.state = 321;
				this.exp(0);
				this.state = 322;
				this.match(LuaParser.CP);
				this.state = 331;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===26 || _la===47) {
					{
					this.state = 329;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 47:
						{
						this.state = 323;
						this.match(LuaParser.OB);
						this.state = 324;
						this.exp(0);
						this.state = 325;
						this.match(LuaParser.CB);
						}
						break;
					case 26:
						{
						this.state = 327;
						this.match(LuaParser.DOT);
						this.state = 328;
						this.match(LuaParser.NAME);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 333;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 334;
				this.args();
				}
				break;
			case 3:
				{
				localctx = new Fcall_name_extContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 336;
				this.match(LuaParser.NAME);
				this.state = 345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===26 || _la===47) {
					{
					this.state = 343;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 47:
						{
						this.state = 337;
						this.match(LuaParser.OB);
						this.state = 338;
						this.exp(0);
						this.state = 339;
						this.match(LuaParser.CB);
						}
						break;
					case 26:
						{
						this.state = 341;
						this.match(LuaParser.DOT);
						this.state = 342;
						this.match(LuaParser.NAME);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 347;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 348;
				this.match(LuaParser.COL);
				this.state = 349;
				this.match(LuaParser.NAME);
				this.state = 350;
				this.args();
				}
				break;
			case 4:
				{
				localctx = new Fcall_exp_extContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 351;
				this.match(LuaParser.OP);
				this.state = 352;
				this.exp(0);
				this.state = 353;
				this.match(LuaParser.CP);
				this.state = 362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===26 || _la===47) {
					{
					this.state = 360;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 47:
						{
						this.state = 354;
						this.match(LuaParser.OB);
						this.state = 355;
						this.exp(0);
						this.state = 356;
						this.match(LuaParser.CB);
						}
						break;
					case 26:
						{
						this.state = 358;
						this.match(LuaParser.DOT);
						this.state = 359;
						this.match(LuaParser.NAME);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 364;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 365;
				this.match(LuaParser.COL);
				this.state = 366;
				this.match(LuaParser.NAME);
				this.state = 367;
				this.args();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 401;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 399;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 41, this._ctx) ) {
					case 1:
						{
						localctx = new Fcall_function_callContext(this, new FunctioncallContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_functioncall);
						this.state = 371;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 380;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===26 || _la===47) {
							{
							this.state = 378;
							this._errHandler.sync(this);
							switch (this._input.LA(1)) {
							case 47:
								{
								this.state = 372;
								this.match(LuaParser.OB);
								this.state = 373;
								this.exp(0);
								this.state = 374;
								this.match(LuaParser.CB);
								}
								break;
							case 26:
								{
								this.state = 376;
								this.match(LuaParser.DOT);
								this.state = 377;
								this.match(LuaParser.NAME);
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							}
							this.state = 382;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 383;
						this.args();
						}
						break;
					case 2:
						{
						localctx = new Fcall_function_call_extContext(this, new FunctioncallContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_functioncall);
						this.state = 384;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 393;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===26 || _la===47) {
							{
							this.state = 391;
							this._errHandler.sync(this);
							switch (this._input.LA(1)) {
							case 47:
								{
								this.state = 385;
								this.match(LuaParser.OB);
								this.state = 386;
								this.exp(0);
								this.state = 387;
								this.match(LuaParser.CB);
								}
								break;
							case 26:
								{
								this.state = 389;
								this.match(LuaParser.DOT);
								this.state = 390;
								this.match(LuaParser.NAME);
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							}
							this.state = 395;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 396;
						this.match(LuaParser.COL);
						this.state = 397;
						this.match(LuaParser.NAME);
						this.state = 398;
						this.args();
						}
						break;
					}
					}
				}
				this.state = 403;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public args(): ArgsContext {
		let localctx: ArgsContext = new ArgsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, LuaParser.RULE_args);
		let _la: number;
		try {
			this.state = 411;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
				localctx = new Args_exp_listContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 404;
				this.match(LuaParser.OP);
				this.state = 406;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2072117248) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4282392577) !== 0)) {
					{
					this.state = 405;
					this.explist();
					}
				}

				this.state = 408;
				this.match(LuaParser.CP);
				}
				break;
			case 45:
				localctx = new Args_table_constructorContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 409;
				this.tableconstructor();
				}
				break;
			case 57:
			case 58:
			case 59:
				localctx = new Args_stringContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 410;
				this.string_();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functiondef(): FunctiondefContext {
		let localctx: FunctiondefContext = new FunctiondefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, LuaParser.RULE_functiondef);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 413;
			this.match(LuaParser.FUNCTION);
			this.state = 414;
			this.funcbody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public funcbody(): FuncbodyContext {
		let localctx: FuncbodyContext = new FuncbodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, LuaParser.RULE_funcbody);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 416;
			this.match(LuaParser.OP);
			this.state = 417;
			this.parlist();
			this.state = 418;
			this.match(LuaParser.CP);
			this.state = 419;
			this.block();
			this.state = 420;
			this.match(LuaParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parlist(): ParlistContext {
		let localctx: ParlistContext = new ParlistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, LuaParser.RULE_parlist);
		let _la: number;
		try {
			this.state = 429;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 56:
				localctx = new Parlist_namellistContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 422;
				this.namelist();
				this.state = 425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===15) {
					{
					this.state = 423;
					this.match(LuaParser.COMMA);
					this.state = 424;
					this.match(LuaParser.DDD);
					}
				}

				}
				break;
			case 54:
				localctx = new Parlist_varargContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 427;
				this.match(LuaParser.DDD);
				}
				break;
			case 31:
				localctx = new Parlist_noneContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tableconstructor(): TableconstructorContext {
		let localctx: TableconstructorContext = new TableconstructorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, LuaParser.RULE_tableconstructor);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 431;
			this.match(LuaParser.OCU);
			this.state = 433;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2072117248) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4282425345) !== 0)) {
				{
				this.state = 432;
				this.fieldlist();
				}
			}

			this.state = 435;
			this.match(LuaParser.CCU);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldlist(): FieldlistContext {
		let localctx: FieldlistContext = new FieldlistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, LuaParser.RULE_fieldlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 437;
			this.field();
			this.state = 443;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 438;
					this.fieldsep();
					this.state = 439;
					this.field();
					}
					}
				}
				this.state = 445;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 48, this._ctx);
			}
			this.state = 447;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===15) {
				{
				this.state = 446;
				this.fieldsep();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let localctx: FieldContext = new FieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, LuaParser.RULE_field);
		try {
			this.state = 459;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				localctx = new Field_exp_expContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 449;
				this.match(LuaParser.OB);
				this.state = 450;
				this.exp(0);
				this.state = 451;
				this.match(LuaParser.CB);
				this.state = 452;
				this.match(LuaParser.EQ);
				this.state = 453;
				this.exp(0);
				}
				break;
			case 2:
				localctx = new Field_name_expContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 455;
				this.match(LuaParser.NAME);
				this.state = 456;
				this.match(LuaParser.EQ);
				this.state = 457;
				this.exp(0);
				}
				break;
			case 3:
				localctx = new Field_expContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 458;
				this.exp(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldsep(): FieldsepContext {
		let localctx: FieldsepContext = new FieldsepContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, LuaParser.RULE_fieldsep);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 461;
			_la = this._input.LA(1);
			if(!(_la===1 || _la===15)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public number_(): NumberContext {
		let localctx: NumberContext = new NumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, LuaParser.RULE_number);
		try {
			this.state = 467;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 60:
				localctx = new Number_intContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 463;
				this.match(LuaParser.INT);
				}
				break;
			case 61:
				localctx = new Number_hexContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 464;
				this.match(LuaParser.HEX);
				}
				break;
			case 62:
				localctx = new Number_floatContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 465;
				this.match(LuaParser.FLOAT);
				}
				break;
			case 63:
				localctx = new Number_hex_floatContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 466;
				this.match(LuaParser.HEX_FLOAT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public string_(): StringContext {
		let localctx: StringContext = new StringContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, LuaParser.RULE_string);
		try {
			this.state = 472;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 57:
				localctx = new String_stringContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 469;
				this.match(LuaParser.NORMALSTRING);
				}
				break;
			case 58:
				localctx = new String_charstringContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 470;
				this.match(LuaParser.CHARSTRING);
				}
				break;
			case 59:
				localctx = new String_longstringContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 471;
				this.match(LuaParser.LONGSTRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 12:
			return this.exp_sempred(localctx as ExpContext, predIndex);
		case 15:
			return this.functioncall_sempred(localctx as FunctioncallContext, predIndex);
		}
		return true;
	}
	private exp_sempred(localctx: ExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);
		case 1:
			return this.precpred(this._ctx, 7);
		case 2:
			return this.precpred(this._ctx, 6);
		case 3:
			return this.precpred(this._ctx, 5);
		case 4:
			return this.precpred(this._ctx, 4);
		case 5:
			return this.precpred(this._ctx, 3);
		case 6:
			return this.precpred(this._ctx, 2);
		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private functioncall_sempred(localctx: FunctioncallContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 5);
		case 9:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,67,475,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,1,0,1,0,1,0,1,1,1,1,1,2,5,2,59,8,2,10,2,12,2,62,9,2,1,2,3,
	2,65,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
	3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
	3,5,3,101,8,3,10,3,12,3,104,9,3,1,3,1,3,3,3,108,8,3,1,3,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,3,3,120,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,146,8,3,3,3,
	148,8,3,1,4,1,4,1,4,1,4,1,4,5,4,155,8,4,10,4,12,4,158,9,4,1,5,1,5,1,5,3,
	5,163,8,5,1,6,1,6,3,6,167,8,6,1,6,3,6,170,8,6,1,7,1,7,1,7,1,7,1,8,1,8,1,
	8,5,8,179,8,8,10,8,12,8,182,9,8,1,8,1,8,3,8,186,8,8,1,9,1,9,1,9,5,9,191,
	8,9,10,9,12,9,194,9,9,1,10,1,10,1,10,5,10,199,8,10,10,10,12,10,202,9,10,
	1,11,1,11,1,11,5,11,207,8,11,10,11,12,11,210,9,11,1,12,1,12,1,12,1,12,1,
	12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,224,8,12,1,12,1,12,1,12,1,12,
	1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,
	12,1,12,1,12,1,12,1,12,1,12,5,12,250,8,12,10,12,12,12,253,9,12,1,13,1,13,
	1,13,1,13,1,13,1,13,1,13,1,13,3,13,263,8,13,3,13,265,8,13,1,14,1,14,1,14,
	1,14,1,14,1,14,1,14,5,14,274,8,14,10,14,12,14,277,9,14,1,14,1,14,1,14,1,
	14,1,14,1,14,1,14,5,14,286,8,14,10,14,12,14,289,9,14,1,14,1,14,1,14,1,14,
	1,14,1,14,1,14,1,14,1,14,5,14,300,8,14,10,14,12,14,303,9,14,3,14,305,8,
	14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,315,8,15,10,15,12,15,318,
	9,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,330,8,15,10,
	15,12,15,333,9,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,344,
	8,15,10,15,12,15,347,9,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
	1,15,1,15,1,15,5,15,361,8,15,10,15,12,15,364,9,15,1,15,1,15,1,15,1,15,3,
	15,370,8,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,379,8,15,10,15,12,15,
	382,9,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,392,8,15,10,15,12,
	15,395,9,15,1,15,1,15,1,15,5,15,400,8,15,10,15,12,15,403,9,15,1,16,1,16,
	3,16,407,8,16,1,16,1,16,1,16,3,16,412,8,16,1,17,1,17,1,17,1,18,1,18,1,18,
	1,18,1,18,1,18,1,19,1,19,1,19,3,19,426,8,19,1,19,1,19,3,19,430,8,19,1,20,
	1,20,3,20,434,8,20,1,20,1,20,1,21,1,21,1,21,1,21,5,21,442,8,21,10,21,12,
	21,445,9,21,1,21,3,21,448,8,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,
	1,22,1,22,3,22,460,8,22,1,23,1,23,1,24,1,24,1,24,1,24,3,24,468,8,24,1,25,
	1,25,1,25,3,25,473,8,25,1,25,0,2,24,30,26,0,2,4,6,8,10,12,14,16,18,20,22,
	24,26,28,30,32,34,36,38,40,42,44,46,48,50,0,6,2,0,27,29,32,32,3,0,36,37,
	44,44,53,53,2,0,28,28,43,43,4,0,19,20,39,40,49,49,55,55,3,0,27,27,33,35,
	51,51,2,0,1,1,15,15,537,0,52,1,0,0,0,2,55,1,0,0,0,4,60,1,0,0,0,6,147,1,
	0,0,0,8,149,1,0,0,0,10,162,1,0,0,0,12,164,1,0,0,0,14,171,1,0,0,0,16,175,
	1,0,0,0,18,187,1,0,0,0,20,195,1,0,0,0,22,203,1,0,0,0,24,223,1,0,0,0,26,
	264,1,0,0,0,28,304,1,0,0,0,30,369,1,0,0,0,32,411,1,0,0,0,34,413,1,0,0,0,
	36,416,1,0,0,0,38,429,1,0,0,0,40,431,1,0,0,0,42,437,1,0,0,0,44,459,1,0,
	0,0,46,461,1,0,0,0,48,467,1,0,0,0,50,472,1,0,0,0,52,53,3,2,1,0,53,54,5,
	0,0,1,54,1,1,0,0,0,55,56,3,4,2,0,56,3,1,0,0,0,57,59,3,6,3,0,58,57,1,0,0,
	0,59,62,1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,61,64,1,0,0,0,62,60,1,0,0,0,
	63,65,3,12,6,0,64,63,1,0,0,0,64,65,1,0,0,0,65,5,1,0,0,0,66,148,5,1,0,0,
	67,68,3,18,9,0,68,69,5,2,0,0,69,70,3,22,11,0,70,148,1,0,0,0,71,148,3,30,
	15,0,72,148,3,14,7,0,73,148,5,3,0,0,74,75,5,4,0,0,75,148,5,56,0,0,76,77,
	5,5,0,0,77,78,3,4,2,0,78,79,5,6,0,0,79,148,1,0,0,0,80,81,5,7,0,0,81,82,
	3,24,12,0,82,83,5,5,0,0,83,84,3,4,2,0,84,85,5,6,0,0,85,148,1,0,0,0,86,87,
	5,8,0,0,87,88,3,4,2,0,88,89,5,9,0,0,89,90,3,24,12,0,90,148,1,0,0,0,91,92,
	5,10,0,0,92,93,3,24,12,0,93,94,5,11,0,0,94,102,3,4,2,0,95,96,5,12,0,0,96,
	97,3,24,12,0,97,98,5,11,0,0,98,99,3,4,2,0,99,101,1,0,0,0,100,95,1,0,0,0,
	101,104,1,0,0,0,102,100,1,0,0,0,102,103,1,0,0,0,103,107,1,0,0,0,104,102,
	1,0,0,0,105,106,5,13,0,0,106,108,3,4,2,0,107,105,1,0,0,0,107,108,1,0,0,
	0,108,109,1,0,0,0,109,110,5,6,0,0,110,148,1,0,0,0,111,112,5,14,0,0,112,
	113,5,56,0,0,113,114,5,2,0,0,114,115,3,24,12,0,115,116,5,15,0,0,116,119,
	3,24,12,0,117,118,5,15,0,0,118,120,3,24,12,0,119,117,1,0,0,0,119,120,1,
	0,0,0,120,121,1,0,0,0,121,122,5,5,0,0,122,123,3,4,2,0,123,124,5,6,0,0,124,
	148,1,0,0,0,125,126,5,14,0,0,126,127,3,20,10,0,127,128,5,16,0,0,128,129,
	3,22,11,0,129,130,5,5,0,0,130,131,3,4,2,0,131,132,5,6,0,0,132,148,1,0,0,
	0,133,134,5,17,0,0,134,135,3,16,8,0,135,136,3,36,18,0,136,148,1,0,0,0,137,
	138,5,18,0,0,138,139,5,17,0,0,139,140,5,56,0,0,140,148,3,36,18,0,141,142,
	5,18,0,0,142,145,3,8,4,0,143,144,5,2,0,0,144,146,3,22,11,0,145,143,1,0,
	0,0,145,146,1,0,0,0,146,148,1,0,0,0,147,66,1,0,0,0,147,67,1,0,0,0,147,71,
	1,0,0,0,147,72,1,0,0,0,147,73,1,0,0,0,147,74,1,0,0,0,147,76,1,0,0,0,147,
	80,1,0,0,0,147,86,1,0,0,0,147,91,1,0,0,0,147,111,1,0,0,0,147,125,1,0,0,
	0,147,133,1,0,0,0,147,137,1,0,0,0,147,141,1,0,0,0,148,7,1,0,0,0,149,150,
	5,56,0,0,150,156,3,10,5,0,151,152,5,15,0,0,152,153,5,56,0,0,153,155,3,10,
	5,0,154,151,1,0,0,0,155,158,1,0,0,0,156,154,1,0,0,0,156,157,1,0,0,0,157,
	9,1,0,0,0,158,156,1,0,0,0,159,160,5,19,0,0,160,161,5,56,0,0,161,163,5,20,
	0,0,162,159,1,0,0,0,162,163,1,0,0,0,163,11,1,0,0,0,164,166,5,21,0,0,165,
	167,3,22,11,0,166,165,1,0,0,0,166,167,1,0,0,0,167,169,1,0,0,0,168,170,5,
	1,0,0,169,168,1,0,0,0,169,170,1,0,0,0,170,13,1,0,0,0,171,172,5,22,0,0,172,
	173,5,56,0,0,173,174,5,22,0,0,174,15,1,0,0,0,175,180,5,56,0,0,176,177,5,
	26,0,0,177,179,5,56,0,0,178,176,1,0,0,0,179,182,1,0,0,0,180,178,1,0,0,0,
	180,181,1,0,0,0,181,185,1,0,0,0,182,180,1,0,0,0,183,184,5,38,0,0,184,186,
	5,56,0,0,185,183,1,0,0,0,185,186,1,0,0,0,186,17,1,0,0,0,187,192,3,26,13,
	0,188,189,5,15,0,0,189,191,3,26,13,0,190,188,1,0,0,0,191,194,1,0,0,0,192,
	190,1,0,0,0,192,193,1,0,0,0,193,19,1,0,0,0,194,192,1,0,0,0,195,200,5,56,
	0,0,196,197,5,15,0,0,197,199,5,56,0,0,198,196,1,0,0,0,199,202,1,0,0,0,200,
	198,1,0,0,0,200,201,1,0,0,0,201,21,1,0,0,0,202,200,1,0,0,0,203,208,3,24,
	12,0,204,205,5,15,0,0,205,207,3,24,12,0,206,204,1,0,0,0,207,210,1,0,0,0,
	208,206,1,0,0,0,208,209,1,0,0,0,209,23,1,0,0,0,210,208,1,0,0,0,211,212,
	6,12,-1,0,212,224,5,23,0,0,213,224,5,24,0,0,214,224,5,25,0,0,215,224,3,
	48,24,0,216,224,3,50,25,0,217,224,5,54,0,0,218,224,3,34,17,0,219,224,3,
	28,14,0,220,224,3,40,20,0,221,222,7,0,0,0,222,224,3,24,12,8,223,211,1,0,
	0,0,223,213,1,0,0,0,223,214,1,0,0,0,223,215,1,0,0,0,223,216,1,0,0,0,223,
	217,1,0,0,0,223,218,1,0,0,0,223,219,1,0,0,0,223,220,1,0,0,0,223,221,1,0,
	0,0,224,251,1,0,0,0,225,226,10,9,0,0,226,227,5,52,0,0,227,250,3,24,12,9,
	228,229,10,7,0,0,229,230,7,1,0,0,230,250,3,24,12,8,231,232,10,6,0,0,232,
	233,7,2,0,0,233,250,3,24,12,7,234,235,10,5,0,0,235,236,5,50,0,0,236,250,
	3,24,12,5,237,238,10,4,0,0,238,239,7,3,0,0,239,250,3,24,12,5,240,241,10,
	3,0,0,241,242,5,41,0,0,242,250,3,24,12,4,243,244,10,2,0,0,244,245,5,42,
	0,0,245,250,3,24,12,3,246,247,10,1,0,0,247,248,7,4,0,0,248,250,3,24,12,
	2,249,225,1,0,0,0,249,228,1,0,0,0,249,231,1,0,0,0,249,234,1,0,0,0,249,237,
	1,0,0,0,249,240,1,0,0,0,249,243,1,0,0,0,249,246,1,0,0,0,250,253,1,0,0,0,
	251,249,1,0,0,0,251,252,1,0,0,0,252,25,1,0,0,0,253,251,1,0,0,0,254,265,
	5,56,0,0,255,262,3,28,14,0,256,257,5,47,0,0,257,258,3,24,12,0,258,259,5,
	48,0,0,259,263,1,0,0,0,260,261,5,26,0,0,261,263,5,56,0,0,262,256,1,0,0,
	0,262,260,1,0,0,0,263,265,1,0,0,0,264,254,1,0,0,0,264,255,1,0,0,0,265,27,
	1,0,0,0,266,275,5,56,0,0,267,268,5,47,0,0,268,269,3,24,12,0,269,270,5,48,
	0,0,270,274,1,0,0,0,271,272,5,26,0,0,272,274,5,56,0,0,273,267,1,0,0,0,273,
	271,1,0,0,0,274,277,1,0,0,0,275,273,1,0,0,0,275,276,1,0,0,0,276,305,1,0,
	0,0,277,275,1,0,0,0,278,287,3,30,15,0,279,280,5,47,0,0,280,281,3,24,12,
	0,281,282,5,48,0,0,282,286,1,0,0,0,283,284,5,26,0,0,284,286,5,56,0,0,285,
	279,1,0,0,0,285,283,1,0,0,0,286,289,1,0,0,0,287,285,1,0,0,0,287,288,1,0,
	0,0,288,305,1,0,0,0,289,287,1,0,0,0,290,291,5,30,0,0,291,292,3,24,12,0,
	292,301,5,31,0,0,293,294,5,47,0,0,294,295,3,24,12,0,295,296,5,48,0,0,296,
	300,1,0,0,0,297,298,5,26,0,0,298,300,5,56,0,0,299,293,1,0,0,0,299,297,1,
	0,0,0,300,303,1,0,0,0,301,299,1,0,0,0,301,302,1,0,0,0,302,305,1,0,0,0,303,
	301,1,0,0,0,304,266,1,0,0,0,304,278,1,0,0,0,304,290,1,0,0,0,305,29,1,0,
	0,0,306,307,6,15,-1,0,307,316,5,56,0,0,308,309,5,47,0,0,309,310,3,24,12,
	0,310,311,5,48,0,0,311,315,1,0,0,0,312,313,5,26,0,0,313,315,5,56,0,0,314,
	308,1,0,0,0,314,312,1,0,0,0,315,318,1,0,0,0,316,314,1,0,0,0,316,317,1,0,
	0,0,317,319,1,0,0,0,318,316,1,0,0,0,319,370,3,32,16,0,320,321,5,30,0,0,
	321,322,3,24,12,0,322,331,5,31,0,0,323,324,5,47,0,0,324,325,3,24,12,0,325,
	326,5,48,0,0,326,330,1,0,0,0,327,328,5,26,0,0,328,330,5,56,0,0,329,323,
	1,0,0,0,329,327,1,0,0,0,330,333,1,0,0,0,331,329,1,0,0,0,331,332,1,0,0,0,
	332,334,1,0,0,0,333,331,1,0,0,0,334,335,3,32,16,0,335,370,1,0,0,0,336,345,
	5,56,0,0,337,338,5,47,0,0,338,339,3,24,12,0,339,340,5,48,0,0,340,344,1,
	0,0,0,341,342,5,26,0,0,342,344,5,56,0,0,343,337,1,0,0,0,343,341,1,0,0,0,
	344,347,1,0,0,0,345,343,1,0,0,0,345,346,1,0,0,0,346,348,1,0,0,0,347,345,
	1,0,0,0,348,349,5,38,0,0,349,350,5,56,0,0,350,370,3,32,16,0,351,352,5,30,
	0,0,352,353,3,24,12,0,353,362,5,31,0,0,354,355,5,47,0,0,355,356,3,24,12,
	0,356,357,5,48,0,0,357,361,1,0,0,0,358,359,5,26,0,0,359,361,5,56,0,0,360,
	354,1,0,0,0,360,358,1,0,0,0,361,364,1,0,0,0,362,360,1,0,0,0,362,363,1,0,
	0,0,363,365,1,0,0,0,364,362,1,0,0,0,365,366,5,38,0,0,366,367,5,56,0,0,367,
	368,3,32,16,0,368,370,1,0,0,0,369,306,1,0,0,0,369,320,1,0,0,0,369,336,1,
	0,0,0,369,351,1,0,0,0,370,401,1,0,0,0,371,380,10,5,0,0,372,373,5,47,0,0,
	373,374,3,24,12,0,374,375,5,48,0,0,375,379,1,0,0,0,376,377,5,26,0,0,377,
	379,5,56,0,0,378,372,1,0,0,0,378,376,1,0,0,0,379,382,1,0,0,0,380,378,1,
	0,0,0,380,381,1,0,0,0,381,383,1,0,0,0,382,380,1,0,0,0,383,400,3,32,16,0,
	384,393,10,2,0,0,385,386,5,47,0,0,386,387,3,24,12,0,387,388,5,48,0,0,388,
	392,1,0,0,0,389,390,5,26,0,0,390,392,5,56,0,0,391,385,1,0,0,0,391,389,1,
	0,0,0,392,395,1,0,0,0,393,391,1,0,0,0,393,394,1,0,0,0,394,396,1,0,0,0,395,
	393,1,0,0,0,396,397,5,38,0,0,397,398,5,56,0,0,398,400,3,32,16,0,399,371,
	1,0,0,0,399,384,1,0,0,0,400,403,1,0,0,0,401,399,1,0,0,0,401,402,1,0,0,0,
	402,31,1,0,0,0,403,401,1,0,0,0,404,406,5,30,0,0,405,407,3,22,11,0,406,405,
	1,0,0,0,406,407,1,0,0,0,407,408,1,0,0,0,408,412,5,31,0,0,409,412,3,40,20,
	0,410,412,3,50,25,0,411,404,1,0,0,0,411,409,1,0,0,0,411,410,1,0,0,0,412,
	33,1,0,0,0,413,414,5,17,0,0,414,415,3,36,18,0,415,35,1,0,0,0,416,417,5,
	30,0,0,417,418,3,38,19,0,418,419,5,31,0,0,419,420,3,4,2,0,420,421,5,6,0,
	0,421,37,1,0,0,0,422,425,3,20,10,0,423,424,5,15,0,0,424,426,5,54,0,0,425,
	423,1,0,0,0,425,426,1,0,0,0,426,430,1,0,0,0,427,430,5,54,0,0,428,430,1,
	0,0,0,429,422,1,0,0,0,429,427,1,0,0,0,429,428,1,0,0,0,430,39,1,0,0,0,431,
	433,5,45,0,0,432,434,3,42,21,0,433,432,1,0,0,0,433,434,1,0,0,0,434,435,
	1,0,0,0,435,436,5,46,0,0,436,41,1,0,0,0,437,443,3,44,22,0,438,439,3,46,
	23,0,439,440,3,44,22,0,440,442,1,0,0,0,441,438,1,0,0,0,442,445,1,0,0,0,
	443,441,1,0,0,0,443,444,1,0,0,0,444,447,1,0,0,0,445,443,1,0,0,0,446,448,
	3,46,23,0,447,446,1,0,0,0,447,448,1,0,0,0,448,43,1,0,0,0,449,450,5,47,0,
	0,450,451,3,24,12,0,451,452,5,48,0,0,452,453,5,2,0,0,453,454,3,24,12,0,
	454,460,1,0,0,0,455,456,5,56,0,0,456,457,5,2,0,0,457,460,3,24,12,0,458,
	460,3,24,12,0,459,449,1,0,0,0,459,455,1,0,0,0,459,458,1,0,0,0,460,45,1,
	0,0,0,461,462,7,5,0,0,462,47,1,0,0,0,463,468,5,60,0,0,464,468,5,61,0,0,
	465,468,5,62,0,0,466,468,5,63,0,0,467,463,1,0,0,0,467,464,1,0,0,0,467,465,
	1,0,0,0,467,466,1,0,0,0,468,49,1,0,0,0,469,473,5,57,0,0,470,473,5,58,0,
	0,471,473,5,59,0,0,472,469,1,0,0,0,472,470,1,0,0,0,472,471,1,0,0,0,473,
	51,1,0,0,0,53,60,64,102,107,119,145,147,156,162,166,169,180,185,192,200,
	208,223,249,251,262,264,273,275,285,287,299,301,304,314,316,329,331,343,
	345,360,362,369,378,380,391,393,399,401,406,411,425,429,433,443,447,459,
	467,472];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LuaParser.__ATN) {
			LuaParser.__ATN = new ATNDeserializer().deserialize(LuaParser._serializedATN);
		}

		return LuaParser.__ATN;
	}


	static DecisionsToDFA = LuaParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class Start_Context extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public chunk(): ChunkContext {
		return this.getTypedRuleContext(ChunkContext, 0) as ChunkContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(LuaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_start_;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterStart_) {
	 		listener.enterStart_(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitStart_) {
	 		listener.exitStart_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitStart_) {
			return visitor.visitStart_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChunkContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_chunk;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterChunk) {
	 		listener.enterChunk(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitChunk) {
	 		listener.exitChunk(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitChunk) {
			return visitor.visitChunk(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stat_list(): StatContext[] {
		return this.getTypedRuleContexts(StatContext) as StatContext[];
	}
	public stat(i: number): StatContext {
		return this.getTypedRuleContext(StatContext, i) as StatContext;
	}
	public retstat(): RetstatContext {
		return this.getTypedRuleContext(RetstatContext, 0) as RetstatContext;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_block;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_stat;
	}
	public override copyFrom(ctx: StatContext): void {
		super.copyFrom(ctx);
	}
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		throw new Error("Not implemented");
	}
}
export class Stat_ifContext extends StatContext {
	constructor(parser: LuaParser, ctx: StatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IF(): TerminalNode {
		return this.getToken(LuaParser.IF, 0);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public THEN_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.THEN);
	}
	public THEN(i: number): TerminalNode {
		return this.getToken(LuaParser.THEN, i);
	}
	public block_list(): BlockContext[] {
		return this.getTypedRuleContexts(BlockContext) as BlockContext[];
	}
	public block(i: number): BlockContext {
		return this.getTypedRuleContext(BlockContext, i) as BlockContext;
	}
	public END(): TerminalNode {
		return this.getToken(LuaParser.END, 0);
	}
	public ELSEIF_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.ELSEIF);
	}
	public ELSEIF(i: number): TerminalNode {
		return this.getToken(LuaParser.ELSEIF, i);
	}
	public ELSE(): TerminalNode {
		return this.getToken(LuaParser.ELSE, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterStat_if) {
	 		listener.enterStat_if(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitStat_if) {
	 		listener.exitStat_if(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitStat_if) {
			return visitor.visitStat_if(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Stat_local_functionContext extends StatContext {
	constructor(parser: LuaParser, ctx: StatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LOCAL(): TerminalNode {
		return this.getToken(LuaParser.LOCAL, 0);
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(LuaParser.FUNCTION, 0);
	}
	public NAME(): TerminalNode {
		return this.getToken(LuaParser.NAME, 0);
	}
	public funcbody(): FuncbodyContext {
		return this.getTypedRuleContext(FuncbodyContext, 0) as FuncbodyContext;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterStat_local_function) {
	 		listener.enterStat_local_function(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitStat_local_function) {
	 		listener.exitStat_local_function(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitStat_local_function) {
			return visitor.visitStat_local_function(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Stat_labelContext extends StatContext {
	constructor(parser: LuaParser, ctx: StatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public label(): LabelContext {
		return this.getTypedRuleContext(LabelContext, 0) as LabelContext;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterStat_label) {
	 		listener.enterStat_label(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitStat_label) {
	 		listener.exitStat_label(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitStat_label) {
			return visitor.visitStat_label(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Stat_for_varContext extends StatContext {
	constructor(parser: LuaParser, ctx: StatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FOR(): TerminalNode {
		return this.getToken(LuaParser.FOR, 0);
	}
	public NAME(): TerminalNode {
		return this.getToken(LuaParser.NAME, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(LuaParser.EQ, 0);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(LuaParser.COMMA, i);
	}
	public DO(): TerminalNode {
		return this.getToken(LuaParser.DO, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public END(): TerminalNode {
		return this.getToken(LuaParser.END, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterStat_for_var) {
	 		listener.enterStat_for_var(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitStat_for_var) {
	 		listener.exitStat_for_var(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitStat_for_var) {
			return visitor.visitStat_for_var(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Stat_gotoContext extends StatContext {
	constructor(parser: LuaParser, ctx: StatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public GOTO(): TerminalNode {
		return this.getToken(LuaParser.GOTO, 0);
	}
	public NAME(): TerminalNode {
		return this.getToken(LuaParser.NAME, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterStat_goto) {
	 		listener.enterStat_goto(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitStat_goto) {
	 		listener.exitStat_goto(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitStat_goto) {
			return visitor.visitStat_goto(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Stat_breakContext extends StatContext {
	constructor(parser: LuaParser, ctx: StatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BREAK(): TerminalNode {
		return this.getToken(LuaParser.BREAK, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterStat_break) {
	 		listener.enterStat_break(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitStat_break) {
	 		listener.exitStat_break(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitStat_break) {
			return visitor.visitStat_break(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Stat_for_listContext extends StatContext {
	constructor(parser: LuaParser, ctx: StatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FOR(): TerminalNode {
		return this.getToken(LuaParser.FOR, 0);
	}
	public namelist(): NamelistContext {
		return this.getTypedRuleContext(NamelistContext, 0) as NamelistContext;
	}
	public IN(): TerminalNode {
		return this.getToken(LuaParser.IN, 0);
	}
	public explist(): ExplistContext {
		return this.getTypedRuleContext(ExplistContext, 0) as ExplistContext;
	}
	public DO(): TerminalNode {
		return this.getToken(LuaParser.DO, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public END(): TerminalNode {
		return this.getToken(LuaParser.END, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterStat_for_list) {
	 		listener.enterStat_for_list(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitStat_for_list) {
	 		listener.exitStat_for_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitStat_for_list) {
			return visitor.visitStat_for_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Stat_repeatContext extends StatContext {
	constructor(parser: LuaParser, ctx: StatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REPEAT(): TerminalNode {
		return this.getToken(LuaParser.REPEAT, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public UNTIL(): TerminalNode {
		return this.getToken(LuaParser.UNTIL, 0);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterStat_repeat) {
	 		listener.enterStat_repeat(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitStat_repeat) {
	 		listener.exitStat_repeat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitStat_repeat) {
			return visitor.visitStat_repeat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Stat_no_opContext extends StatContext {
	constructor(parser: LuaParser, ctx: StatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SEMI(): TerminalNode {
		return this.getToken(LuaParser.SEMI, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterStat_no_op) {
	 		listener.enterStat_no_op(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitStat_no_op) {
	 		listener.exitStat_no_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitStat_no_op) {
			return visitor.visitStat_no_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Stat_assing_varsContext extends StatContext {
	constructor(parser: LuaParser, ctx: StatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public varlist(): VarlistContext {
		return this.getTypedRuleContext(VarlistContext, 0) as VarlistContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(LuaParser.EQ, 0);
	}
	public explist(): ExplistContext {
		return this.getTypedRuleContext(ExplistContext, 0) as ExplistContext;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterStat_assing_vars) {
	 		listener.enterStat_assing_vars(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitStat_assing_vars) {
	 		listener.exitStat_assing_vars(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitStat_assing_vars) {
			return visitor.visitStat_assing_vars(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Stat_local_attnamelistContext extends StatContext {
	constructor(parser: LuaParser, ctx: StatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LOCAL(): TerminalNode {
		return this.getToken(LuaParser.LOCAL, 0);
	}
	public attnamelist(): AttnamelistContext {
		return this.getTypedRuleContext(AttnamelistContext, 0) as AttnamelistContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(LuaParser.EQ, 0);
	}
	public explist(): ExplistContext {
		return this.getTypedRuleContext(ExplistContext, 0) as ExplistContext;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterStat_local_attnamelist) {
	 		listener.enterStat_local_attnamelist(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitStat_local_attnamelist) {
	 		listener.exitStat_local_attnamelist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitStat_local_attnamelist) {
			return visitor.visitStat_local_attnamelist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Stat_whileContext extends StatContext {
	constructor(parser: LuaParser, ctx: StatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public WHILE(): TerminalNode {
		return this.getToken(LuaParser.WHILE, 0);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public DO(): TerminalNode {
		return this.getToken(LuaParser.DO, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public END(): TerminalNode {
		return this.getToken(LuaParser.END, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterStat_while) {
	 		listener.enterStat_while(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitStat_while) {
	 		listener.exitStat_while(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitStat_while) {
			return visitor.visitStat_while(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Stat_function_callContext extends StatContext {
	constructor(parser: LuaParser, ctx: StatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public functioncall(): FunctioncallContext {
		return this.getTypedRuleContext(FunctioncallContext, 0) as FunctioncallContext;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterStat_function_call) {
	 		listener.enterStat_function_call(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitStat_function_call) {
	 		listener.exitStat_function_call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitStat_function_call) {
			return visitor.visitStat_function_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Stat_doContext extends StatContext {
	constructor(parser: LuaParser, ctx: StatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DO(): TerminalNode {
		return this.getToken(LuaParser.DO, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public END(): TerminalNode {
		return this.getToken(LuaParser.END, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterStat_do) {
	 		listener.enterStat_do(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitStat_do) {
	 		listener.exitStat_do(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitStat_do) {
			return visitor.visitStat_do(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Stat_functionContext extends StatContext {
	constructor(parser: LuaParser, ctx: StatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(LuaParser.FUNCTION, 0);
	}
	public funcname(): FuncnameContext {
		return this.getTypedRuleContext(FuncnameContext, 0) as FuncnameContext;
	}
	public funcbody(): FuncbodyContext {
		return this.getTypedRuleContext(FuncbodyContext, 0) as FuncbodyContext;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterStat_function) {
	 		listener.enterStat_function(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitStat_function) {
	 		listener.exitStat_function(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitStat_function) {
			return visitor.visitStat_function(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttnamelistContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.NAME);
	}
	public NAME(i: number): TerminalNode {
		return this.getToken(LuaParser.NAME, i);
	}
	public attrib_list(): AttribContext[] {
		return this.getTypedRuleContexts(AttribContext) as AttribContext[];
	}
	public attrib(i: number): AttribContext {
		return this.getTypedRuleContext(AttribContext, i) as AttribContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(LuaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_attnamelist;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterAttnamelist) {
	 		listener.enterAttnamelist(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitAttnamelist) {
	 		listener.exitAttnamelist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitAttnamelist) {
			return visitor.visitAttnamelist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttribContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(LuaParser.LT, 0);
	}
	public NAME(): TerminalNode {
		return this.getToken(LuaParser.NAME, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(LuaParser.GT, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_attrib;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterAttrib) {
	 		listener.enterAttrib(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitAttrib) {
	 		listener.exitAttrib(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitAttrib) {
			return visitor.visitAttrib(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RetstatContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURN(): TerminalNode {
		return this.getToken(LuaParser.RETURN, 0);
	}
	public explist(): ExplistContext {
		return this.getTypedRuleContext(ExplistContext, 0) as ExplistContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(LuaParser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_retstat;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterRetstat) {
	 		listener.enterRetstat(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitRetstat) {
	 		listener.exitRetstat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitRetstat) {
			return visitor.visitRetstat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CC_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.CC);
	}
	public CC(i: number): TerminalNode {
		return this.getToken(LuaParser.CC, i);
	}
	public NAME(): TerminalNode {
		return this.getToken(LuaParser.NAME, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_label;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterLabel) {
	 		listener.enterLabel(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitLabel) {
	 		listener.exitLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitLabel) {
			return visitor.visitLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncnameContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.NAME);
	}
	public NAME(i: number): TerminalNode {
		return this.getToken(LuaParser.NAME, i);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(LuaParser.DOT, i);
	}
	public COL(): TerminalNode {
		return this.getToken(LuaParser.COL, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_funcname;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterFuncname) {
	 		listener.enterFuncname(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitFuncname) {
	 		listener.exitFuncname(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitFuncname) {
			return visitor.visitFuncname(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarlistContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public var__list(): VarContext[] {
		return this.getTypedRuleContexts(VarContext) as VarContext[];
	}
	public var_(i: number): VarContext {
		return this.getTypedRuleContext(VarContext, i) as VarContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(LuaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_varlist;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterVarlist) {
	 		listener.enterVarlist(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitVarlist) {
	 		listener.exitVarlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitVarlist) {
			return visitor.visitVarlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamelistContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.NAME);
	}
	public NAME(i: number): TerminalNode {
		return this.getToken(LuaParser.NAME, i);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(LuaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_namelist;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterNamelist) {
	 		listener.enterNamelist(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitNamelist) {
	 		listener.exitNamelist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitNamelist) {
			return visitor.visitNamelist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplistContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(LuaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_explist;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterExplist) {
	 		listener.enterExplist(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitExplist) {
	 		listener.exitExplist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitExplist) {
			return visitor.visitExplist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_exp;
	}
	public override copyFrom(ctx: ExpContext): void {
		super.copyFrom(ctx);
	}
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		throw new Error("Method not implemented.");
	}
}
export class Exp_trueContext extends ExpContext {
	constructor(parser: LuaParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TRUE(): TerminalNode {
		return this.getToken(LuaParser.TRUE, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterExp_true) {
	 		listener.enterExp_true(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitExp_true) {
	 		listener.exitExp_true(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitExp_true) {
			return visitor.visitExp_true(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Exp_bitsContext extends ExpContext {
	constructor(parser: LuaParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public AMP(): TerminalNode {
		return this.getToken(LuaParser.AMP, 0);
	}
	public PIPE(): TerminalNode {
		return this.getToken(LuaParser.PIPE, 0);
	}
	public SQUIG(): TerminalNode {
		return this.getToken(LuaParser.SQUIG, 0);
	}
	public LL(): TerminalNode {
		return this.getToken(LuaParser.LL, 0);
	}
	public GG(): TerminalNode {
		return this.getToken(LuaParser.GG, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterExp_bits) {
	 		listener.enterExp_bits(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitExp_bits) {
	 		listener.exitExp_bits(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitExp_bits) {
			return visitor.visitExp_bits(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Exp_andContext extends ExpContext {
	constructor(parser: LuaParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public AND(): TerminalNode {
		return this.getToken(LuaParser.AND, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterExp_and) {
	 		listener.enterExp_and(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitExp_and) {
	 		listener.exitExp_and(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitExp_and) {
			return visitor.visitExp_and(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Exp_stringContext extends ExpContext {
	constructor(parser: LuaParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterExp_string) {
	 		listener.enterExp_string(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitExp_string) {
	 		listener.exitExp_string(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitExp_string) {
			return visitor.visitExp_string(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Exp_arithmetic_highContext extends ExpContext {
	constructor(parser: LuaParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public STAR(): TerminalNode {
		return this.getToken(LuaParser.STAR, 0);
	}
	public SLASH(): TerminalNode {
		return this.getToken(LuaParser.SLASH, 0);
	}
	public PER(): TerminalNode {
		return this.getToken(LuaParser.PER, 0);
	}
	public SS(): TerminalNode {
		return this.getToken(LuaParser.SS, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterExp_arithmetic_high) {
	 		listener.enterExp_arithmetic_high(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitExp_arithmetic_high) {
	 		listener.exitExp_arithmetic_high(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitExp_arithmetic_high) {
			return visitor.visitExp_arithmetic_high(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Exp_relContext extends ExpContext {
	constructor(parser: LuaParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public LT(): TerminalNode {
		return this.getToken(LuaParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(LuaParser.GT, 0);
	}
	public LE(): TerminalNode {
		return this.getToken(LuaParser.LE, 0);
	}
	public GE(): TerminalNode {
		return this.getToken(LuaParser.GE, 0);
	}
	public SQEQ(): TerminalNode {
		return this.getToken(LuaParser.SQEQ, 0);
	}
	public EE(): TerminalNode {
		return this.getToken(LuaParser.EE, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterExp_rel) {
	 		listener.enterExp_rel(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitExp_rel) {
	 		listener.exitExp_rel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitExp_rel) {
			return visitor.visitExp_rel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Stat_table_construnctorContext extends ExpContext {
	constructor(parser: LuaParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public tableconstructor(): TableconstructorContext {
		return this.getTypedRuleContext(TableconstructorContext, 0) as TableconstructorContext;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterStat_table_construnctor) {
	 		listener.enterStat_table_construnctor(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitStat_table_construnctor) {
	 		listener.exitStat_table_construnctor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitStat_table_construnctor) {
			return visitor.visitStat_table_construnctor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Exp_unaryContext extends ExpContext {
	constructor(parser: LuaParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(LuaParser.NOT, 0);
	}
	public POUND(): TerminalNode {
		return this.getToken(LuaParser.POUND, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(LuaParser.MINUS, 0);
	}
	public SQUIG(): TerminalNode {
		return this.getToken(LuaParser.SQUIG, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterExp_unary) {
	 		listener.enterExp_unary(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitExp_unary) {
	 		listener.exitExp_unary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitExp_unary) {
			return visitor.visitExp_unary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Exp_orContext extends ExpContext {
	constructor(parser: LuaParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public OR(): TerminalNode {
		return this.getToken(LuaParser.OR, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterExp_or) {
	 		listener.enterExp_or(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitExp_or) {
	 		listener.exitExp_or(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitExp_or) {
			return visitor.visitExp_or(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Exp_falseContext extends ExpContext {
	constructor(parser: LuaParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FALSE(): TerminalNode {
		return this.getToken(LuaParser.FALSE, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterExp_false) {
	 		listener.enterExp_false(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitExp_false) {
	 		listener.exitExp_false(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitExp_false) {
			return visitor.visitExp_false(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Stat_prefix_expContext extends ExpContext {
	constructor(parser: LuaParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public prefixexp(): PrefixexpContext {
		return this.getTypedRuleContext(PrefixexpContext, 0) as PrefixexpContext;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterStat_prefix_exp) {
	 		listener.enterStat_prefix_exp(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitStat_prefix_exp) {
	 		listener.exitStat_prefix_exp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitStat_prefix_exp) {
			return visitor.visitStat_prefix_exp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Exp_exponentContext extends ExpContext {
	constructor(parser: LuaParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public CARET(): TerminalNode {
		return this.getToken(LuaParser.CARET, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterExp_exponent) {
	 		listener.enterExp_exponent(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitExp_exponent) {
	 		listener.exitExp_exponent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitExp_exponent) {
			return visitor.visitExp_exponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Exp_numberContext extends ExpContext {
	constructor(parser: LuaParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public number_(): NumberContext {
		return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterExp_number) {
	 		listener.enterExp_number(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitExp_number) {
	 		listener.exitExp_number(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitExp_number) {
			return visitor.visitExp_number(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Exp_concatContext extends ExpContext {
	constructor(parser: LuaParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public DD(): TerminalNode {
		return this.getToken(LuaParser.DD, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterExp_concat) {
	 		listener.enterExp_concat(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitExp_concat) {
	 		listener.exitExp_concat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitExp_concat) {
			return visitor.visitExp_concat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Exp_varargContext extends ExpContext {
	constructor(parser: LuaParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DDD(): TerminalNode {
		return this.getToken(LuaParser.DDD, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterExp_vararg) {
	 		listener.enterExp_vararg(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitExp_vararg) {
	 		listener.exitExp_vararg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitExp_vararg) {
			return visitor.visitExp_vararg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Exp_arithmetic_lowContext extends ExpContext {
	constructor(parser: LuaParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public PLUS(): TerminalNode {
		return this.getToken(LuaParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(LuaParser.MINUS, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterExp_arithmetic_low) {
	 		listener.enterExp_arithmetic_low(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitExp_arithmetic_low) {
	 		listener.exitExp_arithmetic_low(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitExp_arithmetic_low) {
			return visitor.visitExp_arithmetic_low(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Exp_function_defContext extends ExpContext {
	constructor(parser: LuaParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public functiondef(): FunctiondefContext {
		return this.getTypedRuleContext(FunctiondefContext, 0) as FunctiondefContext;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterExp_function_def) {
	 		listener.enterExp_function_def(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitExp_function_def) {
	 		listener.exitExp_function_def(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitExp_function_def) {
			return visitor.visitExp_function_def(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Exp_nilContext extends ExpContext {
	constructor(parser: LuaParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NIL(): TerminalNode {
		return this.getToken(LuaParser.NIL, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterExp_nil) {
	 		listener.enterExp_nil(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitExp_nil) {
	 		listener.exitExp_nil(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitExp_nil) {
			return visitor.visitExp_nil(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_var;
	}
	public override copyFrom(ctx: VarContext): void {
		super.copyFrom(ctx);
	}
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		throw new Error("Not implemented");
	}
}
export class Var_expContext extends VarContext {
	constructor(parser: LuaParser, ctx: VarContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public prefixexp(): PrefixexpContext {
		return this.getTypedRuleContext(PrefixexpContext, 0) as PrefixexpContext;
	}
	public OB(): TerminalNode {
		return this.getToken(LuaParser.OB, 0);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public CB(): TerminalNode {
		return this.getToken(LuaParser.CB, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(LuaParser.DOT, 0);
	}
	public NAME(): TerminalNode {
		return this.getToken(LuaParser.NAME, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterVar_exp) {
	 		listener.enterVar_exp(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitVar_exp) {
	 		listener.exitVar_exp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitVar_exp) {
			return visitor.visitVar_exp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Var_nameContext extends VarContext {
	constructor(parser: LuaParser, ctx: VarContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NAME(): TerminalNode {
		return this.getToken(LuaParser.NAME, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterVar_name) {
	 		listener.enterVar_name(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitVar_name) {
	 		listener.exitVar_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitVar_name) {
			return visitor.visitVar_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrefixexpContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_prefixexp;
	}
	public override copyFrom(ctx: PrefixexpContext): void {
		super.copyFrom(ctx);
	}
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		throw new Error("Method not implemented.");
	}
}
export class Prefixexp_expContext extends PrefixexpContext {
	constructor(parser: LuaParser, ctx: PrefixexpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OP(): TerminalNode {
		return this.getToken(LuaParser.OP, 0);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public CP(): TerminalNode {
		return this.getToken(LuaParser.CP, 0);
	}
	public OB_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.OB);
	}
	public OB(i: number): TerminalNode {
		return this.getToken(LuaParser.OB, i);
	}
	public CB_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.CB);
	}
	public CB(i: number): TerminalNode {
		return this.getToken(LuaParser.CB, i);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(LuaParser.DOT, i);
	}
	public NAME_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.NAME);
	}
	public NAME(i: number): TerminalNode {
		return this.getToken(LuaParser.NAME, i);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterPrefixexp_exp) {
	 		listener.enterPrefixexp_exp(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitPrefixexp_exp) {
	 		listener.exitPrefixexp_exp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitPrefixexp_exp) {
			return visitor.visitPrefixexp_exp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Prefixexp_nameContext extends PrefixexpContext {
	constructor(parser: LuaParser, ctx: PrefixexpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NAME_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.NAME);
	}
	public NAME(i: number): TerminalNode {
		return this.getToken(LuaParser.NAME, i);
	}
	public OB_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.OB);
	}
	public OB(i: number): TerminalNode {
		return this.getToken(LuaParser.OB, i);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public CB_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.CB);
	}
	public CB(i: number): TerminalNode {
		return this.getToken(LuaParser.CB, i);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(LuaParser.DOT, i);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterPrefixexp_name) {
	 		listener.enterPrefixexp_name(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitPrefixexp_name) {
	 		listener.exitPrefixexp_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitPrefixexp_name) {
			return visitor.visitPrefixexp_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Prefixexp_function_callContext extends PrefixexpContext {
	constructor(parser: LuaParser, ctx: PrefixexpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public functioncall(): FunctioncallContext {
		return this.getTypedRuleContext(FunctioncallContext, 0) as FunctioncallContext;
	}
	public OB_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.OB);
	}
	public OB(i: number): TerminalNode {
		return this.getToken(LuaParser.OB, i);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public CB_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.CB);
	}
	public CB(i: number): TerminalNode {
		return this.getToken(LuaParser.CB, i);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(LuaParser.DOT, i);
	}
	public NAME_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.NAME);
	}
	public NAME(i: number): TerminalNode {
		return this.getToken(LuaParser.NAME, i);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterPrefixexp_function_call) {
	 		listener.enterPrefixexp_function_call(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitPrefixexp_function_call) {
	 		listener.exitPrefixexp_function_call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitPrefixexp_function_call) {
			return visitor.visitPrefixexp_function_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctioncallContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_functioncall;
	}
	public override copyFrom(ctx: FunctioncallContext): void {
		super.copyFrom(ctx);
	}
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		throw new Error("Not implemented");
	}
}
export class Fcall_nameContext extends FunctioncallContext {
	constructor(parser: LuaParser, ctx: FunctioncallContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NAME_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.NAME);
	}
	public NAME(i: number): TerminalNode {
		return this.getToken(LuaParser.NAME, i);
	}
	public args(): ArgsContext {
		return this.getTypedRuleContext(ArgsContext, 0) as ArgsContext;
	}
	public OB_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.OB);
	}
	public OB(i: number): TerminalNode {
		return this.getToken(LuaParser.OB, i);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public CB_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.CB);
	}
	public CB(i: number): TerminalNode {
		return this.getToken(LuaParser.CB, i);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(LuaParser.DOT, i);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterFcall_name) {
	 		listener.enterFcall_name(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitFcall_name) {
	 		listener.exitFcall_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitFcall_name) {
			return visitor.visitFcall_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Fcall_name_extContext extends FunctioncallContext {
	constructor(parser: LuaParser, ctx: FunctioncallContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NAME_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.NAME);
	}
	public NAME(i: number): TerminalNode {
		return this.getToken(LuaParser.NAME, i);
	}
	public COL(): TerminalNode {
		return this.getToken(LuaParser.COL, 0);
	}
	public args(): ArgsContext {
		return this.getTypedRuleContext(ArgsContext, 0) as ArgsContext;
	}
	public OB_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.OB);
	}
	public OB(i: number): TerminalNode {
		return this.getToken(LuaParser.OB, i);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public CB_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.CB);
	}
	public CB(i: number): TerminalNode {
		return this.getToken(LuaParser.CB, i);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(LuaParser.DOT, i);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterFcall_name_ext) {
	 		listener.enterFcall_name_ext(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitFcall_name_ext) {
	 		listener.exitFcall_name_ext(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitFcall_name_ext) {
			return visitor.visitFcall_name_ext(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Fcall_function_callContext extends FunctioncallContext {
	constructor(parser: LuaParser, ctx: FunctioncallContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public functioncall(): FunctioncallContext {
		return this.getTypedRuleContext(FunctioncallContext, 0) as FunctioncallContext;
	}
	public args(): ArgsContext {
		return this.getTypedRuleContext(ArgsContext, 0) as ArgsContext;
	}
	public OB_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.OB);
	}
	public OB(i: number): TerminalNode {
		return this.getToken(LuaParser.OB, i);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public CB_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.CB);
	}
	public CB(i: number): TerminalNode {
		return this.getToken(LuaParser.CB, i);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(LuaParser.DOT, i);
	}
	public NAME_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.NAME);
	}
	public NAME(i: number): TerminalNode {
		return this.getToken(LuaParser.NAME, i);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterFcall_function_call) {
	 		listener.enterFcall_function_call(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitFcall_function_call) {
	 		listener.exitFcall_function_call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitFcall_function_call) {
			return visitor.visitFcall_function_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Fcall_expContext extends FunctioncallContext {
	constructor(parser: LuaParser, ctx: FunctioncallContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OP(): TerminalNode {
		return this.getToken(LuaParser.OP, 0);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public CP(): TerminalNode {
		return this.getToken(LuaParser.CP, 0);
	}
	public args(): ArgsContext {
		return this.getTypedRuleContext(ArgsContext, 0) as ArgsContext;
	}
	public OB_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.OB);
	}
	public OB(i: number): TerminalNode {
		return this.getToken(LuaParser.OB, i);
	}
	public CB_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.CB);
	}
	public CB(i: number): TerminalNode {
		return this.getToken(LuaParser.CB, i);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(LuaParser.DOT, i);
	}
	public NAME_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.NAME);
	}
	public NAME(i: number): TerminalNode {
		return this.getToken(LuaParser.NAME, i);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterFcall_exp) {
	 		listener.enterFcall_exp(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitFcall_exp) {
	 		listener.exitFcall_exp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitFcall_exp) {
			return visitor.visitFcall_exp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Fcall_exp_extContext extends FunctioncallContext {
	constructor(parser: LuaParser, ctx: FunctioncallContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OP(): TerminalNode {
		return this.getToken(LuaParser.OP, 0);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public CP(): TerminalNode {
		return this.getToken(LuaParser.CP, 0);
	}
	public COL(): TerminalNode {
		return this.getToken(LuaParser.COL, 0);
	}
	public NAME_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.NAME);
	}
	public NAME(i: number): TerminalNode {
		return this.getToken(LuaParser.NAME, i);
	}
	public args(): ArgsContext {
		return this.getTypedRuleContext(ArgsContext, 0) as ArgsContext;
	}
	public OB_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.OB);
	}
	public OB(i: number): TerminalNode {
		return this.getToken(LuaParser.OB, i);
	}
	public CB_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.CB);
	}
	public CB(i: number): TerminalNode {
		return this.getToken(LuaParser.CB, i);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(LuaParser.DOT, i);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterFcall_exp_ext) {
	 		listener.enterFcall_exp_ext(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitFcall_exp_ext) {
	 		listener.exitFcall_exp_ext(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitFcall_exp_ext) {
			return visitor.visitFcall_exp_ext(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Fcall_function_call_extContext extends FunctioncallContext {
	constructor(parser: LuaParser, ctx: FunctioncallContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public functioncall(): FunctioncallContext {
		return this.getTypedRuleContext(FunctioncallContext, 0) as FunctioncallContext;
	}
	public COL(): TerminalNode {
		return this.getToken(LuaParser.COL, 0);
	}
	public NAME_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.NAME);
	}
	public NAME(i: number): TerminalNode {
		return this.getToken(LuaParser.NAME, i);
	}
	public args(): ArgsContext {
		return this.getTypedRuleContext(ArgsContext, 0) as ArgsContext;
	}
	public OB_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.OB);
	}
	public OB(i: number): TerminalNode {
		return this.getToken(LuaParser.OB, i);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public CB_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.CB);
	}
	public CB(i: number): TerminalNode {
		return this.getToken(LuaParser.CB, i);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(LuaParser.DOT, i);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterFcall_function_call_ext) {
	 		listener.enterFcall_function_call_ext(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitFcall_function_call_ext) {
	 		listener.exitFcall_function_call_ext(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitFcall_function_call_ext) {
			return visitor.visitFcall_function_call_ext(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgsContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_args;
	}
	public override copyFrom(ctx: ArgsContext): void {
		super.copyFrom(ctx);
	}
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		throw new Error("Not implemented");
	}
}
export class Args_stringContext extends ArgsContext {
	constructor(parser: LuaParser, ctx: ArgsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterArgs_string) {
	 		listener.enterArgs_string(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitArgs_string) {
	 		listener.exitArgs_string(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitArgs_string) {
			return visitor.visitArgs_string(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Args_exp_listContext extends ArgsContext {
	constructor(parser: LuaParser, ctx: ArgsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OP(): TerminalNode {
		return this.getToken(LuaParser.OP, 0);
	}
	public CP(): TerminalNode {
		return this.getToken(LuaParser.CP, 0);
	}
	public explist(): ExplistContext {
		return this.getTypedRuleContext(ExplistContext, 0) as ExplistContext;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterArgs_exp_list) {
	 		listener.enterArgs_exp_list(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitArgs_exp_list) {
	 		listener.exitArgs_exp_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitArgs_exp_list) {
			return visitor.visitArgs_exp_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Args_table_constructorContext extends ArgsContext {
	constructor(parser: LuaParser, ctx: ArgsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public tableconstructor(): TableconstructorContext {
		return this.getTypedRuleContext(TableconstructorContext, 0) as TableconstructorContext;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterArgs_table_constructor) {
	 		listener.enterArgs_table_constructor(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitArgs_table_constructor) {
	 		listener.exitArgs_table_constructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitArgs_table_constructor) {
			return visitor.visitArgs_table_constructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctiondefContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(LuaParser.FUNCTION, 0);
	}
	public funcbody(): FuncbodyContext {
		return this.getTypedRuleContext(FuncbodyContext, 0) as FuncbodyContext;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_functiondef;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterFunctiondef) {
	 		listener.enterFunctiondef(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitFunctiondef) {
	 		listener.exitFunctiondef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitFunctiondef) {
			return visitor.visitFunctiondef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncbodyContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OP(): TerminalNode {
		return this.getToken(LuaParser.OP, 0);
	}
	public parlist(): ParlistContext {
		return this.getTypedRuleContext(ParlistContext, 0) as ParlistContext;
	}
	public CP(): TerminalNode {
		return this.getToken(LuaParser.CP, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public END(): TerminalNode {
		return this.getToken(LuaParser.END, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_funcbody;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterFuncbody) {
	 		listener.enterFuncbody(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitFuncbody) {
	 		listener.exitFuncbody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitFuncbody) {
			return visitor.visitFuncbody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParlistContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_parlist;
	}
	public override copyFrom(ctx: ParlistContext): void {
		super.copyFrom(ctx);
	}
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		throw new Error("Not implemented");
	}
}
export class Parlist_noneContext extends ParlistContext {
	constructor(parser: LuaParser, ctx: ParlistContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterParlist_none) {
	 		listener.enterParlist_none(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitParlist_none) {
	 		listener.exitParlist_none(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitParlist_none) {
			return visitor.visitParlist_none(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Parlist_namellistContext extends ParlistContext {
	constructor(parser: LuaParser, ctx: ParlistContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public namelist(): NamelistContext {
		return this.getTypedRuleContext(NamelistContext, 0) as NamelistContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(LuaParser.COMMA, 0);
	}
	public DDD(): TerminalNode {
		return this.getToken(LuaParser.DDD, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterParlist_namellist) {
	 		listener.enterParlist_namellist(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitParlist_namellist) {
	 		listener.exitParlist_namellist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitParlist_namellist) {
			return visitor.visitParlist_namellist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Parlist_varargContext extends ParlistContext {
	constructor(parser: LuaParser, ctx: ParlistContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DDD(): TerminalNode {
		return this.getToken(LuaParser.DDD, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterParlist_vararg) {
	 		listener.enterParlist_vararg(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitParlist_vararg) {
	 		listener.exitParlist_vararg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitParlist_vararg) {
			return visitor.visitParlist_vararg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableconstructorContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OCU(): TerminalNode {
		return this.getToken(LuaParser.OCU, 0);
	}
	public CCU(): TerminalNode {
		return this.getToken(LuaParser.CCU, 0);
	}
	public fieldlist(): FieldlistContext {
		return this.getTypedRuleContext(FieldlistContext, 0) as FieldlistContext;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_tableconstructor;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterTableconstructor) {
	 		listener.enterTableconstructor(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitTableconstructor) {
	 		listener.exitTableconstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitTableconstructor) {
			return visitor.visitTableconstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldlistContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public field_list(): FieldContext[] {
		return this.getTypedRuleContexts(FieldContext) as FieldContext[];
	}
	public field(i: number): FieldContext {
		return this.getTypedRuleContext(FieldContext, i) as FieldContext;
	}
	public fieldsep_list(): FieldsepContext[] {
		return this.getTypedRuleContexts(FieldsepContext) as FieldsepContext[];
	}
	public fieldsep(i: number): FieldsepContext {
		return this.getTypedRuleContext(FieldsepContext, i) as FieldsepContext;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_fieldlist;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterFieldlist) {
	 		listener.enterFieldlist(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitFieldlist) {
	 		listener.exitFieldlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitFieldlist) {
			return visitor.visitFieldlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_field;
	}
	public override copyFrom(ctx: FieldContext): void {
		super.copyFrom(ctx);
	}
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		throw new Error("not implemented");
	}
}
export class Field_exp_expContext extends FieldContext {
	constructor(parser: LuaParser, ctx: FieldContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OB(): TerminalNode {
		return this.getToken(LuaParser.OB, 0);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public CB(): TerminalNode {
		return this.getToken(LuaParser.CB, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(LuaParser.EQ, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterField_exp_exp) {
	 		listener.enterField_exp_exp(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitField_exp_exp) {
	 		listener.exitField_exp_exp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitField_exp_exp) {
			return visitor.visitField_exp_exp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Field_name_expContext extends FieldContext {
	constructor(parser: LuaParser, ctx: FieldContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NAME(): TerminalNode {
		return this.getToken(LuaParser.NAME, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(LuaParser.EQ, 0);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterField_name_exp) {
	 		listener.enterField_name_exp(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitField_name_exp) {
	 		listener.exitField_name_exp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitField_name_exp) {
			return visitor.visitField_name_exp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Field_expContext extends FieldContext {
	constructor(parser: LuaParser, ctx: FieldContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterField_exp) {
	 		listener.enterField_exp(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitField_exp) {
	 		listener.exitField_exp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitField_exp) {
			return visitor.visitField_exp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldsepContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMA(): TerminalNode {
		return this.getToken(LuaParser.COMMA, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(LuaParser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_fieldsep;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterFieldsep) {
	 		listener.enterFieldsep(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitFieldsep) {
	 		listener.exitFieldsep(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitFieldsep) {
			return visitor.visitFieldsep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_number;
	}
	public override copyFrom(ctx: NumberContext): void {
		super.copyFrom(ctx);
	}
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		throw new Error("Method not implemented.");
	}
}
export class Number_hexContext extends NumberContext {
	constructor(parser: LuaParser, ctx: NumberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public HEX(): TerminalNode {
		return this.getToken(LuaParser.HEX, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterNumber_hex) {
	 		listener.enterNumber_hex(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitNumber_hex) {
	 		listener.exitNumber_hex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitNumber_hex) {
			return visitor.visitNumber_hex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Number_hex_floatContext extends NumberContext {
	constructor(parser: LuaParser, ctx: NumberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public HEX_FLOAT(): TerminalNode {
		return this.getToken(LuaParser.HEX_FLOAT, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterNumber_hex_float) {
	 		listener.enterNumber_hex_float(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitNumber_hex_float) {
	 		listener.exitNumber_hex_float(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitNumber_hex_float) {
			return visitor.visitNumber_hex_float(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Number_floatContext extends NumberContext {
	constructor(parser: LuaParser, ctx: NumberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(LuaParser.FLOAT, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterNumber_float) {
	 		listener.enterNumber_float(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitNumber_float) {
	 		listener.exitNumber_float(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitNumber_float) {
			return visitor.visitNumber_float(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Number_intContext extends NumberContext {
	constructor(parser: LuaParser, ctx: NumberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INT(): TerminalNode {
		return this.getToken(LuaParser.INT, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterNumber_int) {
	 		listener.enterNumber_int(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitNumber_int) {
	 		listener.exitNumber_int(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitNumber_int) {
			return visitor.visitNumber_int(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_string;
	}
	public override copyFrom(ctx: StringContext): void {
		super.copyFrom(ctx);
	}
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		throw new Error("Not implemented");
	}
}
export class String_longstringContext extends StringContext {
	constructor(parser: LuaParser, ctx: StringContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LONGSTRING(): TerminalNode {
		return this.getToken(LuaParser.LONGSTRING, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterString_longstring) {
	 		listener.enterString_longstring(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitString_longstring) {
	 		listener.exitString_longstring(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitString_longstring) {
			return visitor.visitString_longstring(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class String_stringContext extends StringContext {
	constructor(parser: LuaParser, ctx: StringContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NORMALSTRING(): TerminalNode {
		return this.getToken(LuaParser.NORMALSTRING, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterString_string) {
	 		listener.enterString_string(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitString_string) {
	 		listener.exitString_string(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitString_string) {
			return visitor.visitString_string(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class String_charstringContext extends StringContext {
	constructor(parser: LuaParser, ctx: StringContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CHARSTRING(): TerminalNode {
		return this.getToken(LuaParser.CHARSTRING, 0);
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterString_charstring) {
	 		listener.enterString_charstring(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitString_charstring) {
	 		listener.exitString_charstring(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaParserVisitor<Result>): Result {
		if (visitor.visitString_charstring) {
			return visitor.visitString_charstring(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
