import { NumberValue, StringValue, Value } from "@src/interpreter/types";
import VMBuilder from "@src/vm";
import { expectToBeNumber } from "./interpreter/test_utils";
import ExtFunction from "@src/interpreter/ExtFunction";
import { RuntimeError } from "@src/interpreter/errors";

test("call external fucntion", () => {
    const lua = `
    a = 1
    b = 2
    d = 10
    c = f(a, b)
    return c, d
    `;

    function add(args: Value[]): Value[] {
        const a = args[0] as NumberValue;
        const b = args[1] as NumberValue;
        return [NumberValue.from(a.number + b.number)];
    }

    const vm = new VMBuilder().build();
    const thread = vm.newThread();
    thread.setLuaVar(StringValue.from("f"), ExtFunction.of(add));
    const result = thread.execute(lua);
    expectToBeNumber(result.globalVar("a"), 1);
    expectToBeNumber(result.globalVar("b"), 2);
    expectToBeNumber(result.globalVar("c"), 3);
    expectToBeNumber(result.globalVar("d"), 10);
    expect(result.hasReturnValue()).toBeTruthy();
    expect(result.returnValueAsList().length).toBe(2);
    expectToBeNumber(result.returnValueAsList()[0], 3);
    expectToBeNumber(result.returnValueAsList()[1], 10);
});

test("external function errors", () => {
    const lua = `
    a = 1
    b = 2
    d = 10
    c = f(a, b)
    return c, d
    `;

    function add(_args: Value[]): Value[] {
        throw new Error("ups");
    }

    const vm = new VMBuilder().build();
    const thread = vm.newThread();
    thread.setLuaVar(StringValue.from("f"), ExtFunction.of(add));

    let exception;
    try {
        thread.execute(lua);
    } catch (e) {
        exception = e;
    }
    expect(exception).toBeInstanceOf(RuntimeError);
    expect((exception as RuntimeError).message)
        .toBe("Runtime error: (line: 5, col: 8): Error in external function \"add\"");
});
