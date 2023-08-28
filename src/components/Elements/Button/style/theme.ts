import { variants } from './variants'
// 1: style base
export const sizes = {
  sm: {
    fontSize: 'text-xs',
    py: 'py-2',
    px: 'px-4',
    borderRadius: 'rounded-lg',
  },
  md: {
    fontSize: 'text-xs',
    py: 'py-3',
    px: 'px-6',
    borderRadius: 'rounded-lg',
  },
  lg: {
    fontSize: 'text-sm',
    py: 'py-3.5',
    px: 'px-7',
    borderRadius: 'rounded-lg',
  },
}
export const base = {
  verticalAlign: 'align-middle',
  userSelect: 'select-none',
  fontFamily: 'font-sans',
  fontWeight: 'font-bold',
  textAlign: 'text-center',
  textTransform: 'uppercase',
  transition: 'transition-all',
  disabled: 'disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none',
  widthFull: 'w-full'
}

// 2: Button Type
export type ButtonStyleType = {
  variant: 'contained' | 'text' | 'outlined'
  color: 'primary' | 'secondary' | 'white' 
  size: keyof typeof sizes
  base: typeof base
  className: string;
}

// 3: Button Default Style
export const ButtonDefaultStyle: ButtonStyleType = {
  variant: 'contained',
  color: 'primary',
  size: 'md',
  className: '',
  base: base
}
export * from './variants'