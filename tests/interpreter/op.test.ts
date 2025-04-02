import VMBuilder from "@src/vm";
import { expectToBeBool } from "./test_utils";

test("relations", ()=>{
    const lua = `
        function f(a, b, c)
          return a == b, a ~= b, a == nil, a ~= nil, a == a, a == c
        end
        n1, n2, n3, n4, n5, n6 = f(10, 20, 10)
        nn1, nn2, nn3, nn4, nn5, nn6 = f(10, 10, 20)
        s1, s2, s3, s4, s5, s6 = f("alpha", "beta", "alpha")
        b1, b2, b3, b4, b5, b6 = f(true, false, true)
        x1, x2, x3, x4, x5, x6 = f(nil, nil, nil)
    `;
    const result = new VMBuilder().build().executeOnce(lua);
    expectToBeBool(result.globalVar("n1"), false);
    expectToBeBool(result.globalVar("n2"), true);
    expectToBeBool(result.globalVar("n3"), false);
    expectToBeBool(result.globalVar("n4"), true);
    expectToBeBool(result.globalVar("n5"), true);
    expectToBeBool(result.globalVar("n6"), true);

    expectToBeBool(result.globalVar("nn1"), true);
    expectToBeBool(result.globalVar("nn2"), false);
    expectToBeBool(result.globalVar("nn3"), false);
    expectToBeBool(result.globalVar("nn4"), true);
    expectToBeBool(result.globalVar("nn5"), true);
    expectToBeBool(result.globalVar("nn6"), false);

    expectToBeBool(result.globalVar("s1"), false);
    expectToBeBool(result.globalVar("s2"), true);
    expectToBeBool(result.globalVar("s3"), false);
    expectToBeBool(result.globalVar("s4"), true);
    expectToBeBool(result.globalVar("s5"), true);
    expectToBeBool(result.globalVar("s6"), true);

    expectToBeBool(result.globalVar("b1"), false);
    expectToBeBool(result.globalVar("b2"), true);
    expectToBeBool(result.globalVar("b3"), false);
    expectToBeBool(result.globalVar("b4"), true);
    expectToBeBool(result.globalVar("b5"), true);
    expectToBeBool(result.globalVar("b6"), true);

    expectToBeBool(result.globalVar("x1"), true);
    expectToBeBool(result.globalVar("x2"), false);
    expectToBeBool(result.globalVar("x3"), true);
    expectToBeBool(result.globalVar("x4"), false);
    expectToBeBool(result.globalVar("x5"), true);
    expectToBeBool(result.globalVar("x6"), true);
});
