import { variants } from './variants'

export const styles = {
  base: {
    verticalAlign: 'align-middle',
    userSelect: 'select-none',
    fontFamily: 'font-sans',
    fontWeight: 'font-bold',
    textAlign: 'text-center',
    textTransform: 'uppercase',
    transition: 'transition-all',
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
      true: {
        display: 'flex',
        justify: 'justify-center',
        shadow: 'shadow-none',
        opacity: 'opacity-[0.85]',
        hover: 'hover:shadow-none hover:cursor-no-drop'
      }
    },
    disable: {
      true: {
        shadow: 'shadow-none',
        opacity: 'opacity-[0.85] ',
        hover: 'hover:shadow-none hover:cursor-no-drop'
      }
    }
  }
} as const
