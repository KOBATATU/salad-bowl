import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Slot } from '@/components/Headless/Slot/Slot'


const NODES = [
  'a',
  'button',
  'div',
  'form',
  'h2',
  'h3',
  'img',
  'input',
  'label',
  'li',
  'nav',
  'ol',
  'p',
  'span',
  'svg',
  'ul',
] as const

type PrimitivePropsWithRef<E extends React.ElementType> = React.ComponentPropsWithRef<E> & {
  asChild?: boolean
}

// forwardRefをしたコンポーネントの型
type PrimitiveForwardRefComponent<E extends React.ElementType> = React.ForwardRefExoticComponent<PrimitivePropsWithRef<E>>
type Primitives = { [E in typeof NODES[number]]: PrimitiveForwardRefComponent<E> }

export const Primitive = NODES.reduce((primitive, node) => {

  const Node = React.forwardRef((props: PrimitivePropsWithRef<typeof node>, ref) => {
    const { asChild, ...primitiveProps } = props
    const Comp: any = asChild ? Slot : node

    return <Comp {...primitiveProps} ref={ref}/>
  })

  Node.displayName = `Primitive.${node}`

  return { ...primitive, [node]: Node }
}, {} as Primitives)


export const composeEventHandlers = <E,>(
  originalEventHandler?: (event: E) => void,
  ourEventHandler?: (event: E) => void,
  { checkForDefaultPrevented = true } = {}
)=>{
  return function handlerEvent(event: E) {
    originalEventHandler?.(event)
    if (ourEventHandler) {
      return ourEventHandler(event)
    }
  }
}