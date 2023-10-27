import { ComponentProps, forwardRef } from 'react'
import { listBase, ListStyleType } from '@/components/Elements/List/style/theme'
import { objectsToString } from '@/utils/objectsToString'
import { tailwindMerge } from '@/utils/tailwindMerge'

type ListProps = Partial<ListStyleType> & ComponentProps<'div'>

export const List = forwardRef<HTMLDivElement, ListProps>(
  (
    { 
      className,
      children,
      ...rest
    },
    ref
  ) => {
    
    // 1: set styles
    const base = objectsToString(listBase)
    const classNames = tailwindMerge(base, className)
    
    return (
      <div
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