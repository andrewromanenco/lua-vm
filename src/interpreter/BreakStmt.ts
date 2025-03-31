export default class BreakStmt extends Error {

    static breakCalled(f: () => void): boolean {
        try {
            f();
        } catch (error) {
            if (error instanceof BreakStmt) {
                return true;
            } else {
                throw error;
            }
        }
        return false;
    }
}