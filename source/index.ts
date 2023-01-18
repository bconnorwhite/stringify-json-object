import { isJSONObject } from "types-json";
import type { JSONValue, JSONObject, JSONArray } from "types-json";

export default function stringify(json?: JSONValue, pretty = true) {
  if(json === undefined) {
    return "";
  } else if(pretty) {
    return JSON.stringify(json, null, 2);
  } else {
    return JSON.stringify(json);
  }
}

export {
  isJSONObject
}

export type {
  JSONObject,
  JSONValue,
  JSONArray
}
