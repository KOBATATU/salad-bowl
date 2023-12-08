import { variants } from './variants'
import {  Style } from '@/@types/style-type'
import { ButtonProps } from '@/components/Elements'

const styles = {
  base: {
    verticalAlign: 'align-middle',
    userSelect: 'select-none',
    fontFamily: 'font-sans',
    fontWeight: 'font-bold',
    textAlign: 'text-center',
    textTransform: 'uppercase',
    transition: 'transition-all',
    disabled: 'disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none',
  },
  variants: {
    variants: variants,
    sizes: {
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
    },
    square: {
      true: 'rounded-none'
    },
    fullWidth: {
      true: 'w-full'
    },
    loading: {
      true: 'shadow-none hover:shadow-none opacity-[0.85] hover:cursor-no-drop flex justify-center'
    },
    disable: {
      true: 'shadow-none hover:shadow-none opacity-[0.85] hover:cursor-no-drop'
    }
  }
} as const

export const button: Style<ButtonProps & Required<Omit<ButtonProps, 'prefixIcon' | 'suffixIcon'>> , typeof styles>  = {
  defaultProps: {
    variant: 'contained',
    color: 'primary',
    size: 'md',
    square: false,
    ripple: false,
    loading: false,
    fullWidth: false,
    disabled:false,
    className: '',
  },
  styles: styles
} as const

