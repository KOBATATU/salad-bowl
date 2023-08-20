import { ComponentProps, forwardRef } from 'react'
import { CardBodyDefaultStyle, CardBodyType } from '@/components/Elements/Card/style/theme'
import { objectsToString } from '@/lib/objectsToString'
import { tailwindMerge } from '@/lib/tailwindMerge'

type CardBodyProps = Partial<CardBodyType> & ComponentProps<'div'>

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  (
    {
      className,
      children,
      ...rest
    },
    ref
  ) => {

    // 1: set styles
    const cardBodyBase = objectsToString(CardBodyDefaultStyle.base)
    const classNames = tailwindMerge(cardBodyBase, className)

    return <div {...rest} ref={ref} className={classNames}>
      { children }
    </div>
  }
)

CardBody.displayName = 'CardBody'
