// https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.ja.md

// 一回全てのキーに対してreadonlyを作成.
// その後、対象のKのみ上書き
type MyReadOnly2<T, K extends keyof T> =
  {
    readonly [P in K] : T[P]
  } &
  {
  [P in keyof T as P extends K ?  never : P ]: T[P]
}

const TodoRead: MyReadOnly2<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false,
}

// TodoRead.title = 'Hello' // Error: cannot reassign a readonly property
// TodoRead.description = 'barFoo' // Error: cannot reassign a readonly property
TodoRead.completed = true