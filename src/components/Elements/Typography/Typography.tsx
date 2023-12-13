import { createElement, forwardRef, ReactNode } from 'react'
import { Style } from '@/@types/style-type'
import typographyColors from '@/components/Elements/Typography/colors'
import { styles } from '@/components/Elements/Typography/theme'
import { variants } from '@/components/Elements/Typography/variants'
import { objectsToString } from '@/utils/objectsToString'
import { tailwindMerge } from '@/utils/tailwindMerge'

type TypographyProps = {
  /**
   * テキストのdomデザインの種類
   */
  variant: keyof typeof variants

  /**
   * テキストの色
   */
  color?: keyof typeof typographyColors

  /**
   * テキストのdom要素
   */
  as?:  keyof typeof variants
  
  /**
   * テキストにクラスを追加
   */
  className?: string
}

const typography: Style<Required<Omit<TypographyProps, 'as'>>, typeof styles> = {
  defaultProps: {
    variant: 'paragraph',
    color: 'black',
    className: ''
  },
  styles: styles
}

export const Typography = forwardRef<HTMLElement , TypographyProps & {children?: ReactNode}>(
  ({ 
    variant, 
    color,
    as, 
    children,
    className, 
    ...rest }, 
  ref) => {
    // 1: set props
    const { defaultProps, styles } = typography
    const typographyVariantProp = variant ?? defaultProps.variant
    const typographyColorProp = color ?? defaultProps.color
    const typographyAsProp = as

    // 2: set styles
    const typographyVariant = objectsToString(styles.variants.variants[typographyVariantProp])
    const typographyColor = objectsToString(styles.variants.colors[typographyColorProp])
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
        return createElement(typographyAsProp || 'h1', commonProps, children)
      case 'h2':
        return createElement(typographyAsProp || 'h2', commonProps, children)
      case 'h3':
        return createElement(typographyAsProp || 'h3', commonProps, children)
      case 'h4':
        return createElement(typographyAsProp || 'h4', commonProps, children)
      case 'h5':
        return createElement(typographyAsProp || 'h5', commonProps, children)
      case 'h6':
        return createElement(typographyAsProp || 'h6', commonProps, children)
      case 'paragraph':
        return createElement(typographyAsProp || 'p', commonProps, children)
      case 'span':
        return createElement(typographyAsProp || 'span', commonProps, children)
      }
    }

    return element(typographyVariantProp)
  }
)

Typography.displayName = 'Typography'