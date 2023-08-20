
// 1: style base
import { cardVariants } from '@/components/Elements/Card/style/variants'

export const cardBase = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'flex-col',
  backgroundClip: 'bg-clip-border',
  borderRadius: 'rounded-xl',
  color: 'bg-white'
}

export const cardHeaderBase = {
  position: 'relative',
  backgroundClip: 'bg-clip-border',
  mt: 'mt-4',
  mx: 'mx-4',
  overflow: 'overflow-hidden',
}

export const cardBodyBase = {
  p: 'p-6'
}

export const cardFooterBase = {
  p: 'p-3'
}

// 2: Card Type
export type CardType = {
    variant: keyof typeof cardVariants
    base: typeof cardBase
    className?: string
}

export type CardHeaderType = {
  base: typeof cardHeaderBase
  className?: string
}

export type CardBodyType = {
  base: typeof cardBodyBase
  className?: string
}

export const footerDivider = {
  divider: {
    borderWidth: 'border-t',
    borderColor: 'border-blue-gray-50',
  }
}
export type CardFooterType = {
  base: typeof cardFooterBase
  className?: string,
  divider: boolean
}

// 3: Card Default Style
export const CardDefaultStyle: CardType = {
  variant: 'contained',
  base: cardBase
}

export const CardHeaderDefaultStyle: CardHeaderType = {
  base: cardHeaderBase
}

export const CardBodyDefaultStyle: CardBodyType = {
  base: cardBodyBase,
}

export const CardFooterDefaultStyle: CardFooterType = {
  base: cardFooterBase,
  divider: false
}