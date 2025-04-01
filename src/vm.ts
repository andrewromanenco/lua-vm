import LuaInterpreter from "./interpreter/LuaInterpreter";
import { InternalListValue, StringValue, TableValue, Value } from "./interpreter/types";
import { execute } from "./interpreter/utils";

export default class VMBuilder {
    build(): VM {
        return new VM();
    }
}

class VM {

    newThread(): ExecutionThread {
        return new ExecutionThread();
    }

    execute(lua: string): ExecutionResult {
        const thread = this.newThread();
        return thread.execute(lua);
    }
}

class ExecutionThread {
    private readonly vars: Map<StringValue, Value> = new Map();

    setLuaVar(name: StringValue, value: Value): ExecutionThread {
        this.vars.set(name, value);
        return this;
    }

    execute(lua: string): ExecutionResult {
        const interpreter = new LuaInterpreter();
        this.vars.forEach((v, k) => {
            interpreter.setVar(k, v);
        });
        const result = execute(lua, interpreter);
        return new ExecutionResult(
            result,
            interpreter.getAllGlobalVars()
        );
    }
}

class ExecutionResult {
    private readonly result: Value;
    private readonly globalVars: TableValue;

    constructor(result: Value, globalVars: TableValue) {
        this.result = result;
        this.globalVars = globalVars;
    }

    hasReturnValue(): boolean {
        return this.result instanceof InternalListValue;
    }

    returnValueAsList(): Value[] {
        if (this.hasReturnValue()) {
            return (this.result as InternalListValue).asList();
        } else {
            return [];
        }
    }

    globalVar(name: string): Value {
        return this.globalVars.get(StringValue.from(name));
    }
}
