import { Transition } from '@headlessui/react'
import { ComponentProps, forwardRef } from 'react'
import { useAccordion } from '@/components/Elements/Accordion/AccordionContext'
import { AccordionBodyType, base } from '@/components/Elements/Accordion/style/theme'
import { objectsToString } from '@/utils/objectsToString'
import { tailwindMerge } from '@/utils/tailwindMerge'

type AccordionBodyProps = AccordionBodyType & ComponentProps<'div'>

export const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>(
  (
    {
      className,
      children,
      ...rest
    },
    ref
  ) => {
    // 1 : set styles
    const baseAccordionBodyBase = objectsToString(base.body)
    const classNames = tailwindMerge(baseAccordionBodyBase, className)

    // 2: accordion props
    const { open } = useAccordion()

    return (
      <Transition
        as={'div'}
        show={open}
        enter="transition-all duration-200"
        enterFrom="max-h-0"
        enterTo="max-h-96"
        leave="transition-all duration-200"
        leaveFrom="max-h-96"
        leaveTo="max-h-0"
        className={'overflow-hidden'}
      >
        <div
          {...rest}
          className={classNames}
        >
          {children}
        </div>
      </Transition>
    )
  }
)

AccordionBody.displayName = 'AccordionBody'