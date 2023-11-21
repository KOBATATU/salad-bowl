// https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.ja.md

type Concat<T extends any[], U extends any[]> = [...T, ...U]

type ResultConcat = Concat<[1], [2]>
