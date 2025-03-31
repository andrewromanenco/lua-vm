import { InternalListValue, NilValue, NumberValue, TableValue, Value } from "./types";

export default class ReturnStmt extends Error {
    private readonly returnedValues: InternalListValue;

    static withList(list :Value[]) {
        const internalList = new InternalListValue(list);
        return new ReturnStmt(internalList);
    }

    static executeReturnable(f: () => Value): Value {
        let result = new NilValue();
        try {
            result = f();
        } catch (error) {
            if (error instanceof ReturnStmt) {
                return (error as ReturnStmt).retValues();
            } else {
                throw error;
            }
        }
        return result;
    }

    constructor(list: InternalListValue) {
        super();
        this.returnedValues = list;
    }

    retValues(): InternalListValue {
        return this.returnedValues;
    }

    retValuesAsTable(): TableValue {
        const table = new TableValue();
        this.returnedValues.list.forEach((value: Value, i: number) => {
            table.set(new NumberValue(i+1), value);
        });
        return table;
    }

}