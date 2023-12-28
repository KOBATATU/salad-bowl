import React, { useRef } from 'react'
import { createContext } from '@/components/Headless/Context/createContext'
import { composeEventHandlers, Primitive } from '@/components/Headless/Primitive/Primitive'
import { useComposedRefs } from '@/components/Headless/composeRefs/composeRefs'
import { useAnimationWidthHeight } from '@/hooks/useAnimation'
import { useControllableState } from '@/hooks/useControllableState'
import { useId } from '@/hooks/useId'

type position = {
  left: number
  right: number
  top: number
  bottom: number
}
const POPOVER_NAME= 'ACCORDION'
type PopoverContextValueType = {
  contentId: string
  open: boolean
  type: keyof position
  onOpenToggle(event: React.MouseEvent): void
  position: position,
  setPosition: (nextValue: position) => void
}

const [ PopoverProvider, usePopoverContext ] = createContext<PopoverContextValueType>(POPOVER_NAME)
type PopoverElement = React.ElementRef<typeof Primitive.div>
type PopoverProps = {
  defaultOpen?: boolean
  open?: boolean
  onOpen?: (open: boolean) => void
  type?: keyof position
} & React.ComponentPropsWithRef<typeof Primitive.div>

function getState(open?: boolean) {
  return open ? 'open' : 'closed'
}

export const Popover = React.forwardRef<PopoverElement, PopoverProps>(
  (props, ref) => {
    const { defaultOpen, onOpen, open:openProp, type='bottom', ...rest } = props
    const _ref = useRef<PopoverElement>(null)

    //開閉フラグ
    const [ open=false, setOpen ] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen,
      onChange: onOpen
    })
    //位置の大きさ
    const [popoverPosition, setPopoverPosition] =
      React.useState<position>({  left: 0, right: 0, top: 0, bottom:0 })

    //開閉
    const openChange = React.useCallback((event:React.MouseEvent)=>{
      setOpen(!open)
    }, [open, setOpen])

    const composedRefs = useComposedRefs(ref,_ref)

    //外側のボタンを押下したときに閉じるようにする
    React.useEffect(()=>{
      const handleOff = (event: MouseEvent | TouchEvent)=>{
        const node = _ref.current
        if(node && !node.contains(event.target as Node)) {
          setOpen(false)
        }
      }

      document.addEventListener('click', handleOff, false)
      document.addEventListener('touchend', handleOff, false)
      return () => {
        document.removeEventListener('click', handleOff, false)
        document.removeEventListener('touchend', handleOff, false)
      }
    }, [setOpen])


    return (
      <PopoverProvider 
        contentId={useId(rest.id)} 
        open={open} 
        type={type}
        onOpenToggle={openChange}
        position={popoverPosition}
        setPosition={setPopoverPosition}
      >
        <Primitive.div
          {...rest}
          ref={composedRefs}
        />
      </PopoverProvider>
    )
  }
)
Popover.displayName = POPOVER_NAME

const POPOVER_TRIGGER_NAME = 'PopoverTrigger'

type PopoverTriggerElement = React.ElementRef<typeof Primitive.button>
type PrimitiveButtonProps = React.ComponentPropsWithoutRef<typeof Primitive.button>
type PopoverTriggerProps = PrimitiveButtonProps & {}

export const PopoverTrigger = React.forwardRef<PopoverTriggerElement, PopoverTriggerProps>(
  (props, ref) => {
    const { ...rest } = props
    const context = usePopoverContext(POPOVER_TRIGGER_NAME)
    const _ref = useRef<PopoverTriggerElement>(null)
    const composedRefs = useComposedRefs(ref,_ref)
    //位置の決定
    const onClick = React.useCallback((event: React.MouseEvent)=>{

      const node = _ref.current
      if (node) {
        if(context.type === 'bottom') {
          const { top, left, height, width } = node.getBoundingClientRect()
          context.setPosition({ ...context.position, top: top + height, left: left + width })
        }
      }
      context.onOpenToggle(event)

    },[context])

    return (
      <Primitive.button
        type="button"
        aria-controls={context.contentId}
        aria-expanded={context.open}
        data-state={getState(context.open)}
        {...rest}
        ref={composedRefs}
        onClick={composeEventHandlers(rest.onClick, onClick)}
      />
    )
  }
)
PopoverTrigger.displayName = POPOVER_TRIGGER_NAME

const POPOVER_CONTENT_NAME = 'PopoverContent'
type PopoverContentProps = React.ComponentPropsWithRef<typeof Primitive.div> & {}
type PopoverContentImplElement = React.ElementRef<typeof Primitive.div>;

export const PopoverContent = React.forwardRef<PopoverElement,PopoverContentProps >(
  (props, forwardedRef) => {
    const { children,...rest } = props
    const context = usePopoverContext(POPOVER_CONTENT_NAME)
    const ref = useRef<PopoverContentImplElement>(null)
    const { isPresent, width, height } = useAnimationWidthHeight({ ref, open: context.open })
    const composedRefs = useComposedRefs(ref, forwardedRef)
    const isOpen = context.open || isPresent
    
    const position = React.useMemo(()=>{
      const node = ref.current
      if (node && width) {

        if(context.type === 'bottom') {
          return {
            'top': context.position.top,
            'left': context.position.left - width
          }
        }
        if(context.type === 'top') {
          return {
            'right': 0
          }
        }
      }

    }, [context.type, context.position.top, context.position.left, width])

    return (
      <Primitive.div
        data-state={getState(context.open)}
        id={context.contentId}
        {...rest}
        hidden={!isOpen}
        ref={composedRefs}
        style={{
          ['--radix-popover-content-height' as any]: height ? `${height}px` : undefined,
          ['--radix-popover-content-width' as any]: width ? `${width}px` : undefined,
          'position': 'absolute',
          'left': position?.left,
          'top': position?.top,
          'right': position?.right,
          ...rest.style,
        }}
      >
        {isOpen && children}
      </Primitive.div>
    )
  }
)
PopoverContent.displayName = POPOVER_CONTENT_NAME
