// https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.ja.md

type Push<T extends any[], U> = [...T, U]
type ResultPush = Push<[1, 2], '3'>
