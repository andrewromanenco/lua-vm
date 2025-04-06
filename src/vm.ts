import LuaInterpreter from "./interpreter/LuaInterpreter";
import { InternalListValue, StringValue, TableValue, Value } from "./interpreter/types";
import { executeWithInterpreter } from "./interpreter/utils";
import VMMarshaller from "./marshaller";

class VMBuilder {
    build(): VM {
        return new VM();
    }

    buildWithMarshaller(): VMMarshaller {
        return new VMMarshaller(this.build());
    }
}

class VM {

    newThread(): ExecutionThread {
        return new ExecutionThread();
    }

    executeOnce(lua: string): ExecutionResult {
        const thread = this.newThread();
        return thread.execute(lua);
    }
}

class ExecutionThread {
    private readonly vars: Map<StringValue, Value> = new Map();
    private readonly interpreter = new LuaInterpreter();

    setLuaVar(name: StringValue, value: Value): ExecutionThread {
        this.vars.set(name, value);
        return this;
    }

    execute(lua: string): ExecutionResult {
        this.vars.forEach((v, k) => {
            this.interpreter.setVar(k, v);
        });
        const result = executeWithInterpreter(lua, this.interpreter, false);
        return new ExecutionResult(
            result,
            this.interpreter.getAllGlobalVars()
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

export { VMBuilder, VM }
