import { test, expect } from "@jest/globals";
import stringify from "../source/index.js";

test("undefined", () => {
  const string = stringify(undefined, false);
  expect(string).toBe("");
});

test("json object", () => {
  const string = stringify({ a: 1, b: undefined }, false);
  expect(string).toBe("{\"a\":1}");
});

test("json array", () => {
  const string = stringify([1, { a: 1, b: undefined }], false);
  expect(string).toBe("[1,{\"a\":1}]");
});
