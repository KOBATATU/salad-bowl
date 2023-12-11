import Ripple from 'material-ripple-effects'
import React, {ComponentProps, forwardRef, Fragment, ReactNode} from 'react'
import {
  styles
} from '@/components/Elements/List/theme'
import { objectsToString } from '@/utils/objectsToString'
import { tailwindMerge } from '@/utils/tailwindMerge'
import {Style} from "@/@types/style-type";

type ListItemProps =  {
  /**
   * `true`のとき、リストアイテムが押下で若干グレーになる
   */
  ripple?: boolean

  /**
   * `true`のとき、リストアイテムがhoverしても背景色が透明にならない
   */
  disabled?: boolean

  /**
   * リストアイテムの前につくIcon
   */
  prefixIcon?: ReactNode

  /**
   * リストアイテムの後につくIcon
   */
  suffixIcon?: ReactNode

  /**
   * リストアイテムにクラスを追加
   */
  className?: string
}

const listItem: Style<ListItemProps & Required<Omit<ListItemProps, 'prefixIcon' | 'suffixIcon'>> , typeof styles['listItem']>  = {
  defaultProps: {
    ripple: false,
    disabled:false,
    className: '',
  },
  styles: styles['listItem']
} as const

export const ListItem = forwardRef<HTMLDivElement, ComponentProps<'div'> & ListItemProps>(
  (
    {
      className,
      children,
      ripple,
      disabled,
      prefixIcon,
      suffixIcon,
      ...rest
    },
    ref
  ) => {

    // 1: set styles
    const { defaultProps, styles } = listItem
    const disabledProps = disabled ?? defaultProps.disabled

    // 2: set styles
    const listItemBase = objectsToString(styles.base)
    const listItemDisabledProp = objectsToString(disabledProps ? styles.variants.disabled : {})
    const classNames = tailwindMerge(listItemBase, listItemDisabledProp, className)

    // 3: ripple
    const rippleProps = ripple ?? defaultProps.ripple
    const rippleEffect = new Ripple()

    const _children = () => {
      if (prefixIcon) {
        return (
          <Fragment>
            <span className='mr-1 text-md'> {prefixIcon} </span>
            {children}
          </Fragment>
        )
      }

      if (suffixIcon) {
        return (
          <Fragment>
            {children}
            <span className='ml-1 text-md'> {suffixIcon} </span>
          </Fragment>
        )
      }
      return children
    }

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
        {_children()}
      </div>
    )
  }
)

ListItem.displayName = 'ListItem'