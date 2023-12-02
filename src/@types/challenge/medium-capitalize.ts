// https://github.com/type-challenges/type-challenges/blob/main/questions/00110-medium-capitalize/README.ja.md
type CapitalizeMap = {
  a: 'A',
  b: 'B',
  c: 'C',
  d: 'D',
  e: 'E',
  f: 'F',
  g: 'G',
  h: 'H',
  i: 'I',
  j: 'J',
  k: 'K',
  l: 'L',
  m: 'M',
  n: 'N',
  o: 'O',
  p: 'P',
  q: 'Q',
  r: 'R',
  s: 'S',
  t: 'T',
  u: 'U',
  v: 'V',
  w: 'W',
  x: 'X',
  y: 'Y',
  z: 'Z',
}

// 最初のFが1文字目になるという不思議
type MyCapitalize<T extends string> = T extends `${infer F}${infer L}` ? F extends keyof CapitalizeMap ? `${CapitalizeMap[F]}${L}` : never : never
type capitalized = MyCapitalize<'hello world'>
