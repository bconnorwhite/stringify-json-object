import { expectType } from "tsd";
import stringify from "../source/index.js";

const empty = stringify();

expectType<"">(empty);
expectType<"">(stringify(undefined));
expectType<"true">(stringify(true));
expectType<"false">(stringify(false));
expectType<"null">(stringify(null));
expectType<"1">(stringify(1));
expectType<"1.23">(stringify(1.23));
expectType<string>(stringify([1, 2, 3]));
expectType<string>(stringify({ foo: "bar" }));
