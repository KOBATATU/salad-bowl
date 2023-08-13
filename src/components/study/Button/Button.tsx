'use client'
import React from "react";

import type { ButtonStyleType } from './theme'
import { ButtonDefaultStyle, variants, sizes, base } from './theme'
import { objectsToString } from '@/lib/objectsToString'
import { tailwindMerge } from '@/lib/tailwindMerge'

type ButtonProps = Partial<ButtonStyleType> & React.ComponentProps<"button">

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant, color, size, className, children, ...rest }, ref) => { 
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
