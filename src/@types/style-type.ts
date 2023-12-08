// export type colors =
//   | 'blue-gray'
//   | 'gray'
//   | 'brown'
//   | 'deep-orange'
//   | 'orange'
//   | 'amber'
//   | 'yellow'
//   | 'lime'
//   | 'light-green'
//   | 'green'
//   | 'teal'
//   | 'cyan'
//   | 'light-blue'
//   | 'blue'
//   | 'indigo'
//   | 'deep-purple'
//   | 'purple'
//   | 'pink'
//   | 'red'

export type sizes =
  | 'sm'
  | 'md'
  | 'lg'


export type Style<T extends object, U extends {base: any, variants: any}> = {
  defaultProps: T,
  styles: U
}