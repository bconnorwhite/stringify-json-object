# stringify-json-object
![dependencies](https://img.shields.io/david/bconnorwhite/stringify-json-object)
![typescript](https://img.shields.io/github/languages/top/bconnorwhite/stringify-json-object)
![npm](https://img.shields.io/npm/v/stringify-json-object)

Stringify and format a JSON object.

```
yarn add stringify-json-object
```

## API
```ts
import stringify, { isJSONObject, JSONObject, JSONValue, JSONArray } from "stringify-json-object";

stringify(json?: string, pretty = true) => string;

isJSONObject(json?: JSONValue) => boolean;

```

### Types
```ts
type JSONObject = {
  [key in string]?: JSONValue
};

type JSONValue = string | number | boolean | null | JSONObject | JSONArray;

interface JSONArray extends Array<JSONValue> {};
```

