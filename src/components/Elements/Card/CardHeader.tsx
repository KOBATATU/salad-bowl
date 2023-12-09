import { ComponentProps, forwardRef } from 'react'
import { Style } from '@/@types/style-type'
import { styles } from '@/components/Elements/Card/theme'
import { objectsToString } from '@/utils/objectsToString'
import { tailwindMerge } from '@/utils/tailwindMerge'

type CardHeaderProps = {
  /**
   * カードヘッダーのクラス名
   */
  className?: string
}

const cardHeader: Style<Required<CardHeaderProps>, typeof styles['header']> = {
  defaultProps: {
    className: ''
  },
  styles: styles['header']
}

export const CardHeader = forwardRef<HTMLDivElement, ComponentProps<'div'> &  CardHeaderProps>(
  (
    {
      className,
      children,
      ...rest
    },
    ref
  ) => {

    // 1: set styles
    const {  styles } = cardHeader

    const cardHeaderBase = objectsToString(styles.base)
    const classNames = tailwindMerge(cardHeaderBase, className)

    return <div {...rest} ref={ref} className={classNames}>
      { children }
    </div>
  }
)

CardHeader.displayName = 'CardHeader'