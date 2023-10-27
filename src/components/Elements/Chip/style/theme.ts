
// 1: style base
import { variants } from '@/components/Elements/Chip/style/variants'

export const sizes = {
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
} as const

export const chipBase = {
  position: 'relative',
  display: 'grid',
  placeItems: 'items-center',
  fontWeight: 'font-bold',
  textTransform: 'uppercase',
  lineHeight: 'leading-none',
  whiteSpace: 'whitespace-nowrap',
} as const

// 2: type
export type ChipStyleType = {
  size?: keyof typeof sizes,
  color?: keyof typeof variants['filled'],
  variant?: keyof typeof variants
}

// 3: default style
export const defaultChipStyle = {
  size: 'sm',
  color: 'blue',
  variant: 'filled'
} as const
