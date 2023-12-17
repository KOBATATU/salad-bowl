import { composeRefs } from '@radix-ui/react-compose-refs'
import React from 'react'

type SlotProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode
}

export const Slot = React.forwardRef<HTMLElement, SlotProps>(
  (props, ref) => {
    const { children, ...slotProps } = props

    return (
      <SlotClone {...slotProps} ref={ref}>
        {children}
      </SlotClone>
    )
  })
Slot.displayName = 'Slot'

type SlotCloneProps = {
  children: React.ReactNode
}

const SlotClone = React.forwardRef<any, SlotCloneProps>(
  (props, forwardedRef) => {
    const { children, ...slotProps } = props

    if(React.isValidElement(children)) {

      return React.cloneElement<any>(children, {
        ...mergeProps(slotProps, children.props),
        ref: forwardedRef ? composeRefs(forwardedRef, (children as any).ref) : (children as any).ref,
      })
    }
    return null
  }
)
SlotClone.displayName = 'SlotClone'

type AnyProps = Record<string, any>
const mergeProps = (slotProps: AnyProps, childProps: AnyProps) => {

  const overrideProps = { ...childProps }

  for (const propName in childProps) {
    const slotPropValue = slotProps[propName]
    const childPropValue = childProps[propName]

    const isHandler = /^on[A-Z]/.test(propName)
    if(isHandler) {
      if (slotPropValue && childPropValue) {
        // slot及び子コンポーネントにhandlerがある場合は両方実行
        overrideProps[propName] = (...args: unknown[]) => {
          childPropValue(...args)
          slotPropValue(...args)
        }
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue
      }
    }

    else if (propName === 'style') {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue }
    } else if (propName === 'className') {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(' ')
    }

  }
  return { ...slotProps, ...overrideProps }

}