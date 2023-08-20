import { createElement, forwardRef } from 'react'
import typographyColors from '@/components/Elements/Typography/style/colors'
import { TypographyDefaultProps, TypographyType } from '@/components/Elements/Typography/style/theme'
import { variants } from '@/components/Elements/Typography/style/variants'
import { objectsToString } from '@/lib/objectsToString'
import { tailwindMerge } from '@/lib/tailwindMerge'

type TypographyProps = Partial<TypographyType>

export const Typography = forwardRef<Omit<HTMLButtonElement, 'color'>, TypographyProps>(
  ({ 
    variant, 
    color,
    as, 
    children,
    className, 
    ...rest }, 
  ref) => {
    // 1: set props
    const typographyVariantProps = variant ?? TypographyDefaultProps.variant
    const typographyColorProps = color ?? TypographyDefaultProps.color
    const typographyAsProps = as

    // 2: set styles
    const typographyVariant = objectsToString(variants[typographyVariantProps])
    const typographyColor = objectsToString(typographyColors[typographyColorProps])
    const classNames = tailwindMerge(typographyVariant, typographyColor, className)

    // 3: create element by as
    const element = (variant: keyof typeof variants) => {
      const commonProps = {
        ...rest,
        ref,
        className: classNames
      }

      switch (variant) {
      case 'h1':
        return createElement(typographyAsProps || 'h1', commonProps, children)
      case 'h2':
        return createElement(typographyAsProps || 'h2', commonProps, children)
      case 'h3':
        return createElement(typographyAsProps || 'h3', commonProps, children)
      case 'h4':
        return createElement(typographyAsProps || 'h4', commonProps, children)
      case 'h5':
        return createElement(typographyAsProps || 'h5', commonProps, children)
      case 'h6':
        return createElement(typographyAsProps || 'h6', commonProps, children)
      case 'paragraph':
        return createElement(typographyAsProps || 'p', commonProps, children)
      case 'span':
        return createElement(typographyAsProps || 'span', commonProps, children)
      }
    }

    return element(typographyVariantProps)
  }
)

Typography.displayName = 'Typography'