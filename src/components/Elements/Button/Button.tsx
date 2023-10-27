'use client'
import React, { forwardRef } from 'react'

import type { ButtonStyleType } from './style/theme'
import { ButtonDefaultStyle, variants, sizes, base } from './style/theme'
import { objectsToString } from '@/utils/objectsToString'
import { tailwindMerge } from '@/utils/tailwindMerge'

type ButtonProps = Partial<Omit<ButtonStyleType,'base'>> & React.ComponentProps<'button'>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant, 
    color, 
    size, 
    className, 
    children, 
    ...rest 
  }, ref) => { 
    // 1: set props
    const buttonVariantProps = variant ?? ButtonDefaultStyle.variant
    const buttonColorProps = color ?? ButtonDefaultStyle.color
    const buttonSizeProps = size ?? ButtonDefaultStyle.size
        
    // 2: set styles
    const buttonBase = objectsToString(base)
    const buttonVariant = objectsToString(variants[buttonVariantProps][buttonColorProps])
    const buttonSize = objectsToString(sizes[buttonSizeProps])
    const classNames = tailwindMerge(buttonBase, buttonVariant, buttonSize, className)

    return (
      <button
        {...rest}
        ref={ref}
        className={classNames}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'