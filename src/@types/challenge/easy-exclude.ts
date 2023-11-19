// https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.ja.md
// Conditional Types(Union distribution)
type MyExclude<T, U> = T extends U ? never: T
type Result = MyExclude<'a' | 'b' | 'c', 'a'>