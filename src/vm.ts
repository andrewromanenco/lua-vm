import LuaInterpreter from "./interpreter/LuaInterpreter";
import { InternalListValue, StringValue, TableValue, Value } from "./interpreter/types";
import { execute } from "./interpreter/utils";

export default class VMBuilder {
    build(): VM {
        return new VM();
    }
}

class VM {
    execute(lua: string): ExecutionResult {
        const interpreter = new LuaInterpreter();
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
