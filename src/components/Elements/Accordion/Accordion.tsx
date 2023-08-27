import { ComponentProps, forwardRef } from 'react'
import { AccordionContextProvider } from '@/components/Elements/Accordion/AccordionContext'
import { AccordionType, base } from '@/components/Elements/Accordion/style/theme'
import { objectsToString } from '@/lib/objectsToString'
import { tailwindMerge } from '@/lib/tailwindMerge'

type AccordionProps = AccordionType & ComponentProps<'div'>

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    { open, 
      className, 
      children, 
      ...rest
    }, 
    ref
  ) => {
    // 1 : set styles
    const accordionBase = objectsToString(base.accordion)
    const classNames = tailwindMerge(accordionBase, className)
    
    return (
      <AccordionContextProvider value={{
        open: open
      }}>
        <div {...rest} ref={ref} className={classNames}>
          {children}
        </div>
      </AccordionContextProvider>
    )
  }
)

Accordion.displayName = 'Accordion'