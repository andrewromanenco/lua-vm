import { ParserRuleContext } from "antlr4";
import { RuntimeError } from "./interpreter/errors";
import { BooleanValue, FunctionValue, NilValue, NumberValue, StringValue, TableValue, Value } from "./interpreter/types";
import { VM } from "./vm";
import ExtFunction from "./interpreter/ExtFunction";

function luaToTs(value: Value): any {
    if (value instanceof NilValue) {
        return undefined;
    } else if (value instanceof BooleanValue) {
        return (value as BooleanValue).boolean;
    } else if (value instanceof NumberValue) {
        return (value as NumberValue).number;
    } else if (value instanceof StringValue) {
        return (value as StringValue).string;
    } else if (value instanceof FunctionValue) {
        return (value as FunctionValue).toString();
    } else if (value instanceof ExtFunction) {
        return (value as ExtFunction).toString();
    } else if (value instanceof TableValue) {
        const result: { [key: string]: any } = {};
        const keys = (value as TableValue).getKeys();
        keys.forEach(k => {
            result[k.toString()] = luaToTs((value as TableValue).get(k));
        });
        return result;
    } else {
        throw new RuntimeError(`[J001] No auto convertion for ${value.constructor.name}`, {} as ParserRuleContext);
    }
}

export default class VMMarshaller {
    private readonly _vm: VM;
    private _lastResult: Value[]|undefined;

    constructor(vm: VM) {
        this._vm = vm;
    }

    get vm(): VM {
        return this._vm;
    }

    get lastResult(): Value[]|undefined {
        return this._lastResult;
    }

    executeOnce(lua: string): any[] {
        const thread = this._vm.newThread();
        const result = thread.execute(lua);
        if (result.hasReturnValue()) {
            const list = result.returnValueAsList();
            this._lastResult = list;
            return list.map((value: Value) => luaToTs(value));
        } else {
            return [];
        }
    }
}
