import { ComponentProps, forwardRef } from 'react'
import { Style } from '@/@types/style-type'
import {  styles } from '@/components/Elements/List/theme'
import { objectsToString } from '@/utils/objectsToString'
import { tailwindMerge } from '@/utils/tailwindMerge'

type ListProps = {
  /**
   * listにクラスを追加
   */
  className?: string
}

const list: Style<ListProps, typeof styles['list']> = {
  defaultProps: {
    className: ''
  },
  styles: styles['list']
}

export const List = forwardRef<HTMLDivElement, ComponentProps<'div'> & ListProps>(
  (
    {
      className,
      children,
      ...rest
    },
    ref
  ) => {
    
    // 1: set styles
    const { styles } = list
    const base = objectsToString(styles.base)
    const classNames = tailwindMerge(base, className)
    
    return (
      <div
        role='list'
        {...rest}
        ref={ref}
        className={classNames}
      >
        {children}
      </div>
    )
  }
)

List.displayName = 'List'