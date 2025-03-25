import LuaParser from "@src/parser/LuaParser";
import { make_parser } from "@src/utils";

test("validate parser", () => {
  const parser = make_parser("10+5");
  expect(parser).toBeInstanceOf(LuaParser);
  expect(parser.exp).toBeTruthy();
});