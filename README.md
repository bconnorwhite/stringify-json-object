<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>stringify-json-object</h1>
  <a href="https://npmjs.com/package/stringify-json-object">
    <img alt="NPM" src="https://img.shields.io/npm/v/stringify-json-object.svg">
  </a>
  <a href="https://github.com/bconnorwhite/stringify-json-object">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/stringify-json-object.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/stringify-json-object?branch=master">
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/stringify-json-object.svg?branch=master">
  </a>
</div>

<br />

<blockquote align="center">Stringify and format a JSON object.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/stringify-json-object">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/stringify-json-object?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

## Installation

```sh
yarn add stringify-json-object
```

```sh
npm install stringify-json-object
```

```sh
pnpm add stringify-json-object
```

## Usage
```ts
import stringify, { isJSONObject, JSONObject, JSONValue, JSONArray } from "stringify-json-object";

stringify(json?: JSONValue, pretty = true) => string;

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

<!--BEGIN FOOTER-->

<br />

<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/stringify-json-object?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/stringify-json-object.svg"></a></h2>

- [types-json](https://www.npmjs.com/package/types-json): Type checking for JSON values


<br />

<h3>Dev Dependencies</h3>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.


<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/stringify-json-object.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->

## Related Packages

- [parse-json-object](https://www.npmjs.com/package/parse-json-object): Parse a typed JSON object
