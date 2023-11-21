// https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.ja.md

type IF<C extends boolean, T, F> = C extends true ? T : F

type A = IF<true, 'a', 'b'>
type B = IF<false, 'a', 'b'>