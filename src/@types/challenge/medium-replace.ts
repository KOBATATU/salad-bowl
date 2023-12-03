// https://github.com/type-challenges/type-challenges/blob/main/questions/00116-medium-replace/README.ja.md

type Replace<S, From extends string, To extends string> = S extends `${infer F}${From}${infer L}` ?
   From extends '' ?
     `${F}${From}${L}` :
     `${F}${To}${L}` :
  S

type ReplaceWord = Replace<'types are fun!', 'fun', 'awesome'>