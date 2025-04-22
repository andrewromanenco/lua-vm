import LuaInterpreter from './interpreter/LuaInterpreter';
import {
  InternalListValue,
  StringValue,
  TableValue,
  Value,
} from './interpreter/types';
import { executeWithInterpreter } from './interpreter/utils';
import VMMarshaller from './marshaller';
import basicStdLib from './stdlib/basic';
import stringStdLib from './stdlib/strings';
import tableStdLib from './stdlib/table';

class VMBuilder {
  private envPreset = new TableValue();

  witStdLib(): VMBuilder {
    this.envPreset.mergeInWithOverride(basicStdLib);
    this.envPreset.mergeInWithOverride(stringStdLib);
    this.envPreset.mergeInWithOverride(tableStdLib);
    return this;
  }

  build(): VM {
    const vm = new VM();
    this.envPreset.getKeys().forEach(key => {
      vm.setLuaVar(key, this.envPreset.get(key));
    });
    return vm;
  }

  buildWithMarshaller(): VMMarshaller {
    return new VMMarshaller(this.build());
  }
}

class VM {
  private envPreset = new TableValue();

  setLuaVar(key: Value, value: Value): void {
    this.envPreset.set(key, value);
  }

  newThread(): ExecutionThread {
    const thread = new ExecutionThread();
    this.envPreset.getKeys().forEach(key => {
      const value = this.envPreset.get(key);
      thread.setLuaVar(key, value);
    });
    return thread;
  }

  executeOnce(lua: string): ExecutionResult {
    const thread = this.newThread();
    return thread.execute(lua);
  }
}

class ExecutionThread {
  private readonly vars: Map<Value, Value> = new Map<Value, Value>();
  private readonly interpreter = new LuaInterpreter();

  setLuaVar(name: Value, value: Value): ExecutionThread {
    this.vars.set(name, value);
    return this;
  }

  execute(lua: string): ExecutionResult {
    this.vars.forEach((v, k) => {
      this.interpreter.setVar(k, v);
    });
    const result = executeWithInterpreter(lua, this.interpreter, false);
    return new ExecutionResult(result, this.interpreter.getAllGlobalVars());
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

export { VMBuilder, VM };
