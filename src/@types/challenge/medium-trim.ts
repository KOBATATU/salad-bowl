// https://github.com/type-challenges/type-challenges/blob/main/questions/00108-medium-trim/README.ja.md

type Trim<T> = T extends `${Whitespace}${infer U}${Whitespace}` ? Trim<U> : T

const stringTrimAll: Trim<'  Hello World  '> = 'Hello World'
