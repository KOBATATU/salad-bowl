import React, { forwardRef } from 'react'
import { sizes, colors, Style } from '@/@types/style-type'
import { styles } from '@/components/Elements/Chip/theme'
import { variants } from '@/components/Elements/Chip/variants'
import { objectsToString } from '@/utils/objectsToString'
import { tailwindMerge } from '@/utils/tailwindMerge'

type ChipProps = {
  /**
   * チップのスタイルの種類
   */
  variant?: keyof typeof variants

  /**
   * チップの色
   */
  color?: colors,

  /**
   * チップの大きさ
   */
  size?: sizes,

  /**
   * チップにクラスを追加
   */
  className? : string
}

const chip: Style<Required<ChipProps>, typeof styles> = {
  defaultProps: {
    size: 'sm',
    color: 'blue',
    variant: 'contained',
    className: ''
  },
  styles: styles
}

export const Chip = forwardRef<HTMLButtonElement, Omit<React.ComponentProps<'button'>, 'color' | 'className'> & ChipProps>(
  ({
    size,
    color,
    variant,
    className,
    children,
    ...rest
  }, ref) =>{
    // 1: set props
    const { defaultProps, styles } = chip
    const sizeProp = size ?? defaultProps.size
    const colorProp = color ?? defaultProps.color
    const variantProp = variant ?? defaultProps.variant
    
    // 2: set styles
    const _chipBase = objectsToString(styles.base)
    const chipSize = objectsToString(styles.variants.sizes[sizeProp])
    const chipVariant = objectsToString(styles.variants.variants[variantProp][colorProp])
    const classNames = tailwindMerge(_chipBase, chipSize, chipVariant, className)

    return (
      <button className={classNames} {...rest}>
        { children }
      </button>
    )
  }
)
Chip.displayName = 'Chip'