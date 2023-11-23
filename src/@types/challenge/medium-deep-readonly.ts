// https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.ja.md

type DeepReepReadonly<T extends object> = {
  readonly [P in keyof T ] : T[P] extends Record<string, any> ? DeepReepReadonly<T[P]> : T[P]
}

type X = {
  x: {
    a: 1
    b: 'hi'
  }
  y: 'hey'
}
type deep = DeepReepReadonly<X>

const aaa: deep = {
  x: {
    a: 1,
    b: 'hi'
  },
  y: 'hey'
}

// aaa.x = 'hoge'
// aaa.x.a = 2