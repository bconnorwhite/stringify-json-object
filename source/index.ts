import type { OptionalJSONValue, NestedOptionalJSONObject, NestedOptionalJSONArray } from "types-json";

export type StringifiedJSONString<T extends string> = `"${T}"`;

export type StringifiedJSONNumber<T extends number> = `${T}`;

export type StringifiedJSONBoolean<T extends boolean> = `${T}`;

export type StringifiedJSONNull = "null";

export type StringifiedJSONValue<T extends OptionalJSONValue> = T extends string
  ? StringifiedJSONString<T>
  : T extends number
    ? StringifiedJSONNumber<T>
    : T extends boolean
      ? StringifiedJSONBoolean<T>
      : T extends null
        ? StringifiedJSONNull
        : T extends undefined
          ? ""
          : T extends NestedOptionalJSONArray | NestedOptionalJSONObject
            ? string
            : never;

export default function stringify<T extends OptionalJSONValue = undefined>(json?: T, pretty = true): StringifiedJSONValue<T> {
  if(json === undefined) {
    return "" as StringifiedJSONValue<T>;
  } else if(pretty) {
    return JSON.stringify(json, null, 2) as StringifiedJSONValue<T>;
  } else {
    return JSON.stringify(json) as StringifiedJSONValue<T>;
  }
}

export type {
  OptionalJSONValue
};
