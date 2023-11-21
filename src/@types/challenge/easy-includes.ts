// https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.ja.md

type Includes<T extends any[], U> = {
  [P in T[number]] : true
}[U] extends true ? true : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'f'>

// const a: isPillarMen = false
