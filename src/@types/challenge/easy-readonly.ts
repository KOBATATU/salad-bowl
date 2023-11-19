// https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.ja.md

interface Todo2 {
  title: string
  description: string
}

type MyReadOnly<T> = {
  readonly [ key in keyof T ]: T[key]
}

const todoRead: MyReadOnly<Todo2> = {
  title: 'Hey',
  description: 'foobar'
}

// todoRead.title = 'hoge'
