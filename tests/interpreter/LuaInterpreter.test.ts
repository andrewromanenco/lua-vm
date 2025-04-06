import { NotYetImplemented } from "@src/interpreter/errors";
import LuaInterpreter from "@src/interpreter/LuaInterpreter";
import {

Stat_labelContext,
Stat_gotoContext,
AttribContext,
LabelContext,
Exp_varargContext,
Parlist_varargContext,
FieldsepContext,
} from "@src/parser/LuaParser";

describe("LuaInterpreter", () => {
const interpreter = new LuaInterpreter();

const contexts = [
    { method: "visitStat_label", context: Stat_labelContext },
    { method: "visitStat_goto", context: Stat_gotoContext },
    { method: "visitAttrib", context: AttribContext },
    { method: "visitLabel", context: LabelContext },
    { method: "visitExp_vararg", context: Exp_varargContext },
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
