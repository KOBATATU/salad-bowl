// https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.ja.md
// infer U をすると後半の部分が推定できるようになる
// 参考：type Pop<T extends any[]> = T extends [...infer E, infer L ] ? E : never
// type Shift<T extends any[]> = T extends [infer F, ...infer L] ? L : never
type Whitespace = '\n' | ' ' | '\t'
type Trimleft<T> = T extends `${Whitespace}${infer U}` ? Trimleft<U> : T

const trimString: Trimleft<'  Hello World  '> = 'Hello World  '
