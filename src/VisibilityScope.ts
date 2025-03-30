import { NilValue, TableValue, Value } from "./types";

export default class VisibilityScope {
    private readonly _parent: VisibilityScope|undefined;
    private readonly env: TableValue;

    static root():VisibilityScope {
        return new VisibilityScope(undefined);
    }

    static childOf(scope: VisibilityScope) {
        return new VisibilityScope(scope);
    }

    private constructor(parent?: VisibilityScope) {
        this._parent = parent;
        this.env = new TableValue();
    }

    parent(): VisibilityScope {
        return this._parent!;
    }

    get(key: Value): Value {
        const value = this.env.get(key);
        if (value instanceof NilValue) {
            if (this._parent) {
                return this._parent.get(key);
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

    has(key: Value): boolean {
        return this.env.hasKey(key);
    }

}
