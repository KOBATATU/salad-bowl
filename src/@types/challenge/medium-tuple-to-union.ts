// https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.ja.md

// T[number]は配列の全ての値,という意味になる.
type MediumTupleToUnion<T extends any[]> = T[number]

// 以下の書き方でもできる。Array<string> のようにかけるので、それがRになって中身の情報がUnionになっているのだと思う.
// type MediumTupleToUnion<T extends any[]> = T extends Array<infer R> ? R: never

type Arr = ['1', '2', '3']

type ArrType = MediumTupleToUnion<Arr>