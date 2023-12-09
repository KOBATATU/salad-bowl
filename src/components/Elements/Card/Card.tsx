import { ComponentProps, forwardRef } from 'react'
import { Style } from '@/@types/style-type'
import { styles } from '@/components/Elements/Card/theme'
import { cardVariants } from '@/components/Elements/Card/variants'
import { objectsToString } from '@/utils/objectsToString'
import { tailwindMerge } from '@/utils/tailwindMerge'

type CardProps =  {
  /**
   * カードのスタイルの種類
   */
  variant?: keyof typeof cardVariants

  /**
   * カードにクラスを追加
   */
  className?: string
  
}

const card: Style<Required<CardProps>, typeof styles['card']> = {
  defaultProps: {
    variant: 'contained',
    className: ''
  },
  styles: styles['card']
} as const

export const Card = forwardRef<HTMLDivElement ,ComponentProps<'div'> & CardProps>(
  (
    { 
      variant, 
      className, 
      children,  
      ...rest 
    }, 
    ref
  ) => {
    // 1: set props
    const { defaultProps, styles } = card
    const cardVariantProp = variant ?? defaultProps.variant

    // 2: set styles
    const cardBase = objectsToString(styles.base)
    const cardVariant = objectsToString(styles.variants.variants[cardVariantProp])
    const classNames = tailwindMerge(cardBase, cardVariant, className)

    return <div {...rest} ref={ref} className={classNames}>
      { children }
    </div>
  }
)

Card.displayName = 'Card'