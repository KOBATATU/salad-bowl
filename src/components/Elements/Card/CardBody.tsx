import { ComponentProps, forwardRef } from 'react'
import { Style } from '@/@types/style-type'
import { styles } from '@/components/Elements/Card/theme'
import { objectsToString } from '@/utils/objectsToString'
import { tailwindMerge } from '@/utils/tailwindMerge'

type CardBodyProps = {
  /**
   * カードボディのクラス名
   */
  className?: string
}

const cardBody: Style<Required<CardBodyProps>, typeof styles['body']> = {
  defaultProps: {
    className: ''
  },
  styles: styles['body']
}

export const CardBody = forwardRef<HTMLDivElement, ComponentProps<'div'> & CardBodyProps>(
  (
    {
      className,
      children,
      ...rest
    },
    ref
  ) => {

    // 1: set styles
    const { styles } = cardBody
    const cardBodyBase = objectsToString(styles.base)
    const classNames = tailwindMerge(cardBodyBase, className)

    return <div {...rest} ref={ref} className={classNames}>
      { children }
    </div>
  }
)

CardBody.displayName = 'CardBody'
