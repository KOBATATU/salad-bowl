// https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.ja.md
// https://typescriptbook.jp/reference/type-reuse/mapped-types
// mapped typesが使われる. mapped typesは指定されたkey列でどれでも使える(objectでよく使われる)
interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}

type TodoPreview = MyPick<Todo, 'title'>

const title:TodoPreview = {
  title: 'hoge'
}