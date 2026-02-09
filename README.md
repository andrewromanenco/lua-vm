# LUA VM: lua interpreter in TypeScript

[![npm version](https://img.shields.io/npm/v/lua-vm)](https://www.npmjs.com/package/lua-vm)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**LuaVM** is a safe, sandboxed Lua interpreter implemented in TypeScript. It is designed to be easily embedded in TypeScript/JavaScript applications or web environments (also referred to as **host systems**).

The virtual machine executes Lua code without any ability to access or affect the host environment. There are **no escape hatches**: Lua code cannot invoke arbitrary host functions or manipulate memory outside the VM. There is **no DOM** access.

## Design Philosophy

The **host system** controls the entire lifecycle of Lua code execution. A typical usage pattern looks like this:

1. Initialize the VM
	- Create a new VM instance.
	- Set up the initial memory state (e.g., define global variables or register host-provided functions).
2. Execute Lua Code
	- Provide a Lua source string.
	- Set an upper limit on the number of instructions to guard against infinite loops.
3. Access Results
	- After execution, inspect return values or query the VM’s memory state (e.g., read variable values).

## Architecture

At its core, **LuaVM** consists of a **pure interpreter** that operates on an abstract syntax tree (AST) generated from Lua code. It uses a plain TypeScript map to store runtime variables.

- The interpreter is **fully isolated** from the host environment.
- It does not access the DOM, browser APIs, or any external resources.
- The interpreter is wrapped by a higher-level VM layer that simplifies integration into host applications.

This strict separation ensures **safe and predictable behavior** in embedded contexts like browsers, games, or Node.js scripts.

## Features

- Set variables in the Lua VM before execution.
- Read variables after execution completes.
- Provide external (TypeScript/JavaScript) functions callable from Lua.
- Enforce a configurable instruction limit to prevent infinite loops (10k is the default).
- Optionally include a subset of standard Lua library functions.
- Supported Types: nil, boolean, number, string, function, and table.
- All LuaVM values are TypeScript-wrapped primitives; behavior is aligned with **JS semantics**.


### Limitations
- Unsupported Features:
	- userdata, thread, and coroutines
	- Attributes

##  Concept

### VMBuilder: Creating a Virtual Machine

The `VMBuilder` class is the entry point for constructing a Lua VM instance.

- **Create a basic VM:**
  ```ts
  const vm = new VMBuilder().build();
  ```
- **Create a VM with a subset of Lua standard library functions:**
  ```ts
  const vm = new VMBuilder().withStdLib().build();
  ```
- **Limit running time:**
  ```ts
  const vm = new VMBuilder().withRunCredit(10).withStdLib().build();
  ```

A VM instance created via `VMBuilder` acts as a container for **execution threads**. These threads are not concurrent or parallel (LuaVM does not support real multithreading); instead, they represent **independent memory contexts**. This design allows you to run multiple isolated Lua programs using a single VM instance.

### VM-Level Variable Management

- **Set a global variable available to all threads:**
  ```ts
  vm.setLuaVar(StringValue.from("varName"), NumberValue.from(42));
  ```
  This variable will be visible in all threads created from this VM.

> **Note:** If you assign a `TableValue`, it is passed **by reference**. This allows threads to communicate via shared tables. If isolation is required, consider setting variables at the thread level instead.

### One-Off Execution

- **Execute Lua code in a temporary thread and get the result:**
  ```ts
  const result = vm.executeOnce("return 1 + 2");
  ```
  This is a shortcut that internally creates a thread, executes the code, and returns the result.

### Threads: Isolated Execution Contexts

- **Create a new thread:**
  ```ts
  const thread = vm.newThread();
  ```

A thread is an isolated environment with its own memory. It is **not** a system thread or a parallel task. All Lua variables for this execution context reside within the thread’s memory.

- **Set a thread-specific variable:**
  ```ts
  thread.setLuaVar(StringValue.from("varName"), NumberValue.from(100));
  ```

- **Execute Lua code in a thread:**
  ```ts
  const result = thread.execute("return 45*10");
  ```

  - Threads retain memory between executions.
  - You can call `execute(...)` multiple times with different code snippets.
  - The host system can inspect or modify memory using `getLuaVar` and `setLuaVar` between executions.

### Accessing Execution Results

An execution result provides information about the outcome of Lua code:

```ts
if (result.hasReturnValue()) {
  const values = result.returnValueAsList(); // A TypeScript array (0-based index)
}
```

- **Access global variables after execution:**
  ```ts
  const message = result.globalVar("message");
  ```

### Working with LuaVM Types

All values exchanged between the host system and the VM must use **LuaVM types**, which are lightweight wrappers around TypeScript primitives:

- `NilValue`
- `BooleanValue`
- `NumberValue`
- `StringValue`
- `TableValue`
- `FunctionValue`
- `ExtFunction` (for host-defined functions)

#### 🧪 Example: Creating Lua-compatible values

```ts
const count = NumberValue.from(42);
console.log(count.number); // 42
```

### Function Support in LuaVM

LuaVM supports **functions as first-class values**, with two distinct types representing them:

#### `FunctionValue`

Represents a function **defined within the Lua code** itself.

- This type is created internally by the VM when Lua code declares a function.    
- In most cases, the host system should **not need to create or manipulate** `FunctionValue` instances directly.

#### `ExtFunction`

Represents an **external (host-defined) function** exposed to the Lua runtime.
- Use this type to inject TypeScript/JavaScript functions into the Lua environment.
- These functions can be used to **extend the capabilities of Lua code**, for example to interact with APIs, custom logic, or host-specific resources.

### Coding Examples

Explore the following files and directories for usage patterns and integration ideas:

- **General VM usage** (setting/getting variables, error handling):  
  [tests/vm.test.ts](https://github.com/andrewromanenco/lua-vm/blob/main/tests/vm.test.ts)
  
- **Using external (host-provided) functions:**  
  [tests/vmfun.test.ts](https://github.com/andrewromanenco/lua-vm/blob/main/tests/vmfun.test.ts)
  
- **Writing custom external functions:**  
  [src/stdlib/*](https://github.com/andrewromanenco/lua-vm/tree/main/src/stdlib)

- **Embedding LuaVM in a web page:**  
  [demo.html](https://github.com/andrewromanenco/lua-vm/blob/main/demo.html)

### 📦 Installation

#### As an NPM Package (for Node.js/TypeScript projects):
```bash
npm install lua-vm
```

```ts
import {
  VMBuilder,
  Value,
  NumberValue,
  StringValue,
  ExtFunction } from 'lua-vm';

function add(args: Value[]): Value[] {
  const a = args[0] as NumberValue;
  const b = args[1] as NumberValue;
  return [NumberValue.from(a.number + b.number)];
}

const lua = `
    a = 2
    return a*b, add(a, b)
    `;
const vm = new VMBuilder().build();
vm.setLuaVar(StringValue.from("b"), NumberValue.from(3));
vm.setLuaVar(StringValue.from("add"), ExtFunction.of(add));
const result = vm.executeOnce(lua);
const resultAsList = result.returnValueAsList();
const r1 = (resultAsList[0] as NumberValue).number;
const r2 = (resultAsList[1] as NumberValue).number;
console.log(r1);
console.log(r2);
```

#### As a JavaScript Library (for use in web apps):

1. Download the latest `lua-vm.js` from [GitHub Releases](https://github.com/andrewromanenco/lua-vm/releases).
2. _OR_ build it from source:
   ```bash
   npm run buildjs
   ```
3. See [demo.html](https://github.com/andrewromanenco/lua-vm/blob/main/demo.html) for an example of integration in a browser environment.

## STDLIB

The [StdLib](https://github.com/andrewromanenco/lua-vm/tree/main/src/stdlib) is a curated subset of Lua’s standard library, reimplemented as ExtFunctions in TypeScript.

These functions are designed to be safe and sandboxed—they do not access the host environment (no DOM, no browser APIs, no external side effects).

As a reminder, LuaVM types are lightweight wrappers around native TypeScript types. Many functions in the StdLib are simply proxy calls to underlying TypeScript implementations, adapted to work seamlessly with LuaVM’s type system and execution model.

Feel free to browse the src/stdlib directory for examples and inspiration for building your own ExtFunctions.

## License

MIT
