// https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.ja.md

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

//type First<T extends string[] | number[]> = T[0]
// extendsを利用してイコールという演算子を擬似的に作成している
type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

type head1 = First<arr1>
type head2 = First<arr2>
