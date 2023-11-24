// https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.ja.md

type Pop<T extends any[]> = T extends [...infer E, infer L ] ? E : never
type Shift<T extends any[]> = T extends [infer F, ...infer L] ? L : never

type re1 = Pop<['a', 'b', 'c', 'd']>
type re2 = Shift<['a', 'b', 'c', 'd']>


// const aaaaaaa: re1 = ['a', 'b']
// const aaaavv: re2 = ['b', 'cd', 'd']