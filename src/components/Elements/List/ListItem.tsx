import Ripple from 'material-ripple-effects'
import { ComponentProps, forwardRef } from 'react'
import {
  ListItemDefaultStyle,
  ListItemStyleType,
} from '@/components/Elements/List/style/theme'
import { objectsToString } from '@/utils/objectsToString'
import { tailwindMerge } from '@/utils/tailwindMerge'
type ListItemProps = Partial<ListItemStyleType> & ComponentProps<'div'>

export const ListItem = forwardRef<HTMLDivElement, ListItemProps>(
  (
    {
      className,
      children,
      ripple,
      ...rest
    },
    ref
  ) => {

    // 1: set styles
    const base = objectsToString(ListItemDefaultStyle.base)
    const classNames = tailwindMerge(base, className)

    // 2: ripple
    const rippleProps = ripple ?? ListItemDefaultStyle.ripple
    const rippleEffect = new Ripple()

    return (
      <div
        {...rest}
        ref={ref}
        className={classNames}
        onMouseDown={(e) => {
          const onMouseDown = rest?.onMouseDown
          if(rippleProps) rippleEffect.create(e, 'dark')
          return typeof onMouseDown === 'function' && onMouseDown(e)
        }}
      >
        {children}
      </div>
    )
  }
)

ListItem.displayName = 'ListItem'