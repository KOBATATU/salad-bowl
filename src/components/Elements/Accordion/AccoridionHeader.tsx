import { ComponentProps, forwardRef } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import { useAccordion } from '@/components/Elements/Accordion/AccordionContext'
import { AccordionHeaderType, base } from '@/components/Elements/Accordion/style/theme'
import { objectsToString } from '@/utils/objectsToString'
import { tailwindMerge } from '@/utils/tailwindMerge'

export type AccordionHeaderProps = AccordionHeaderType & ComponentProps<'div'>

export const AccordionHeader = forwardRef<HTMLDivElement, AccordionHeaderProps>(
  (
    {
      className,
      children,
      ...rest
    },
    ref
  ) => {
    // 1 : set styles
    const accordionHeaderBase = objectsToString(base.header)
    const classNames = tailwindMerge(accordionHeaderBase, className)

    // 2: accordion props
    const context = useAccordion()

    return (
      <div {...rest} ref={ref} className={classNames}>
        {children}
        {context.open ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp/>}
      </div>
    )
  }
)

AccordionHeader.displayName = 'AccordionHeader'