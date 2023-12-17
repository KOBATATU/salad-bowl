import { Presence } from '@radix-ui/react-presence'
import React, { useRef } from 'react'
import { createContext } from '@/components/Headless/Context/createContext'
import { composeEventHandlers, Primitive } from '@/components/Headless/Primitive/Primitive'
import { useComposedRefs } from '@/components/Headless/composeRefs/composeRefs'
import { useAnimationWidthHeight } from '@/hooks/useAnimation'
import { useControllableState } from '@/hooks/useControllableState'
import { useId } from '@/hooks/useId'

const ACCORDION_NAME= 'ACCORDION'
type AccordionContextValueType = {
  defaultOpen?: string
  contentId: string
  open: string
  type: string
  onOpenToggle(nextValue: string): void
}
const [ AccordionProvider, useAccordionContext ] = createContext<AccordionContextValueType>(ACCORDION_NAME)

type  AccordionElement = React.ElementRef<typeof Primitive.div>
type AccordionProps = {
  defaultOpen?: string
  open?: string
  onOpen?: (open: string) => void
  type?: 'single' | 'multi'
} & React.ComponentPropsWithRef<typeof Primitive.div>

export const Accordion = React.forwardRef<AccordionElement, AccordionProps>(
  ( props, ref) => {
    const { defaultOpen, open: openProp, onOpen, type, ...rest } = props
    
    const [ open='', setOpen ] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen,
      onChange: onOpen
    })

    const openChange = React.useCallback(
      (nextValue: string)=> {
        setOpen(nextValue)
      }, [setOpen]
    )

    return (
      <AccordionProvider
        contentId={useId(props.id)}
        open={open}
        onOpenToggle={openChange}
        type={type ?? 'single'}
        defaultOpen={defaultOpen}
      >
        <Primitive.div 
          data-state={open}
          {...rest}
          ref={ref}
        />
      </AccordionProvider>
    )
    
  }
)

Accordion.displayName = ACCORDION_NAME

const ACCORDION_ITEM= 'ACCORDION_ITEM'
type AccordionItemContextValueType = {
  value: string
  contentId: string
  isOpen: boolean
  onOpenToggle(): void
}
const [ AccordionItemProvider, useAccordionItemContext ] = createContext<AccordionItemContextValueType>(ACCORDION_ITEM)
type AccordionItemProps = {
  value: string
} & React.ComponentPropsWithRef<typeof Primitive.div>

export const AccordionItem = React.forwardRef<AccordionElement, AccordionItemProps>(
  (props, ref) => {
    const { value, ...rest } = props
    const context = useAccordionContext(ACCORDION_NAME)
    const id = useId(props.id)
    const [ itemOpen='item', setItemOpen ] = useControllableState({
      prop: undefined,
      onChange: undefined,
      defaultProp: context.type === 'single' ? context.open : value
    })

    const onClick = React.useCallback(()=>{
      if(context.type === 'single') {
        setItemOpen((prevState) => prevState === value ? 'item' : value)
      }
      if(context.type === 'multi') {
        setItemOpen((prevState) => {
          if(prevState === context.open ) {
            return 'item'
          }
          return value
        })
        context.onOpenToggle(value)
      }

    }, [context, setItemOpen, value])

    const isOpen = context.type === 'single' ?
      value === itemOpen :
      context.open === itemOpen

    return (
      <AccordionItemProvider
        value={value}
        contentId={id}
        onOpenToggle={onClick}
        isOpen={isOpen}
      >
        <Primitive.div
          data-state={getState(isOpen)}
          id={id}
          {...rest}
          ref={ref}
        />
      </AccordionItemProvider>
    )
  }
)
AccordionItem.displayName = ACCORDION_ITEM


const ACCORDION_TRIGGER= 'ACCORDION_TRIGGER'
type  AccordionTriggerElement = React.ElementRef<typeof Primitive.button>
type AccordionTriggerProps = {} & React.ComponentPropsWithRef<typeof Primitive.button>

export const AccordionTrigger = React.forwardRef<AccordionTriggerElement, AccordionTriggerProps>(
  (props, ref) => {
    const { ...rest } = props
    const accordionContext = useAccordionContext(ACCORDION_NAME)
    const accordionItemContext = useAccordionItemContext(ACCORDION_TRIGGER)

    return (
      <Primitive.button
        type="button"
        aria-controls={accordionItemContext.contentId}
        aria-expanded={accordionItemContext.isOpen}
        data-state={getState(accordionItemContext.isOpen)}
        {...rest}
        ref={ref}
        onClick={composeEventHandlers(props.onClick, accordionItemContext.onOpenToggle)}
      />
    )
  }
)

AccordionTrigger.displayName = ACCORDION_TRIGGER

const ACCORDION_CONTENT = 'ACCORDION_CONTENT'

export const AccordionContent = React.forwardRef<AccordionElement, AccordionContentProps>(
  (props, ref) => {
    const { present, ...rest } = props
    const accordionItemContext = useAccordionItemContext(ACCORDION_TRIGGER)

    return (
      <Presence present={accordionItemContext.isOpen}>
        {({ present }) => (
          <AccordionContentImpl  {...rest} ref={ref} />
        )}
      </Presence>
    )
  }
)
AccordionContent.displayName = ACCORDION_CONTENT

const ACCORDION_CONTENT_IMPL = 'ACCORDION_CONTENT_IMPL'
type AccordionContentProps = {present?: boolean} & React.ComponentPropsWithRef<typeof Primitive.div>
export const AccordionContentImpl = React.forwardRef<AccordionElement, AccordionContentProps>(
  (props, forwardedRef) => {
    const { children, ...rest } = props
    const accordionContext = useAccordionContext(ACCORDION_NAME)
    const accordionItemContext = useAccordionItemContext(ACCORDION_TRIGGER)
    
    const ref = useRef<AccordionElement>(null)
    const { isPresent, widthRef, heightRef } = useAnimationWidthHeight({ ref, open: accordionItemContext.isOpen })
    const composedRefs = useComposedRefs(ref, forwardedRef)
    const isOpen = React.useMemo(()=>accordionItemContext.isOpen || isPresent, [accordionItemContext.isOpen, isPresent])


    return (
      <Primitive.div 
        data-state={getState(accordionItemContext.isOpen)}
        id={accordionItemContext.contentId}
        {...rest}
        ref={composedRefs}
        hidden={!isOpen}
        style={{
          ['--salad-accordion-content-height' as any]: heightRef.current ? `${heightRef.current}px` : undefined,
          ['--salad-accordion-content-width' as any]: widthRef.current ? `${widthRef.current}px` : undefined,
          ...rest.style,
        }}
      >
        {isOpen && children}
      </Primitive.div>
    )
  }
)
AccordionContentImpl.displayName = ACCORDION_CONTENT_IMPL

function getState(open?: boolean) {
  return open ? 'open' : 'closed'
}