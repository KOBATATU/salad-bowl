import { ComponentProps, forwardRef } from 'react'
import { CardDefaultStyle, CardType } from '@/components/Elements/Card/style/theme'
import { cardVariants } from '@/components/Elements/Card/style/variants'
import { objectsToString } from '@/utils/objectsToString'
import { tailwindMerge } from '@/utils/tailwindMerge'

type CardProps = Partial<Omit<CardType, 'base'>> & ComponentProps<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>(
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
    const cardVariantProps = variant ?? CardDefaultStyle.variant

    // 2: set styles
    const cardBase = objectsToString(CardDefaultStyle.base) 
    const cardVariant = objectsToString(cardVariants[cardVariantProps])
    const classNames = tailwindMerge(cardBase, cardVariant, className)
      
        
    return <div {...rest} ref={ref} className={classNames}>
      { children }
    </div>
  }
)

Card.displayName = 'Card'