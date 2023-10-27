// 1: style base
export const listBase = {
  display: 'flex',
  flexDirection: 'flex-col',
  p: 'p-2',
  fontSize: 'text-base',
  fontWeight: 'font-normal',
  gap: 'gap-1',
  color: 'text-blue-gray-700',
}

const listItemBase = {
  display: 'flex',
  alignItems: 'items-center',
  width: 'w-full',
  padding: 'p-3',
  borderRadius: 'rounded-lg',
  textAlign: 'text-start',
  lightHeight: 'leading-tight',
  transition: 'transition-all',
  bg: 'hover:bg-gray-100 hover:bg-opacity-80 active:bg-gray-200 active:bg-opacity-80 hover:cursor-pointer',
  outline: 'outline-none',
}

// 2: Type
export type ListStyleType = {
  base: typeof listBase
  className?: string
}

export type ListItemStyleType = {
  base: typeof  listItemBase
  ripple: boolean
  className?: string
}

// 3: Default Style
export const ListDefaultStyle: ListStyleType = {
  base: listBase
}

export const ListItemDefaultStyle: ListItemStyleType = {
  base: listItemBase,
  ripple: true
}
