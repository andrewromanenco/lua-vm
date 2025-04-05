import { NotYetImplemented } from "@src/interpreter/errors";
import LuaInterpreter from "@src/interpreter/LuaInterpreter";
import {

Stat_labelContext,
Stat_gotoContext,
Stat_local_functionContext,
AttribContext,
LabelContext,
FuncnameContext,
Exp_varargContext,
Fcall_name_extContext,
Fcall_function_callContext,
Fcall_expContext,
Fcall_exp_extContext,
Fcall_function_call_extContext,
Args_table_constructorContext,
Args_stringContext,
Parlist_varargContext,
FieldsepContext,
} from "@src/parser/LuaParser";

describe("LuaInterpreter", () => {
const interpreter = new LuaInterpreter();

const contexts = [
    { method: "visitStat_label", context: Stat_labelContext },
    { method: "visitStat_goto", context: Stat_gotoContext },
    { method: "visitStat_local_function", context: Stat_local_functionContext },
    { method: "visitAttrib", context: AttribContext },
    { method: "visitLabel", context: LabelContext },
    { method: "visitFuncname", context: FuncnameContext },
    { method: "visitExp_vararg", context: Exp_varargContext },
    { method: "visitFcall_name_ext", context: Fcall_name_extContext },
    { method: "visitFcall_function_call", context: Fcall_function_callContext },
    { method: "visitFcall_exp", context: Fcall_expContext },
    { method: "visitFcall_exp_ext", context: Fcall_exp_extContext },
    { method: "visitFcall_function_call_ext", context: Fcall_function_call_extContext },
    { method: "visitArgs_table_constructor", context: Args_table_constructorContext },
    { method: "visitArgs_string", context: Args_stringContext },
    { method: "visitParlist_vararg", context: Parlist_varargContext },
    { method: "visitFieldsep", context: FieldsepContext },
];

contexts.forEach(({ method, context }) => {
    test(`${method} throws an error`, () => {
        const ctx = {} as unknown as InstanceType<typeof context>;
        expect(() => (interpreter as any)[method](ctx)).toThrow(NotYetImplemented);
    });
});
});
