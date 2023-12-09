import { ComponentProps, forwardRef } from 'react'
import { Style } from '@/@types/style-type'
import {
  styles
} from '@/components/Elements/Card/theme'
import { objectsToString } from '@/utils/objectsToString'
import { tailwindMerge } from '@/utils/tailwindMerge'

type CardFooterProps = {

  /**
   * カードフッターの境目
   */
  divider?: boolean
  
  /**
   * カードボディのクラス名
   */
  className?: string
}

const cardFooter: Style<Required<CardFooterProps>, typeof styles['footer']> = {
  defaultProps: {
    divider: false,
    className: ''
  },
  styles: styles['footer']
}

export const CardFooter = forwardRef<HTMLDivElement, ComponentProps<'div'> & CardFooterProps>(
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
    const {  defaultProps, styles } = cardFooter
    const cardFooterDividerProp = divider ?? defaultProps.divider
    
    // 2: set styles
    const cardFooterBase = objectsToString(styles.base)
    const cardFooterDivider = objectsToString(cardFooterDividerProp ? styles.variants.divider : {})
    const classNames = tailwindMerge(cardFooterBase, cardFooterDivider, className)

    return <div {...rest} ref={ref} className={classNames}>
      { children }
    </div>
  }
)

CardFooter.displayName = 'CardFooter'