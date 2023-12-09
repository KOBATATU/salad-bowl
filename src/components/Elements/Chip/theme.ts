
// 1: style base
import { variants } from '@/components/Elements/Chip/variants'

export const styles = {
  base: {
    position: 'relative',
    display: 'grid',
    placeItems: 'items-center',
    fontWeight: 'font-bold',
    textTransform: 'uppercase',
    lineHeight: 'leading-none',
    whiteSpace: 'whitespace-nowrap',
  },
  variants: {
    variants: variants,
    sizes: {
      sm: {
        py: 'py-1',
        px: 'px-2',
        fontSize: 'text-xs',
        borderRadius: 'rounded-md',
      },
      md: {
        py: 'py-1.5',
        px: 'px-3',
        fontSize: 'text-xs',
        borderRadius: 'rounded-lg',
      },
      lg: {
        py: 'py-2',
        px: 'px-4',
        fontSize: 'text-xs',
        borderRadius: 'rounded-lg',
      }
    }
  }
} as const

