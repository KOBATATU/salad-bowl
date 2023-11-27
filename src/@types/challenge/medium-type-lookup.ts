// https://github.com/type-challenges/type-challenges/blob/main/questions/00062-medium-type-lookup/README.ja.md

// U extends U は実態としてCat, Dogのループ. dogに一致しないのでneverになる
type LookUp<U extends { type: string }, T> = U extends U ? U['type'] extends T ? U : never : never

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type MyDog = LookUp<Cat | Dog, 'dog'>

// const hogeaaa:MyDog = {
//   type: 'dog',
//   breeds: 'Hound',
//   color: 'white'
// }
