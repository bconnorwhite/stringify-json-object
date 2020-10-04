import { isJSONObject, JSONObject, JSONValue, JSONArray } from "@bconnorwhite/json-types";

export {
  isJSONObject,
  JSONObject,
  JSONValue,
  JSONArray
}

export default function stringify(json?: JSONValue, pretty = true) {
  if(json === undefined) {
    return "";
  } else if(pretty) {
    return JSON.stringify(json, null, 2);
  } else {
    return JSON.stringify(json);
  }
}
