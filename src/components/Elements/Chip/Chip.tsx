import React, { forwardRef } from 'react'
import { chipBase, ChipStyleType, defaultChipStyle, sizes } from '@/components/Elements/Chip/style/theme'
import { variants } from '@/components/Elements/Chip/style/variants'
import { objectsToString } from '@/utils/objectsToString'
import { tailwindMerge } from '@/utils/tailwindMerge'

type ChipProps = ChipStyleType & React.ComponentProps<'button'>

export const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  ({
    size,
    color,
    variant,
    className,
    children,
    ...rest
  }, ref) =>{
    // 1: set props
    const sizeProps = size ?? defaultChipStyle.size
    const colorProps = color ?? defaultChipStyle.color
    const variantProps = variant ?? defaultChipStyle.variant
    
    // 2: set styles
    const _chipBase = objectsToString(chipBase)
    const chipSize = objectsToString(sizes[sizeProps])
    const chipVariant = objectsToString(variants[variantProps][colorProps])
    const classNames = tailwindMerge(_chipBase, chipSize, chipVariant, className)

    return (
      <button className={classNames} {...rest}>
        { children }
      </button>
    )
  }
)
Chip.displayName = 'Chip'