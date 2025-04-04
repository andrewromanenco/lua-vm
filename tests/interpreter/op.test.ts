import VMBuilder from "@src/vm";
import { expectToBeBool, expectToBeNil, expectToBeNumber, expectToBeString } from "./test_utils";
import { RuntimeError } from "@src/interpreter/errors";

test("equals", ()=>{
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

test("LT", ()=>{
    const lua = `
        n1 = 10
        n2 = 100
        s1 = "abc"
        s2 = "xyz"
        a = n1 < n2
        b = n2 < n1
        c = s1 < s2
        d = s2 < s1
        x = n1 < n1
        y = s1 < s1
    `;
    const result = new VMBuilder().build().executeOnce(lua);
    expectToBeBool(result.globalVar("a"), true);
    expectToBeBool(result.globalVar("b"), false);
    expectToBeBool(result.globalVar("c"), true);
    expectToBeBool(result.globalVar("d"), false);
    expectToBeBool(result.globalVar("x"), false);
    expectToBeBool(result.globalVar("y"), false);
});

test("LT", ()=>{
  const lua = `
      n1 = 10
      n2 = 100
      s1 = "abc"
      s2 = "xyz"
      a = n1 <= n2
      b = n2 <= n1
      c = s1 <= s2
      d = s2 <= s1
      x = n1 <= n1
      y = s1 <= s1
  `;
  const result = new VMBuilder().build().executeOnce(lua);
  expectToBeBool(result.globalVar("a"), true);
  expectToBeBool(result.globalVar("b"), false);
  expectToBeBool(result.globalVar("c"), true);
  expectToBeBool(result.globalVar("d"), false);
  expectToBeBool(result.globalVar("x"), true);
  expectToBeBool(result.globalVar("y"), true);
});

test("GT", ()=>{
  const lua = `
      n2 = 10
      n1 = 100
      s2 = "abc"
      s1 = "xyz"
      a = n1 > n2
      b = n2 > n1
      c = s1 > s2
      d = s2 > s1
      x = n1 > n1
      y = s1 > s1
  `;
  const result = new VMBuilder().build().executeOnce(lua);
  expectToBeBool(result.globalVar("a"), true);
  expectToBeBool(result.globalVar("b"), false);
  expectToBeBool(result.globalVar("c"), true);
  expectToBeBool(result.globalVar("d"), false);
  expectToBeBool(result.globalVar("x"), false);
  expectToBeBool(result.globalVar("y"), false);
});

test("GE", ()=>{
const lua = `
    n2 = 10
    n1 = 100
    s2 = "abc"
    s1 = "xyz"
    a = n1 >= n2
    b = n2 >= n1
    c = s1 >= s2
    d = s2 >= s1
    x = n1 >= n1
    y = s1 >= s1
`;
const result = new VMBuilder().build().executeOnce(lua);
expectToBeBool(result.globalVar("a"), true);
expectToBeBool(result.globalVar("b"), false);
expectToBeBool(result.globalVar("c"), true);
expectToBeBool(result.globalVar("d"), false);
expectToBeBool(result.globalVar("x"), true);
expectToBeBool(result.globalVar("y"), true);
});

test("only strings and numbers are supported", () => {
    const lua = `
    a = true
    b = 10
    c = a < b
    `
    let exception;
    try {
      new VMBuilder().build().executeOnce(lua);
    } catch (e) {
      exception = e;
    }
    expect(exception).toBeInstanceOf(RuntimeError);
    expect((exception as RuntimeError).message)
      .toBe("Runtime error: (line: 4, col: 8): Can't compare type BooleanValue");
});

test("number and string raise error", () => {
    const lua = `
    a = 20
    b = "abc"
    c = a < b
    `
    let exception;
    try {
      new VMBuilder().build().executeOnce(lua);
    } catch (e) {
      exception = e;
    }
    expect(exception).toBeInstanceOf(RuntimeError);
    expect((exception as RuntimeError).message)
      .toBe("Runtime error: (line: 4, col: 8): Right expression not a Number - StringValue");
});

  test("string and number raise error", () => {
    const lua = `
    a = "abc"
    b = 10
    c = a < b
    `
    let exception;
    try {
      new VMBuilder().build().executeOnce(lua);
    } catch (e) {
      exception = e;
    }
    expect(exception).toBeInstanceOf(RuntimeError);
    expect((exception as RuntimeError).message)
      .toBe("Runtime error: (line: 4, col: 8): Right expression not a String - NumberValue");
});

test("logical AND and OR", ()=>{
  const lua = `
      t1 = 0
      t2 = true
      t3 = "some string"
      t4 = 100
      f1 = false
      f2 = nil
      and_a = t1 and t4
      and_b = t3 and true
      and_c = true and false
      and_d = f2 and t2
      and_e = f1 and t2
      and_f = f2 and t4

      or_a = t1 or t4
      or_b = t3 or true
      or_c = true or false
      or_d = f2 or t2
      or_e = f1 or t2
      or_f = f2 or t4
      or_g = f1 or f2
  `;
  const result = new VMBuilder().build().executeOnce(lua);
  expectToBeBool(result.globalVar("and_a"), true);
  expectToBeBool(result.globalVar("and_b"), true);
  expectToBeBool(result.globalVar("and_c"), false);
  expectToBeBool(result.globalVar("and_d"), false);
  expectToBeBool(result.globalVar("and_e"), false);
  expectToBeBool(result.globalVar("and_f"), false);

  expectToBeBool(result.globalVar("or_a"), true);
  expectToBeBool(result.globalVar("or_b"), true);
  expectToBeBool(result.globalVar("or_c"), true);
  expectToBeBool(result.globalVar("or_d"), true);
  expectToBeBool(result.globalVar("or_e"), true);
  expectToBeBool(result.globalVar("or_f"), true);
  expectToBeBool(result.globalVar("or_g"), false);
});

test("multires expressions", ()=>{
  const lua = `
      function f()
        return 100, 101, 102;
      end
      a1, a2, a3 = 1, f(), 3
      b1, b2, b3 = 1, f()
      c1 = f()
      d1, d2, d3, d4 = f()
      function f2()
      end
      e1,e2 = f2(), 42
  `;
  const result = new VMBuilder().build().executeOnce(lua);
  expectToBeNumber(result.globalVar("a1"), 1);
  expectToBeNumber(result.globalVar("a2"), 100);
  expectToBeNumber(result.globalVar("a3"), 3);

  expectToBeNumber(result.globalVar("b1"), 1);
  expectToBeNumber(result.globalVar("b2"), 100);
  expectToBeNumber(result.globalVar("b3"), 101);

  expectToBeNumber(result.globalVar("c1"), 100);

  expectToBeNumber(result.globalVar("d1"), 100);
  expectToBeNumber(result.globalVar("d2"), 101);
  expectToBeNumber(result.globalVar("d3"), 102);
  expectToBeNil(result.globalVar("d4"));

  expectToBeNil(result.globalVar("e1"));
  expectToBeNumber(result.globalVar("e2"), 42);
});

test("multires expressions with functions", ()=>{
  const lua = `
      function f()
          return 1,2
      end

      function fa()
          return f(), f()
      end

      function fb()
          return 10, f()
      end
      a1, a2, a3, a4, a5 = 100, fa()
      b1, b2, b3, b4, b5 = 100, fb()
  `;
  const result = new VMBuilder().build().executeOnce(lua);
  expectToBeNumber(result.globalVar("a1"), 100);
  expectToBeNumber(result.globalVar("a2"), 1);
  expectToBeNumber(result.globalVar("a3"), 1);
  expectToBeNumber(result.globalVar("a4"), 2);
  expectToBeNil(result.globalVar("a5"));

  expectToBeNumber(result.globalVar("b1"), 100);
  expectToBeNumber(result.globalVar("b2"), 10);
  expectToBeNumber(result.globalVar("b3"), 1);
  expectToBeNumber(result.globalVar("b4"), 2);
  expectToBeNil(result.globalVar("b5"));
});

test("concat", ()=>{
  const lua = `
      n1 = 10
      n2 = 20
      s1 = "str1"
      s2 = "str2"
      t = true
      a = s1 .. s2 .. n1
      b = n1 .. n2
      c = t .. s1
      d = non_existing .. 10
  `;
  const result = new VMBuilder().build().executeOnce(lua);
  expectToBeString(result.globalVar("a"), "str1str210");
  expectToBeString(result.globalVar("b"), "1020");
  expectToBeString(result.globalVar("c"), "truestr1");
  expectToBeString(result.globalVar("d"), "nil10");
});
