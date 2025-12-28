import { VMBuilder } from '@src/vm';
import { StringValue, TableValue } from '@src/interpreter/types';
import {
  expectToBeBool,
  expectToBeNumber,
  expectToBeString,
  expectToBeNil,
} from './test_utils';

describe('metatable', () => {
  test('arithmetic', () => {
    const lua = `
        meta = { }
        meta.__add = function() return "add"; end
        meta.__sub = function() return "sub"; end
        meta.__mul = function() return "mul"; end
        meta.__div = function() return "div"; end
        meta.__mod = function() return "mod"; end
        meta.__pow = function() return "pow"; end
        meta.__unm = function() return "unm"; end
        meta.__idiv = function() return "idiv"; end
        
        a = { id = "a" }
        setmetatable(a, meta)
        b = { id = "b" }
        setmetatable(b, meta)
        c = { id = "c" }
        -- c without metatable
        
        r1 = a + b
        r2 = 1 - b
        r3 = a * 2
        r4 = "x" / b
        r5 = a % "y"
        r6 = a ^ c
        r7 = -a
        r8 = c // b
    `;

    const result = new VMBuilder().build().executeOnce(lua);

    expectToBeString(result.globalVar('r1'), 'add');
    expectToBeString(result.globalVar('r2'), 'sub');
    expectToBeString(result.globalVar('r3'), 'mul');
    expectToBeString(result.globalVar('r4'), 'div');
    expectToBeString(result.globalVar('r5'), 'mod');
    expectToBeString(result.globalVar('r6'), 'pow');
    expectToBeString(result.globalVar('r7'), 'unm');
    expectToBeString(result.globalVar('r8'), 'idiv');
  });

  test('bitwise', () => {
    const lua = `
        meta = { }
        meta.__band = function() return "band"; end
        meta.__bor = function() return "bor"; end
        meta.__bxor = function() return "bxor"; end
        meta.__shl = function() return "shl"; end
        meta.__shr = function() return "shr"; end
        meta.__bnot = function() return "bnot"; end
        
        a = { id = "a" }
        setmetatable(a, meta)
        b = { id = "b" }
        setmetatable(b, meta)
        
        r1 = a & b
        r2 = a | 3.14
        r3 = 7 ~ b
        r4 = a << "message"
        r5 = a >> 1
        r6 = ~a
    `;

    const result = new VMBuilder().build().executeOnce(lua);

    expectToBeString(result.globalVar('r1'), 'band');
    expectToBeString(result.globalVar('r2'), 'bor');
    expectToBeString(result.globalVar('r3'), 'bxor');
    expectToBeString(result.globalVar('r4'), 'shl');
    expectToBeString(result.globalVar('r5'), 'shr');
    expectToBeString(result.globalVar('r6'), 'bnot');
  });

  test('comparison', () => {
    const lua = `
        log = ""
        meta = { }
        meta.__eq = function() log = log .. "eq"; return "eq"; end
        meta.__lt = function() log = log .. "lt"; return nil; end
        meta.__le = function() log = log .. "le"; return false; end
        
        a = { id = "a" }
        setmetatable(a, meta)
        b = { id = "b" }
        setmetatable(b, meta)
        
        r1 = a == b
        r2 = a < b
        r3 = a <= b
        r4 = a > b
        r5 = a >= b
    `;

    const result = new VMBuilder().build().executeOnce(lua);

    expectToBeBool(result.globalVar('r1'), true);
    expectToBeBool(result.globalVar('r2'), false);
    expectToBeBool(result.globalVar('r3'), false);
    expectToBeBool(result.globalVar('r4'), false); // a > b is b < a
    expectToBeBool(result.globalVar('r5'), false); // a >= b is b <= a
    expectToBeString(result.globalVar('log'), 'eqltleltle');
  });

  test('index', () => {
    const lua = `
        t = { a = 1 }
        meta = {
            __index = function(table, key)
                if key == "b" then return 2 end
                return "fallback"
            end
        }
        setmetatable(t, meta)
        
        r1 = t.a
        r2 = t.b
        r3 = t.c
        
        t2 = {}
        meta2 = { __index = { x = 10, y = 20 } }
        setmetatable(t2, meta2)
        
        r4 = t2.x
        r5 = t2.z

        -- recursive table index
        t3 = {}
        meta3 = { __index = t2 }
        setmetatable(t3, meta3)
        r6 = t3.x
        r7 = t3.y
        r8 = t3.z
    `;

    const result = new VMBuilder().build().executeOnce(lua);

    expectToBeNumber(result.globalVar('r1'), 1);
    expectToBeNumber(result.globalVar('r2'), 2);
    expectToBeString(result.globalVar('r3'), 'fallback');
    expectToBeNumber(result.globalVar('r4'), 10);
    expectToBeNil(result.globalVar('r5'));
    expectToBeNumber(result.globalVar('r6'), 10);
    expectToBeNumber(result.globalVar('r7'), 20);
    expectToBeNil(result.globalVar('r8'));
  });

  test('newindex', () => {
    const lua = `
        t = { a = 1 }
        log = ""
        meta = {
            __newindex = function(table, key, value)
                log = log .. key .. "=" .. value .. ";"
            end
        }
        setmetatable(t, meta)
        
        t.a = 10
        t.b = 20
        t.c = "val"
        
        r1 = t.a
        r2 = t.b
        
        t2 = {}
        target = {}
        setmetatable(t2, { __newindex = target })
        
        t2.foo = "bar"
        r3 = target.foo
        r4 = t2.foo

        -- recursive table newindex
        t3 = {}
        setmetatable(t3, { __newindex = t2 })
        t3.baz = 42
        r5 = target.baz
        r6 = t3.baz
    `;

    const result = new VMBuilder().build().executeOnce(lua);

    expectToBeNumber(result.globalVar('r1'), 10); // should be updated in t because it existed
    expectToBeNil(result.globalVar('r2')); // should NOT be updated in t
    expectToBeString(result.globalVar('log'), 'b=20;c=val;');
    expectToBeString(result.globalVar('r3'), 'bar');
    expectToBeNil(result.globalVar('r4'));
    expectToBeNumber(result.globalVar('r5'), 42);
    expectToBeNil(result.globalVar('r6'));
  });

  test('call', () => {
    const lua = `
        t = { x = 10 }
        meta = {
            __call = function(table, a, b)
                return table.x + a + b
            end
        }
        setmetatable(t, meta)
        
        r1 = t(1, 2)
        
        t2 = {}
        meta2 = {
            __call = function(table, a, b)
                return a + b + 100
            end
        }
        setmetatable(t2, meta2)
        r2 = t2(1, 2)

        -- recursive call
        log = ""
        t_base = {}
        setmetatable(t_base, { __call = function(s, val) log = log .. "called"; end })
        
        t_rec = {}
        setmetatable(t_rec, { __call = t_base })
        
        t_rec("A")
    `;

    const result = new VMBuilder().build().executeOnce(lua);

    expectToBeNumber(result.globalVar('r1'), 13);
    expectToBeNumber(result.globalVar('r2'), 103);
    expectToBeString(result.globalVar('log'), 'called');
  });

  test('other', () => {
    const lua = `
        meta = { }
        meta.__concat = function() return "concat"; end
        meta.__len = function() return "len"; end
        
        a = { id = "a" }
        setmetatable(a, meta)
        b = { id = "b" }
        setmetatable(b, meta)
        
        r1 = a .. b
        r2 = a .. "x"
        r3 = 1 .. b
        r4 = #a
    `;

    const result = new VMBuilder().build().executeOnce(lua);

    expectToBeString(result.globalVar('r1'), 'concat');
    expectToBeString(result.globalVar('r2'), 'concat');
    expectToBeString(result.globalVar('r3'), 'concat');
    expectToBeString(result.globalVar('r4'), 'len');
  });

  test('getmetatable', () => {
    const lua = `
        t = {}
        m = { name = "meta" }
        setmetatable(t, m)
        r1 = getmetatable(t)
        r2 = r1 == m
        r3 = getmetatable({})
    `;

    const result = new VMBuilder().build().executeOnce(lua);

    const r1 = result.globalVar('r1');
    expect(r1).toBeInstanceOf(TableValue);
    expectToBeString((r1 as TableValue).get(StringValue.from('name')), 'meta');
    expectToBeBool(result.globalVar('r2'), true);
    expectToBeNil(result.globalVar('r3'));
  });
});
