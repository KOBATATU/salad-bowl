// https://github.com/type-challenges/type-challenges/blob/main/questions/00119-medium-replaceall/README.ja.md
// From extends To にしているのはFromとToが一致すると無限ループを起こすので元の文字列で戻す
type ReplaceAll<S, From extends string, To extends string> = S extends `${infer F}${From}${infer L}` ?
  From extends '' | To ?
    `${F}${From}${L}` :
    ReplaceAll<`${F}${To}${L}`, From, To> :
  S

type replaced = ReplaceAll<'t y p e s', ' ', ''>
