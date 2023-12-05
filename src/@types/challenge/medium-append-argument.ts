// https://github.com/type-challenges/type-challenges/blob/main/questions/00191-medium-append-argument/README.ja.md
type MediumAppendArgumentFn = (a: number, b: string) => number

type AppendArgument<F, A> = F extends (...args: infer U) => infer V ? (x: A, ...args: U) => V : never

type AppendArgumentResult = AppendArgument<MediumAppendArgumentFn, boolean>

// const hogehogehogehoge :AppendArgumentResult  = (x: boolean, a: number, b: string)=>{
//   return 8
// }
