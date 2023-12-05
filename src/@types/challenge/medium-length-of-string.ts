// https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.ja.md

type StrToArray<S> = S extends `${infer F}${infer L}` ? [1, ...StrToArray<L>] : [];
type LengthOfString<S extends string> = StrToArray<S>['length'];

type lengthString = LengthOfString<'hoge'>


// const hoge:lengthString = 4