import { domAnimation, LazyMotion, m, MotionProps } from 'framer-motion'
import { forwardRef } from 'react'
import { useAccordion } from '@/components/Elements/Accordion/AccordionContext'
import { AccordionBodyType, base } from '@/components/Elements/Accordion/style/theme'
import { objectsToString } from '@/lib/objectsToString'
import { tailwindMerge } from '@/lib/tailwindMerge'

type AccordionBodyProps = AccordionBodyType & Omit<MotionProps, 'children'>

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

    // 3. set animation
    const heightAnimation = {
      unmount: {
        height: '0px',
        transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] },
      },
      mount: {
        height: 'auto',
        transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] },
      },
    }

    return (
      <LazyMotion features={domAnimation}>
        <m.div
          className={'overflow-hidden'}
          initial="unmount"
          exit="unmount"
          animate={open ? 'mount' : 'unmount'}
          variants={heightAnimation}
        >
          <m.div {...rest} ref={ref} className={classNames}>
            { children }
          </m.div>
        </m.div>
      </LazyMotion>
    )
  }
)

AccordionBody.displayName = 'AccordionBody'