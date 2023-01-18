import { test, expect } from "@jest/globals";
import stringify from "../source/index.js";

test("json object pretty", () => {
  const string = stringify({ a: 1, b: 2 });
  expect(string).toBe("{\n  \"a\": 1,\n  \"b\": 2\n}");
});

test("json object no pretty", () => {
  const string = stringify({ a: 1, b: 2 }, false);
  expect(string).toBe("{\"a\":1,\"b\":2}");
});

test("json array pretty", () => {
  const string = stringify([1, 2]);
  expect(string).toBe("[\n  1,\n  2\n]");
});

test("json array no pretty", () => {
  const string = stringify([1, 2], false);
  expect(string).toBe("[1,2]");
});

test("string pretty", () => {
  const string = stringify("test");
  expect(string).toBe("\"test\"");
});

test("string no pretty", () => {
  const string = stringify("test", false);
  expect(string).toBe("\"test\"");
});

test("number pretty", () => {
  const string = stringify(1);
  expect(string).toBe("1");
});

test("number no pretty", () => {
  const string = stringify(1, false);
  expect(string).toBe("1");
});

test("zero pretty", () => {
  const string = stringify(0);
  expect(string).toBe("0");
});

test("zero no pretty", () => {
  const string = stringify(0, false);
  expect(string).toBe("0");
});

test("true pretty", () => {
  const string = stringify(true);
  expect(string).toBe("true");
});

test("true no pretty", () => {
  const string = stringify(true, false);
  expect(string).toBe("true");
});

test("false pretty", () => {
  const string = stringify(false);
  expect(string).toBe("false");
});

test("false no pretty", () => {
  const string = stringify(false, false);
  expect(string).toBe("false");
});

test("null pretty", () => {
  const string = stringify(null);
  expect(string).toBe("null");
});

test("null no pretty", () => {
  const string = stringify(null, false);
  expect(string).toBe("null");
});

test("undefined pretty", () => {
  const string = stringify();
  expect(string).toBe("");
});

test("undefined no pretty", () => {
  const string = stringify(undefined, false);
  expect(string).toBe("");
});
