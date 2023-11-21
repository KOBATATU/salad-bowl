// https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.ja.md
// 参考：  https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as

// remappingという手法を使っている
// ここではTのキー列をPに格納しPという定義を行いKと一致するかを判定し、一致する場合は排除.
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never: P ]: T[P]
}

type TodoPreviewa = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreviewa = {
  completed: false,
}