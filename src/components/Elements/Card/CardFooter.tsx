import { ComponentProps, forwardRef } from 'react'
import {
  CardBodyDefaultStyle,
  CardFooterDefaultStyle,
  CardFooterType,
  footerDivider
} from '@/components/Elements/Card/style/theme'
import { objectsToString } from '@/utils/objectsToString'
import { tailwindMerge } from '@/utils/tailwindMerge'

type CardFooterProps = Partial<CardFooterType> & ComponentProps<'div'>

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  (
    {
      divider, 
      className, 
      children,
      ...rest 
    }, 
    ref
  ) => {
    // 1: set props
    const cardFooterDividerProps = divider ?? CardFooterDefaultStyle.divider
    
    // 2: set styles
    const cardFooterBase = objectsToString(CardFooterDefaultStyle.base)
    const cardFooterDivider = divider ? objectsToString(footerDivider) : ''
    const classNames = tailwindMerge(cardFooterBase, cardFooterDivider, className)

    return <div {...rest} ref={ref} className={classNames}>
      { children }
    </div>
  }
)

CardFooter.displayName = 'CardFooter'