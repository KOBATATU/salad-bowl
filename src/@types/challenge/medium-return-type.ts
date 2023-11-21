// https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.ja.md
const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type MyReturnType<T extends Function> = T extends (...args: any) => infer U ? U : never

type Fn1 = MyReturnType<typeof fn>
