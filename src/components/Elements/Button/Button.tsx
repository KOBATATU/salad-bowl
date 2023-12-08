'use client'
import Ripple from 'material-ripple-effects'
import React, { forwardRef } from 'react'
import { Spinner } from '@/components/Elements'
import { button, ButtonProps } from '@/components/Elements/Button/style/theme'
import { objectsToString } from '@/utils/objectsToString'
import { tailwindMerge } from '@/utils/tailwindMerge'

export const Button = forwardRef<HTMLButtonElement, Omit<React.ComponentProps<'button'>,'className' | 'disabled'> & ButtonProps>(
  ({
    variant, 
    color, 
    size, 
    square,
    ripple,
    loading,
    fullWidth,
    className,
    disabled,
    children, 
    prefixIcon,
    suffixIcon,
    ...rest 
  }, ref) => {

    const { defaultProps, styles } = button
    
    // 1: set props
    const buttonVariantProp = variant ?? defaultProps.variant
    const buttonColorProp = color ?? defaultProps.color
    const buttonSizeProp = size ?? defaultProps.size
    const buttonSquareProp = square ?? defaultProps.square
    const buttonLoadingProp = loading ?? defaultProps.loading
    const buttonFullWidthProp = fullWidth ?? defaultProps.fullWidth
    const rippleProp = ripple ?? defaultProps.ripple

    // 2: set styles
    const buttonBase = objectsToString(styles.base)
    const buttonVariant = objectsToString(styles.variants.variants[buttonVariantProp][buttonColorProp])
    const buttonSize = objectsToString(styles.variants.sizes[buttonSizeProp])
    const buttonSquare = objectsToString(buttonSquareProp ? styles.variants.square : {})
    const buttonFullWidth = objectsToString(buttonFullWidthProp ? styles.variants.fullWidth : {})
    const buttonLoading = objectsToString(buttonLoadingProp ? styles.variants.loading: {})
    const buttonDisabled = objectsToString(buttonLoadingProp ? styles.variants.disable: {})
    const classNames = tailwindMerge(buttonBase, buttonVariant, buttonSize, buttonSquare, buttonFullWidth, buttonLoading, buttonDisabled, className)

    // 3: ripple
    const rippleEffect = new Ripple()
    
    const _children = () => {
      if (prefixIcon) {
        return (
          <span className='flex items-center'>
            <span className='mr-1 text-md '> {prefixIcon} </span>
            {children}
          </span>
        )
      }

      if (suffixIcon) {
        return (
          <span className='flex items-center'>
            {children}
            <span className='ml-1 text-md'> {suffixIcon} </span>
          </span>
        )
      }
      return children
    }

    return (
      <button
        {...rest}
        ref={ref}
        disabled={buttonLoadingProp || disabled}
        className={classNames}
        onMouseDown={(e) => {
          const onMouseDown = rest?.onMouseDown
          if(rippleProp) rippleEffect.create(e, 'dark')
          return typeof onMouseDown === 'function' && onMouseDown(e)
        }}
      >
        {
          buttonLoadingProp ?
            <Spinner /> :
            _children()
        }
      </button>
    )
  }
)

Button.displayName = 'Button'