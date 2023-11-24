//https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.ja.md

//参考: https://github.com/type-challenges/type-challenges/issues/30854
// 空配列で一個つめとく
type Last<T extends unknown[]> = [unknown, ...T][T['length']]

// 参考：https://github.com/type-challenges/type-challenges/issues/30668
// type Last<T extends unknown[]> = T extends [...infer E, infer L ] ? L : T[0]

type tail1 = Last<['a', 'b']>

// const tail1a: tail1 = 'a'
// const tail1b: tail1 = 'b'
