import { VMBuilder } from "@src/vm";

const samples: [string, string, any[]][] = [
    [
        'sum in loop', `
        local sum = 0
        local i = 1
        while i <= 5 do
            sum = sum + i
            i = i + 1
        end
        return sum`,
        [15]
    ], [
        'factorial', `
        function fact(n)
            if n == 0 then
                return 1
            else
                return n * fact(n - 1)
            end
        end
        return fact(5)`,
        [120]
    ], [
        'mapping',`
        t1 = {x = "y"}
        t2 = {b = "c", d = "e"}
        t3 = {a = t2}
        return t1, t3`,
        [{x:"y"}, {a:{b:"c", d:"e"}}]
    ], [
        'table of function',`
        ops = {
            add = function(a, b) return a + b end,
            sub = function(a, b) return a - b end,
            mul = function(a, b) return a * b end
        }

        return ops.add(2, 3), ops.sub(5, 2), ops.mul(4, 3)
        `,
        [5, 3, 12]
    ], [
        'function with internal state', `
        function make_toggle()
            local state = false
            return function()
                state = not state
                return state
            end
        end

        local toggle = make_toggle()
        return toggle(), toggle(), toggle()
        `,
        [true, false, true]
    ], [
        'fibonaci with memoization', `
        local memo = {}
        local function fib(n)
            if n <= 1 then return n end
            if memo[n] then return memo[n] end
            memo[n] = fib(n - 1) + fib(n - 2)
            return memo[n]
        end

        return fib(6)
        `,
        [8]
    ], [
        'loop with table and condition', `
        t = {}
        for i = 1, 10 do
            if i % 2 == 0 then
                t[#t + 1] = i
            end
        end
        return t[1], t[2], t[3], t[4], t[5]
        `,
        [2, 4, 6, 8, 10]
    ]
];

test.each(samples)("%s", (name, input, output) => {
    const vm = new VMBuilder().buildWithMarshaller();
    const result = vm.executeOnce(input as string);
    expect(result).toEqual(output);
    expect(vm.lastResult?.length).toBe(result.length);
});
