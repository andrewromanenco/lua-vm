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
	public static readonly CONTINUE = 22;
	public static readonly CC = 23;
	public static readonly NIL = 24;
	public static readonly FALSE = 25;
	public static readonly TRUE = 26;
	public static readonly DOT = 27;
	public static readonly SQUIG = 28;
	public static readonly MINUS = 29;
	public static readonly POUND = 30;
	public static readonly OP = 31;
	public static readonly CP = 32;
	public static readonly NOT = 33;
	public static readonly LL = 34;
	public static readonly GG = 35;
	public static readonly AMP = 36;
	public static readonly SS = 37;
	public static readonly PER = 38;
	public static readonly COL = 39;
	public static readonly LE = 40;
	public static readonly GE = 41;
	public static readonly AND = 42;
	public static readonly OR = 43;
	public static readonly PLUS = 44;
	public static readonly STAR = 45;
	public static readonly OCU = 46;
	public static readonly CCU = 47;
	public static readonly OB = 48;
	public static readonly CB = 49;
	public static readonly EE = 50;
	public static readonly DD = 51;
	public static readonly PIPE = 52;
	public static readonly CARET = 53;
	public static readonly SLASH = 54;
	public static readonly DDD = 55;
	public static readonly SQEQ = 56;
	public static readonly NAME = 57;
	public static readonly NORMALSTRING = 58;
	public static readonly CHARSTRING = 59;
	public static readonly LONGSTRING = 60;
	public static readonly INT = 61;
	public static readonly HEX = 62;
	public static readonly FLOAT = 63;
	public static readonly HEX_FLOAT = 64;
	public static readonly COMMENT = 65;
	public static readonly WS = 66;
	public static readonly NL = 67;
	public static readonly SHEBANG = 68;
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
                                                            "'continue'", 
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
                                                             "CONTINUE", 
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
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 60;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 57;
					this.stat();
					}
					}
				}
				this.state = 62;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 6291464) !== 0)) {
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
			this.state = 170;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 21:
				{
				this.state = 164;
				this.match(LuaParser.RETURN);
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4144103424) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4282392577) !== 0)) {
					{
					this.state = 165;
					this.explist();
					}
				}

				}
				break;
			case 3:
				{
				this.state = 168;
				this.match(LuaParser.BREAK);
				}
				break;
			case 22:
				{
				this.state = 169;
				this.match(LuaParser.CONTINUE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 172;
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
			this.state = 175;
			this.match(LuaParser.CC);
			this.state = 176;
			this.match(LuaParser.NAME);
			this.state = 177;
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
			this.state = 179;
			this.match(LuaParser.NAME);
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===27) {
				{
				{
				this.state = 180;
				this.match(LuaParser.DOT);
				this.state = 181;
				this.match(LuaParser.NAME);
				}
				}
				this.state = 186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===39) {
				{
				this.state = 187;
				this.match(LuaParser.COL);
				this.state = 188;
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
			this.state = 191;
			this.var_();
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15) {
				{
				{
				this.state = 192;
				this.match(LuaParser.COMMA);
				this.state = 193;
				this.var_();
				}
				}
				this.state = 198;
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
			this.state = 199;
			this.match(LuaParser.NAME);
			this.state = 204;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 200;
					this.match(LuaParser.COMMA);
					this.state = 201;
					this.match(LuaParser.NAME);
					}
					}
				}
				this.state = 206;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
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
			this.state = 207;
			this.exp(0);
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15) {
				{
				{
				this.state = 208;
				this.match(LuaParser.COMMA);
				this.state = 209;
				this.exp(0);
				}
				}
				this.state = 214;
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
			this.state = 227;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 24:
				{
				localctx = new Exp_nilContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 216;
				this.match(LuaParser.NIL);
				}
				break;
			case 25:
				{
				localctx = new Exp_falseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 217;
				this.match(LuaParser.FALSE);
				}
				break;
			case 26:
				{
				localctx = new Exp_trueContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 218;
				this.match(LuaParser.TRUE);
				}
				break;
			case 61:
			case 62:
			case 63:
			case 64:
				{
				localctx = new Exp_numberContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 219;
				this.number_();
				}
				break;
			case 58:
			case 59:
			case 60:
				{
				localctx = new Exp_stringContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 220;
				this.string_();
				}
				break;
			case 55:
				{
				localctx = new Exp_varargContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 221;
				this.match(LuaParser.DDD);
				}
				break;
			case 17:
				{
				localctx = new Exp_function_defContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 222;
				this.functiondef();
				}
				break;
			case 31:
			case 57:
				{
				localctx = new Stat_prefix_expContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 223;
				this.prefixexp();
				}
				break;
			case 46:
				{
				localctx = new Stat_table_construnctorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 224;
				this.tableconstructor();
				}
				break;
			case 28:
			case 29:
			case 30:
			case 33:
				{
				localctx = new Exp_unaryContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 225;
				_la = this._input.LA(1);
				if(!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & 39) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 226;
				this.exp(8);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 255;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 253;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
					case 1:
						{
						localctx = new Exp_exponentContext(this, new ExpContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 229;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						{
						this.state = 230;
						this.match(LuaParser.CARET);
						}
						this.state = 231;
						this.exp(9);
						}
						break;
					case 2:
						{
						localctx = new Exp_arithmetic_highContext(this, new ExpContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 232;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 233;
						_la = this._input.LA(1);
						if(!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 131331) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 234;
						this.exp(8);
						}
						break;
					case 3:
						{
						localctx = new Exp_arithmetic_lowContext(this, new ExpContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 235;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 236;
						_la = this._input.LA(1);
						if(!(_la===29 || _la===44)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 237;
						this.exp(7);
						}
						break;
					case 4:
						{
						localctx = new Exp_concatContext(this, new ExpContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 238;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						{
						this.state = 239;
						this.match(LuaParser.DD);
						}
						this.state = 240;
						this.exp(5);
						}
						break;
					case 5:
						{
						localctx = new Exp_relContext(this, new ExpContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 241;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 242;
						_la = this._input.LA(1);
						if(!(_la===19 || _la===20 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 66563) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 243;
						this.exp(5);
						}
						break;
					case 6:
						{
						localctx = new Exp_andContext(this, new ExpContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 244;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						{
						this.state = 245;
						this.match(LuaParser.AND);
						}
						this.state = 246;
						this.exp(4);
						}
						break;
					case 7:
						{
						localctx = new Exp_orContext(this, new ExpContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 247;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						{
						this.state = 248;
						this.match(LuaParser.OR);
						}
						this.state = 249;
						this.exp(3);
						}
						break;
					case 8:
						{
						localctx = new Exp_bitsContext(this, new ExpContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 250;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 251;
						_la = this._input.LA(1);
						if(!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & 16777665) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 252;
						this.exp(2);
						}
						break;
					}
					}
				}
				this.state = 257;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
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
			this.state = 268;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				localctx = new Var_nameContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 258;
				this.match(LuaParser.NAME);
				}
				break;
			case 2:
				localctx = new Var_expContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 259;
				this.prefixexp();
				this.state = 266;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 48:
					{
					this.state = 260;
					this.match(LuaParser.OB);
					this.state = 261;
					this.exp(0);
					this.state = 262;
					this.match(LuaParser.CB);
					}
					break;
				case 27:
					{
					this.state = 264;
					this.match(LuaParser.DOT);
					this.state = 265;
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
			this.state = 308;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				localctx = new Prefixexp_nameContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 270;
				this.match(LuaParser.NAME);
				this.state = 279;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 277;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 48:
							{
							this.state = 271;
							this.match(LuaParser.OB);
							this.state = 272;
							this.exp(0);
							this.state = 273;
							this.match(LuaParser.CB);
							}
							break;
						case 27:
							{
							this.state = 275;
							this.match(LuaParser.DOT);
							this.state = 276;
							this.match(LuaParser.NAME);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 281;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
				}
				}
				break;
			case 2:
				localctx = new Prefixexp_function_callContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 282;
				this.functioncall(0);
				this.state = 291;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 289;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 48:
							{
							this.state = 283;
							this.match(LuaParser.OB);
							this.state = 284;
							this.exp(0);
							this.state = 285;
							this.match(LuaParser.CB);
							}
							break;
						case 27:
							{
							this.state = 287;
							this.match(LuaParser.DOT);
							this.state = 288;
							this.match(LuaParser.NAME);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 293;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
				}
				}
				break;
			case 3:
				localctx = new Prefixexp_expContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 294;
				this.match(LuaParser.OP);
				this.state = 295;
				this.exp(0);
				this.state = 296;
				this.match(LuaParser.CP);
				this.state = 305;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 303;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 48:
							{
							this.state = 297;
							this.match(LuaParser.OB);
							this.state = 298;
							this.exp(0);
							this.state = 299;
							this.match(LuaParser.CB);
							}
							break;
						case 27:
							{
							this.state = 301;
							this.match(LuaParser.DOT);
							this.state = 302;
							this.match(LuaParser.NAME);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 307;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
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
			this.state = 373;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				localctx = new Fcall_nameContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 311;
				this.match(LuaParser.NAME);
				this.state = 320;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===27 || _la===48) {
					{
					this.state = 318;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 48:
						{
						this.state = 312;
						this.match(LuaParser.OB);
						this.state = 313;
						this.exp(0);
						this.state = 314;
						this.match(LuaParser.CB);
						}
						break;
					case 27:
						{
						this.state = 316;
						this.match(LuaParser.DOT);
						this.state = 317;
						this.match(LuaParser.NAME);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 322;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 323;
				this.args();
				}
				break;
			case 2:
				{
				localctx = new Fcall_expContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 324;
				this.match(LuaParser.OP);
				this.state = 325;
				this.exp(0);
				this.state = 326;
				this.match(LuaParser.CP);
				this.state = 335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===27 || _la===48) {
					{
					this.state = 333;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 48:
						{
						this.state = 327;
						this.match(LuaParser.OB);
						this.state = 328;
						this.exp(0);
						this.state = 329;
						this.match(LuaParser.CB);
						}
						break;
					case 27:
						{
						this.state = 331;
						this.match(LuaParser.DOT);
						this.state = 332;
						this.match(LuaParser.NAME);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 337;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 338;
				this.args();
				}
				break;
			case 3:
				{
				localctx = new Fcall_name_extContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 340;
				this.match(LuaParser.NAME);
				this.state = 349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===27 || _la===48) {
					{
					this.state = 347;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 48:
						{
						this.state = 341;
						this.match(LuaParser.OB);
						this.state = 342;
						this.exp(0);
						this.state = 343;
						this.match(LuaParser.CB);
						}
						break;
					case 27:
						{
						this.state = 345;
						this.match(LuaParser.DOT);
						this.state = 346;
						this.match(LuaParser.NAME);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 351;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 352;
				this.match(LuaParser.COL);
				this.state = 353;
				this.match(LuaParser.NAME);
				this.state = 354;
				this.args();
				}
				break;
			case 4:
				{
				localctx = new Fcall_exp_extContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 355;
				this.match(LuaParser.OP);
				this.state = 356;
				this.exp(0);
				this.state = 357;
				this.match(LuaParser.CP);
				this.state = 366;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===27 || _la===48) {
					{
					this.state = 364;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 48:
						{
						this.state = 358;
						this.match(LuaParser.OB);
						this.state = 359;
						this.exp(0);
						this.state = 360;
						this.match(LuaParser.CB);
						}
						break;
					case 27:
						{
						this.state = 362;
						this.match(LuaParser.DOT);
						this.state = 363;
						this.match(LuaParser.NAME);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 368;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 369;
				this.match(LuaParser.COL);
				this.state = 370;
				this.match(LuaParser.NAME);
				this.state = 371;
				this.args();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 405;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 403;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 42, this._ctx) ) {
					case 1:
						{
						localctx = new Fcall_function_callContext(this, new FunctioncallContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_functioncall);
						this.state = 375;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 384;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===27 || _la===48) {
							{
							this.state = 382;
							this._errHandler.sync(this);
							switch (this._input.LA(1)) {
							case 48:
								{
								this.state = 376;
								this.match(LuaParser.OB);
								this.state = 377;
								this.exp(0);
								this.state = 378;
								this.match(LuaParser.CB);
								}
								break;
							case 27:
								{
								this.state = 380;
								this.match(LuaParser.DOT);
								this.state = 381;
								this.match(LuaParser.NAME);
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							}
							this.state = 386;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 387;
						this.args();
						}
						break;
					case 2:
						{
						localctx = new Fcall_function_call_extContext(this, new FunctioncallContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_functioncall);
						this.state = 388;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 397;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===27 || _la===48) {
							{
							this.state = 395;
							this._errHandler.sync(this);
							switch (this._input.LA(1)) {
							case 48:
								{
								this.state = 389;
								this.match(LuaParser.OB);
								this.state = 390;
								this.exp(0);
								this.state = 391;
								this.match(LuaParser.CB);
								}
								break;
							case 27:
								{
								this.state = 393;
								this.match(LuaParser.DOT);
								this.state = 394;
								this.match(LuaParser.NAME);
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							}
							this.state = 399;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 400;
						this.match(LuaParser.COL);
						this.state = 401;
						this.match(LuaParser.NAME);
						this.state = 402;
						this.args();
						}
						break;
					}
					}
				}
				this.state = 407;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
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
			this.state = 415;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 31:
				localctx = new Args_exp_listContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 408;
				this.match(LuaParser.OP);
				this.state = 410;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4144103424) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4282392577) !== 0)) {
					{
					this.state = 409;
					this.explist();
					}
				}

				this.state = 412;
				this.match(LuaParser.CP);
				}
				break;
			case 46:
				localctx = new Args_table_constructorContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 413;
				this.tableconstructor();
				}
				break;
			case 58:
			case 59:
			case 60:
				localctx = new Args_stringContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 414;
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
			this.state = 417;
			this.match(LuaParser.FUNCTION);
			this.state = 418;
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
			this.state = 420;
			this.match(LuaParser.OP);
			this.state = 421;
			this.parlist();
			this.state = 422;
			this.match(LuaParser.CP);
			this.state = 423;
			this.block();
			this.state = 424;
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
			this.state = 433;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 57:
				localctx = new Parlist_namellistContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 426;
				this.namelist();
				this.state = 429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===15) {
					{
					this.state = 427;
					this.match(LuaParser.COMMA);
					this.state = 428;
					this.match(LuaParser.DDD);
					}
				}

				}
				break;
			case 55:
				localctx = new Parlist_varargContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 431;
				this.match(LuaParser.DDD);
				}
				break;
			case 32:
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
			this.state = 435;
			this.match(LuaParser.OCU);
			this.state = 437;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4144103424) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4282425345) !== 0)) {
				{
				this.state = 436;
				this.fieldlist();
				}
			}

			this.state = 439;
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
			this.state = 441;
			this.field();
			this.state = 447;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 442;
					this.fieldsep();
					this.state = 443;
					this.field();
					}
					}
				}
				this.state = 449;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 49, this._ctx);
			}
			this.state = 451;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===15) {
				{
				this.state = 450;
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
			this.state = 463;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				localctx = new Field_exp_expContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 453;
				this.match(LuaParser.OB);
				this.state = 454;
				this.exp(0);
				this.state = 455;
				this.match(LuaParser.CB);
				this.state = 456;
				this.match(LuaParser.EQ);
				this.state = 457;
				this.exp(0);
				}
				break;
			case 2:
				localctx = new Field_name_expContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 459;
				this.match(LuaParser.NAME);
				this.state = 460;
				this.match(LuaParser.EQ);
				this.state = 461;
				this.exp(0);
				}
				break;
			case 3:
				localctx = new Field_expContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 462;
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
			this.state = 465;
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
			this.state = 471;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 61:
				localctx = new Number_intContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 467;
				this.match(LuaParser.INT);
				}
				break;
			case 62:
				localctx = new Number_hexContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 468;
				this.match(LuaParser.HEX);
				}
				break;
			case 63:
				localctx = new Number_floatContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 469;
				this.match(LuaParser.FLOAT);
				}
				break;
			case 64:
				localctx = new Number_hex_floatContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 470;
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
			this.state = 476;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 58:
				localctx = new String_stringContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 473;
				this.match(LuaParser.NORMALSTRING);
				}
				break;
			case 59:
				localctx = new String_charstringContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 474;
				this.match(LuaParser.CHARSTRING);
				}
				break;
			case 60:
				localctx = new String_longstringContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 475;
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

	public static readonly _serializedATN: number[] = [4,1,68,479,2,0,7,0,2,
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
	5,163,8,5,1,6,1,6,3,6,167,8,6,1,6,1,6,3,6,171,8,6,1,6,3,6,174,8,6,1,7,1,
	7,1,7,1,7,1,8,1,8,1,8,5,8,183,8,8,10,8,12,8,186,9,8,1,8,1,8,3,8,190,8,8,
	1,9,1,9,1,9,5,9,195,8,9,10,9,12,9,198,9,9,1,10,1,10,1,10,5,10,203,8,10,
	10,10,12,10,206,9,10,1,11,1,11,1,11,5,11,211,8,11,10,11,12,11,214,9,11,
	1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,228,8,
	12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
	1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,254,8,12,10,12,12,
	12,257,9,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,267,8,13,3,13,
	269,8,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,5,14,278,8,14,10,14,12,14,281,
	9,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,5,14,290,8,14,10,14,12,14,293,9,
	14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,5,14,304,8,14,10,14,12,
	14,307,9,14,3,14,309,8,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,
	319,8,15,10,15,12,15,322,9,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
	15,1,15,5,15,334,8,15,10,15,12,15,337,9,15,1,15,1,15,1,15,1,15,1,15,1,15,
	1,15,1,15,1,15,5,15,348,8,15,10,15,12,15,351,9,15,1,15,1,15,1,15,1,15,1,
	15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,365,8,15,10,15,12,15,368,9,15,
	1,15,1,15,1,15,1,15,3,15,374,8,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,
	15,383,8,15,10,15,12,15,386,9,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
	5,15,396,8,15,10,15,12,15,399,9,15,1,15,1,15,1,15,5,15,404,8,15,10,15,12,
	15,407,9,15,1,16,1,16,3,16,411,8,16,1,16,1,16,1,16,3,16,416,8,16,1,17,1,
	17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,3,19,430,8,19,1,19,
	1,19,3,19,434,8,19,1,20,1,20,3,20,438,8,20,1,20,1,20,1,21,1,21,1,21,1,21,
	5,21,446,8,21,10,21,12,21,449,9,21,1,21,3,21,452,8,21,1,22,1,22,1,22,1,
	22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,464,8,22,1,23,1,23,1,24,1,24,1,24,
	1,24,3,24,472,8,24,1,25,1,25,1,25,3,25,477,8,25,1,25,0,2,24,30,26,0,2,4,
	6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,0,6,
	2,0,28,30,33,33,3,0,37,38,45,45,54,54,2,0,29,29,44,44,4,0,19,20,40,41,50,
	50,56,56,3,0,28,28,34,36,52,52,2,0,1,1,15,15,543,0,52,1,0,0,0,2,55,1,0,
	0,0,4,60,1,0,0,0,6,147,1,0,0,0,8,149,1,0,0,0,10,162,1,0,0,0,12,170,1,0,
	0,0,14,175,1,0,0,0,16,179,1,0,0,0,18,191,1,0,0,0,20,199,1,0,0,0,22,207,
	1,0,0,0,24,227,1,0,0,0,26,268,1,0,0,0,28,308,1,0,0,0,30,373,1,0,0,0,32,
	415,1,0,0,0,34,417,1,0,0,0,36,420,1,0,0,0,38,433,1,0,0,0,40,435,1,0,0,0,
	42,441,1,0,0,0,44,463,1,0,0,0,46,465,1,0,0,0,48,471,1,0,0,0,50,476,1,0,
	0,0,52,53,3,2,1,0,53,54,5,0,0,1,54,1,1,0,0,0,55,56,3,4,2,0,56,3,1,0,0,0,
	57,59,3,6,3,0,58,57,1,0,0,0,59,62,1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,61,
	64,1,0,0,0,62,60,1,0,0,0,63,65,3,12,6,0,64,63,1,0,0,0,64,65,1,0,0,0,65,
	5,1,0,0,0,66,148,5,1,0,0,67,68,3,18,9,0,68,69,5,2,0,0,69,70,3,22,11,0,70,
	148,1,0,0,0,71,148,3,30,15,0,72,148,3,14,7,0,73,148,5,3,0,0,74,75,5,4,0,
	0,75,148,5,57,0,0,76,77,5,5,0,0,77,78,3,4,2,0,78,79,5,6,0,0,79,148,1,0,
	0,0,80,81,5,7,0,0,81,82,3,24,12,0,82,83,5,5,0,0,83,84,3,4,2,0,84,85,5,6,
	0,0,85,148,1,0,0,0,86,87,5,8,0,0,87,88,3,4,2,0,88,89,5,9,0,0,89,90,3,24,
	12,0,90,148,1,0,0,0,91,92,5,10,0,0,92,93,3,24,12,0,93,94,5,11,0,0,94,102,
	3,4,2,0,95,96,5,12,0,0,96,97,3,24,12,0,97,98,5,11,0,0,98,99,3,4,2,0,99,
	101,1,0,0,0,100,95,1,0,0,0,101,104,1,0,0,0,102,100,1,0,0,0,102,103,1,0,
	0,0,103,107,1,0,0,0,104,102,1,0,0,0,105,106,5,13,0,0,106,108,3,4,2,0,107,
	105,1,0,0,0,107,108,1,0,0,0,108,109,1,0,0,0,109,110,5,6,0,0,110,148,1,0,
	0,0,111,112,5,14,0,0,112,113,5,57,0,0,113,114,5,2,0,0,114,115,3,24,12,0,
	115,116,5,15,0,0,116,119,3,24,12,0,117,118,5,15,0,0,118,120,3,24,12,0,119,
	117,1,0,0,0,119,120,1,0,0,0,120,121,1,0,0,0,121,122,5,5,0,0,122,123,3,4,
	2,0,123,124,5,6,0,0,124,148,1,0,0,0,125,126,5,14,0,0,126,127,3,20,10,0,
	127,128,5,16,0,0,128,129,3,22,11,0,129,130,5,5,0,0,130,131,3,4,2,0,131,
	132,5,6,0,0,132,148,1,0,0,0,133,134,5,17,0,0,134,135,3,16,8,0,135,136,3,
	36,18,0,136,148,1,0,0,0,137,138,5,18,0,0,138,139,5,17,0,0,139,140,5,57,
	0,0,140,148,3,36,18,0,141,142,5,18,0,0,142,145,3,8,4,0,143,144,5,2,0,0,
	144,146,3,22,11,0,145,143,1,0,0,0,145,146,1,0,0,0,146,148,1,0,0,0,147,66,
	1,0,0,0,147,67,1,0,0,0,147,71,1,0,0,0,147,72,1,0,0,0,147,73,1,0,0,0,147,
	74,1,0,0,0,147,76,1,0,0,0,147,80,1,0,0,0,147,86,1,0,0,0,147,91,1,0,0,0,
	147,111,1,0,0,0,147,125,1,0,0,0,147,133,1,0,0,0,147,137,1,0,0,0,147,141,
	1,0,0,0,148,7,1,0,0,0,149,150,5,57,0,0,150,156,3,10,5,0,151,152,5,15,0,
	0,152,153,5,57,0,0,153,155,3,10,5,0,154,151,1,0,0,0,155,158,1,0,0,0,156,
	154,1,0,0,0,156,157,1,0,0,0,157,9,1,0,0,0,158,156,1,0,0,0,159,160,5,19,
	0,0,160,161,5,57,0,0,161,163,5,20,0,0,162,159,1,0,0,0,162,163,1,0,0,0,163,
	11,1,0,0,0,164,166,5,21,0,0,165,167,3,22,11,0,166,165,1,0,0,0,166,167,1,
	0,0,0,167,171,1,0,0,0,168,171,5,3,0,0,169,171,5,22,0,0,170,164,1,0,0,0,
	170,168,1,0,0,0,170,169,1,0,0,0,171,173,1,0,0,0,172,174,5,1,0,0,173,172,
	1,0,0,0,173,174,1,0,0,0,174,13,1,0,0,0,175,176,5,23,0,0,176,177,5,57,0,
	0,177,178,5,23,0,0,178,15,1,0,0,0,179,184,5,57,0,0,180,181,5,27,0,0,181,
	183,5,57,0,0,182,180,1,0,0,0,183,186,1,0,0,0,184,182,1,0,0,0,184,185,1,
	0,0,0,185,189,1,0,0,0,186,184,1,0,0,0,187,188,5,39,0,0,188,190,5,57,0,0,
	189,187,1,0,0,0,189,190,1,0,0,0,190,17,1,0,0,0,191,196,3,26,13,0,192,193,
	5,15,0,0,193,195,3,26,13,0,194,192,1,0,0,0,195,198,1,0,0,0,196,194,1,0,
	0,0,196,197,1,0,0,0,197,19,1,0,0,0,198,196,1,0,0,0,199,204,5,57,0,0,200,
	201,5,15,0,0,201,203,5,57,0,0,202,200,1,0,0,0,203,206,1,0,0,0,204,202,1,
	0,0,0,204,205,1,0,0,0,205,21,1,0,0,0,206,204,1,0,0,0,207,212,3,24,12,0,
	208,209,5,15,0,0,209,211,3,24,12,0,210,208,1,0,0,0,211,214,1,0,0,0,212,
	210,1,0,0,0,212,213,1,0,0,0,213,23,1,0,0,0,214,212,1,0,0,0,215,216,6,12,
	-1,0,216,228,5,24,0,0,217,228,5,25,0,0,218,228,5,26,0,0,219,228,3,48,24,
	0,220,228,3,50,25,0,221,228,5,55,0,0,222,228,3,34,17,0,223,228,3,28,14,
	0,224,228,3,40,20,0,225,226,7,0,0,0,226,228,3,24,12,8,227,215,1,0,0,0,227,
	217,1,0,0,0,227,218,1,0,0,0,227,219,1,0,0,0,227,220,1,0,0,0,227,221,1,0,
	0,0,227,222,1,0,0,0,227,223,1,0,0,0,227,224,1,0,0,0,227,225,1,0,0,0,228,
	255,1,0,0,0,229,230,10,9,0,0,230,231,5,53,0,0,231,254,3,24,12,9,232,233,
	10,7,0,0,233,234,7,1,0,0,234,254,3,24,12,8,235,236,10,6,0,0,236,237,7,2,
	0,0,237,254,3,24,12,7,238,239,10,5,0,0,239,240,5,51,0,0,240,254,3,24,12,
	5,241,242,10,4,0,0,242,243,7,3,0,0,243,254,3,24,12,5,244,245,10,3,0,0,245,
	246,5,42,0,0,246,254,3,24,12,4,247,248,10,2,0,0,248,249,5,43,0,0,249,254,
	3,24,12,3,250,251,10,1,0,0,251,252,7,4,0,0,252,254,3,24,12,2,253,229,1,
	0,0,0,253,232,1,0,0,0,253,235,1,0,0,0,253,238,1,0,0,0,253,241,1,0,0,0,253,
	244,1,0,0,0,253,247,1,0,0,0,253,250,1,0,0,0,254,257,1,0,0,0,255,253,1,0,
	0,0,255,256,1,0,0,0,256,25,1,0,0,0,257,255,1,0,0,0,258,269,5,57,0,0,259,
	266,3,28,14,0,260,261,5,48,0,0,261,262,3,24,12,0,262,263,5,49,0,0,263,267,
	1,0,0,0,264,265,5,27,0,0,265,267,5,57,0,0,266,260,1,0,0,0,266,264,1,0,0,
	0,267,269,1,0,0,0,268,258,1,0,0,0,268,259,1,0,0,0,269,27,1,0,0,0,270,279,
	5,57,0,0,271,272,5,48,0,0,272,273,3,24,12,0,273,274,5,49,0,0,274,278,1,
	0,0,0,275,276,5,27,0,0,276,278,5,57,0,0,277,271,1,0,0,0,277,275,1,0,0,0,
	278,281,1,0,0,0,279,277,1,0,0,0,279,280,1,0,0,0,280,309,1,0,0,0,281,279,
	1,0,0,0,282,291,3,30,15,0,283,284,5,48,0,0,284,285,3,24,12,0,285,286,5,
	49,0,0,286,290,1,0,0,0,287,288,5,27,0,0,288,290,5,57,0,0,289,283,1,0,0,
	0,289,287,1,0,0,0,290,293,1,0,0,0,291,289,1,0,0,0,291,292,1,0,0,0,292,309,
	1,0,0,0,293,291,1,0,0,0,294,295,5,31,0,0,295,296,3,24,12,0,296,305,5,32,
	0,0,297,298,5,48,0,0,298,299,3,24,12,0,299,300,5,49,0,0,300,304,1,0,0,0,
	301,302,5,27,0,0,302,304,5,57,0,0,303,297,1,0,0,0,303,301,1,0,0,0,304,307,
	1,0,0,0,305,303,1,0,0,0,305,306,1,0,0,0,306,309,1,0,0,0,307,305,1,0,0,0,
	308,270,1,0,0,0,308,282,1,0,0,0,308,294,1,0,0,0,309,29,1,0,0,0,310,311,
	6,15,-1,0,311,320,5,57,0,0,312,313,5,48,0,0,313,314,3,24,12,0,314,315,5,
	49,0,0,315,319,1,0,0,0,316,317,5,27,0,0,317,319,5,57,0,0,318,312,1,0,0,
	0,318,316,1,0,0,0,319,322,1,0,0,0,320,318,1,0,0,0,320,321,1,0,0,0,321,323,
	1,0,0,0,322,320,1,0,0,0,323,374,3,32,16,0,324,325,5,31,0,0,325,326,3,24,
	12,0,326,335,5,32,0,0,327,328,5,48,0,0,328,329,3,24,12,0,329,330,5,49,0,
	0,330,334,1,0,0,0,331,332,5,27,0,0,332,334,5,57,0,0,333,327,1,0,0,0,333,
	331,1,0,0,0,334,337,1,0,0,0,335,333,1,0,0,0,335,336,1,0,0,0,336,338,1,0,
	0,0,337,335,1,0,0,0,338,339,3,32,16,0,339,374,1,0,0,0,340,349,5,57,0,0,
	341,342,5,48,0,0,342,343,3,24,12,0,343,344,5,49,0,0,344,348,1,0,0,0,345,
	346,5,27,0,0,346,348,5,57,0,0,347,341,1,0,0,0,347,345,1,0,0,0,348,351,1,
	0,0,0,349,347,1,0,0,0,349,350,1,0,0,0,350,352,1,0,0,0,351,349,1,0,0,0,352,
	353,5,39,0,0,353,354,5,57,0,0,354,374,3,32,16,0,355,356,5,31,0,0,356,357,
	3,24,12,0,357,366,5,32,0,0,358,359,5,48,0,0,359,360,3,24,12,0,360,361,5,
	49,0,0,361,365,1,0,0,0,362,363,5,27,0,0,363,365,5,57,0,0,364,358,1,0,0,
	0,364,362,1,0,0,0,365,368,1,0,0,0,366,364,1,0,0,0,366,367,1,0,0,0,367,369,
	1,0,0,0,368,366,1,0,0,0,369,370,5,39,0,0,370,371,5,57,0,0,371,372,3,32,
	16,0,372,374,1,0,0,0,373,310,1,0,0,0,373,324,1,0,0,0,373,340,1,0,0,0,373,
	355,1,0,0,0,374,405,1,0,0,0,375,384,10,5,0,0,376,377,5,48,0,0,377,378,3,
	24,12,0,378,379,5,49,0,0,379,383,1,0,0,0,380,381,5,27,0,0,381,383,5,57,
	0,0,382,376,1,0,0,0,382,380,1,0,0,0,383,386,1,0,0,0,384,382,1,0,0,0,384,
	385,1,0,0,0,385,387,1,0,0,0,386,384,1,0,0,0,387,404,3,32,16,0,388,397,10,
	2,0,0,389,390,5,48,0,0,390,391,3,24,12,0,391,392,5,49,0,0,392,396,1,0,0,
	0,393,394,5,27,0,0,394,396,5,57,0,0,395,389,1,0,0,0,395,393,1,0,0,0,396,
	399,1,0,0,0,397,395,1,0,0,0,397,398,1,0,0,0,398,400,1,0,0,0,399,397,1,0,
	0,0,400,401,5,39,0,0,401,402,5,57,0,0,402,404,3,32,16,0,403,375,1,0,0,0,
	403,388,1,0,0,0,404,407,1,0,0,0,405,403,1,0,0,0,405,406,1,0,0,0,406,31,
	1,0,0,0,407,405,1,0,0,0,408,410,5,31,0,0,409,411,3,22,11,0,410,409,1,0,
	0,0,410,411,1,0,0,0,411,412,1,0,0,0,412,416,5,32,0,0,413,416,3,40,20,0,
	414,416,3,50,25,0,415,408,1,0,0,0,415,413,1,0,0,0,415,414,1,0,0,0,416,33,
	1,0,0,0,417,418,5,17,0,0,418,419,3,36,18,0,419,35,1,0,0,0,420,421,5,31,
	0,0,421,422,3,38,19,0,422,423,5,32,0,0,423,424,3,4,2,0,424,425,5,6,0,0,
	425,37,1,0,0,0,426,429,3,20,10,0,427,428,5,15,0,0,428,430,5,55,0,0,429,
	427,1,0,0,0,429,430,1,0,0,0,430,434,1,0,0,0,431,434,5,55,0,0,432,434,1,
	0,0,0,433,426,1,0,0,0,433,431,1,0,0,0,433,432,1,0,0,0,434,39,1,0,0,0,435,
	437,5,46,0,0,436,438,3,42,21,0,437,436,1,0,0,0,437,438,1,0,0,0,438,439,
	1,0,0,0,439,440,5,47,0,0,440,41,1,0,0,0,441,447,3,44,22,0,442,443,3,46,
	23,0,443,444,3,44,22,0,444,446,1,0,0,0,445,442,1,0,0,0,446,449,1,0,0,0,
	447,445,1,0,0,0,447,448,1,0,0,0,448,451,1,0,0,0,449,447,1,0,0,0,450,452,
	3,46,23,0,451,450,1,0,0,0,451,452,1,0,0,0,452,43,1,0,0,0,453,454,5,48,0,
	0,454,455,3,24,12,0,455,456,5,49,0,0,456,457,5,2,0,0,457,458,3,24,12,0,
	458,464,1,0,0,0,459,460,5,57,0,0,460,461,5,2,0,0,461,464,3,24,12,0,462,
	464,3,24,12,0,463,453,1,0,0,0,463,459,1,0,0,0,463,462,1,0,0,0,464,45,1,
	0,0,0,465,466,7,5,0,0,466,47,1,0,0,0,467,472,5,61,0,0,468,472,5,62,0,0,
	469,472,5,63,0,0,470,472,5,64,0,0,471,467,1,0,0,0,471,468,1,0,0,0,471,469,
	1,0,0,0,471,470,1,0,0,0,472,49,1,0,0,0,473,477,5,58,0,0,474,477,5,59,0,
	0,475,477,5,60,0,0,476,473,1,0,0,0,476,474,1,0,0,0,476,475,1,0,0,0,477,
	51,1,0,0,0,54,60,64,102,107,119,145,147,156,162,166,170,173,184,189,196,
	204,212,227,253,255,266,268,277,279,289,291,303,305,308,318,320,333,335,
	347,349,364,366,373,382,384,395,397,403,405,410,415,429,433,437,447,451,
	463,471,476];

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
	public BREAK(): TerminalNode {
		return this.getToken(LuaParser.BREAK, 0);
	}
	public CONTINUE(): TerminalNode {
		return this.getToken(LuaParser.CONTINUE, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(LuaParser.SEMI, 0);
	}
	public explist(): ExplistContext {
		return this.getTypedRuleContext(ExplistContext, 0) as ExplistContext;
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
