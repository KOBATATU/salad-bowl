import {CardDefaultStyle, CardType} from "@/components/Elements/Card/style/theme";
import {ComponentProps, forwardRef} from "react";
import {objectsToString} from "@/lib/objectsToString";
import {cardVariants} from "@/components/Elements/Card/style/variants";
import {tailwindMerge} from "@/lib/tailwindMerge";

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