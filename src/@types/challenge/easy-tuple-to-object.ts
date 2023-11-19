// https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.ja.md

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// numberは固定変数. 他の変数に置き換えることはできない.
type TupleToObject<T extends readonly string[]> = {
  [key in T[number]]: key
}

type result = TupleToObject<typeof tuple>
