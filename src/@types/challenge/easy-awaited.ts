// https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.ja.md
// https://qiita.com/ehika/items/8f41d4a3c8f9df4af9c3 inferの詳細
type ExampleType = Promise<string>

type ExtractPromiseType<T> = T extends Promise<infer U> ? U : never;


type ResultType = ExtractPromiseType<string>

// const hogaaae:ResultType = '2'

// 回答には以下のように2つ promiseがあった時ように再起的にtype変換している回答があった
type MyAwaited<T extends Promise<unknown>> =
  T extends Promise<infer U>
    ? (U extends Promise<unknown> ? MyAwaited<U> : U)
    : never;

