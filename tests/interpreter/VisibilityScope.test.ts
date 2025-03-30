import { NilValue, StringValue } from "@src/interpreter/types";
import VisibilityScope from "@src/interpreter/VisibilityScope";


describe("VisibilityScope", () => {
    it("root scope", () => {
        const rootScope = VisibilityScope.root();
        expect(rootScope).toBeDefined();
        expect(rootScope.get(StringValue.from("non-existing"))).toBeInstanceOf(NilValue);
        rootScope.set(StringValue.from("x"), StringValue.from("y"));
        expect(rootScope.get(StringValue.from("x"))).toBeInstanceOf(StringValue);
        expect((rootScope.get(StringValue.from("x")) as StringValue).string)
            .toBe("y");
    });

    it("child scope", () => {
        const rootScope = VisibilityScope.root();
        const childScope = VisibilityScope.childOf(rootScope);

        expect(rootScope.get(StringValue.from("non-existing"))).toBeInstanceOf(NilValue);
        expect(childScope.get(StringValue.from("non-existing"))).toBeInstanceOf(NilValue);

        rootScope.set(StringValue.from("x"), StringValue.from("y"));
        expect((rootScope.get(StringValue.from("x")) as StringValue).string)
            .toBe("y");
        expect((childScope.get(StringValue.from("x")) as StringValue).string)
            .toBe("y");

        childScope.set(StringValue.from("x"), StringValue.from("y-child"));
        expect((rootScope.get(StringValue.from("x")) as StringValue).string)
            .toBe("y");
        expect((childScope.get(StringValue.from("x")) as StringValue).string)
            .toBe("y-child");

        childScope.set(StringValue.from("n"), StringValue.from("m"));
        expect(rootScope.get(StringValue.from("n"))).toBeInstanceOf(NilValue);
        expect((childScope.get(StringValue.from("n")) as StringValue).string)
            .toBe("m");
    });
});