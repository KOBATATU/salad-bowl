// https://github.com/type-challenges/type-challenges/blob/main/questions/00012-medium-chainable-options/README.ja.md

// 参考：https://github.com/type-challenges/type-challenges/issues/10
// 最後のkの展開はKという風にかくと、stringとして認識されるので展開してkというkeyで型をつけている
type Chainable<T = object> = {
  option: <K extends string, V>(key: K, value: V) => Chainable<T & { [k in K] : V }>
  get: () => T
}

declare const config: Chainable
const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()
