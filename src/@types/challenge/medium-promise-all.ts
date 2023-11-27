// https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.ja.md

const promise1 = Promise.resolve(3)
const promise2 = 42
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo')
})

// 参考https://github.com/type-challenges/type-challenges/issues/211
// 展開してタプル型にする(タプル型にすることで、[Promise<3>, 42, Promose<string>]という感じになる. ただ今回の問題は固定な型生成なのでconstあるのでこうせざるおえない)
// {}ブランケットで配列の構文っぽいのをかくとindexが取得でき、後半の部分が展開さるようになるっぽい.
declare function PromiseAll<T extends any[]>(values:  readonly [...T]):
  Promise<{ [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K] }>

const p = PromiseAll([promise1, promise2, promise3] as const)

