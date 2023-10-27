import { ComponentProps, forwardRef } from 'react'
import { AlertDefaultStyle, AlertType, base } from '@/components/Notifications/Alert/style/theme'
import { variants } from '@/components/Notifications/Alert/style/variants'
import { objectsToString } from '@/utils/objectsToString'
import { tailwindMerge } from '@/utils/tailwindMerge'

type AlertProps = Partial<AlertType> & ComponentProps<'div'>

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant,
      color,
      open,
      prefetchIcon,
      children,
      className,
      ...rest
    },
    ref
  ) => {
    // 1: set props
    const alertVariantProp = variant ?? AlertDefaultStyle.variant
    const alertColorProp = color ?? AlertDefaultStyle.color
    const alertOpenProp = open ?? AlertDefaultStyle.open

    // 2: set styles
    const alertBase = objectsToString(base)
    const alertVariant = objectsToString(variants[alertVariantProp][alertColorProp])
    const classNames = tailwindMerge(alertBase, alertVariant, className)

    // 3: open or not
    if (!alertOpenProp) return null

    return <div {...rest} ref={ref} className={classNames}>
      { alertOpenProp && prefetchIcon}
      <div className={prefetchIcon ? 'ml-3' : ''}>
        { children }
      </div>
    </div>
  }
)

Alert.displayName = 'Alert'