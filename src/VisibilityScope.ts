import { NilValue, TableValue, Value } from "./types";

export default class VisibilityScope {
    private readonly parent: VisibilityScope|undefined;
    private readonly env: TableValue;

    static root():VisibilityScope {
        return new VisibilityScope(undefined);
    }

    static childOf(scope: VisibilityScope) {
        return new VisibilityScope(scope);
    }

    private constructor(parent?: VisibilityScope) {
        this.parent = parent;
        this.env = new TableValue();
    }

    get(key: Value): Value {
        const value = this.env.get(key);
        if (value instanceof NilValue) {
            if (this.parent) {
                return this.parent.get(key);
            } else {
                return new NilValue();
            }
        } else {
            return value;
        }
    }

    set(key: Value, value: Value): void {
        this.env.set(key, value);
    }
}