'use client'
import { useLayoutEffect } from '@radix-ui/react-use-layout-effect'
import React, { ComponentProps, forwardRef, useRef } from 'react'
import { createContextScope, Scope } from '@/components/Headless/Context/createContext'
import { useId } from '@/components/Headless/id/id'

type CollapsibleContextValueType = {
  contentId: string;
  disabled?: boolean;
  open: boolean;
  onOpenToggle(): void;
};

const COLLAPSIBLE_NAME = 'Collapsible'
type ScopedProps<P> = P & { __scopeCollapsible?: Scope };

const [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME)
const [CollapsibleProvider, useCollapsibleContext] =
  createCollapsibleContext<CollapsibleContextValueType>(COLLAPSIBLE_NAME)

function getState(open?: boolean) {
  return open ? 'open' : 'closed'
}

type CollapsibleProps = {
  defaultOpen?: boolean;
  contentId?: string;
  open: boolean;
  disabled?: boolean;
  children?: React.ReactNode
  onOpenChange(open: boolean): void;
}
export const Collapsible = forwardRef<HTMLDivElement,ScopedProps<CollapsibleProps>>(
  (
    {
      __scopeCollapsible,
      defaultOpen,
      open,
      disabled,
      onOpenChange,
      children,
      ...rest
    },
    ref
  ) => {

    // useControllableStateの役割をしる
    // const [open = false, setOpen] = useControllableState({
    //   prop: openProp,
    //   defaultProp: defaultOpen,
    //   onChange: onOpenChange,
    // });

    // callbackする理由はいか(ライブラリではやっているがそこまでする必要もないとは思う)
    // buttonにこの関数を渡すだけで済む
    // 不要な関数の再計算が不要
    const openChange = React.useCallback(
      ()=> {
        onOpenChange(!open)
      }, [open, onOpenChange]
    )

    return (
      <CollapsibleProvider
        scope={__scopeCollapsible}
        disabled={disabled}
        contentId={useId()}
        open={open}
        onOpenToggle={openChange}
      >
        <div {...rest} ref={ref} data-state={getState(open)} data-disabled={disabled ? '' : undefined}>
          {children}
        </div>
      </CollapsibleProvider>
    )
  })
Collapsible.displayName = COLLAPSIBLE_NAME

/* -------------------------------------------------------------------------------------------------
 * CollapsibleTrigger
 * -----------------------------------------------------------------------------------------------*/
const TRIGGER_NAME = 'CollapsibleTrigger'

export const CollapsibleTrigger = forwardRef<HTMLButtonElement, ScopedProps<React.ComponentProps<'button'>>>(
  (
    {
      __scopeCollapsible,
      children,
      ...triggerProps
    },
    ref
  ) => {
    const context = useCollapsibleContext(TRIGGER_NAME, __scopeCollapsible)


    return (<button
      type="button"
      aria-controls={context.contentId}
      aria-expanded={context.open || false}
      data-state={getState(context.open)}
      data-disabled={context.disabled ? '' : undefined}
      disabled={context.disabled}
      {...triggerProps}
      ref={ref}
      onClick={triggerProps.onClick ?? context.onOpenToggle}
    >
      {children}
    </button>)
  }
)

CollapsibleTrigger.displayName = TRIGGER_NAME

/* -------------------------------------------------------------------------------------------------
 * CollapsibleContent
 * -----------------------------------------------------------------------------------------------*/

const CONTENT_NAME = 'CollapsibleContent'

type CollapsibleContentProps = {
  forceMount?: boolean
}
export const CollapsibleContent = forwardRef<HTMLDivElement, ComponentProps<'div'> & ScopedProps<CollapsibleContentProps>>(
  ({
    forceMount,
    children,
    ...rest
  }) => {
    const context = useCollapsibleContext(CONTENT_NAME, rest.__scopeCollapsible)
    const ref = useRef<HTMLDivElement>(null)
    const heightRef = useRef<number | null>(0)
    const widthRef = useRef<number | null>(0)
    const isOpen = context.open

    useLayoutEffect(()=> {
      const node = ref.current
      if (node) {

        const rect = node.getBoundingClientRect()
        heightRef.current = rect.height
        widthRef.current = rect.width
      }
    }, [ context.open ])

    return <div
      data-state={getState(context.open)}
      data-disabled={context.disabled ? '' : undefined}
      id={context.contentId}
      hidden={!isOpen}
      {...rest}
      ref={ref}
      style={{
        ['--radix-collapsible-content-height' as any]: heightRef.current ? `${heightRef.current}px` : undefined,
        ['--radix-collapsible-content-width' as any]: widthRef.current ? `${widthRef.current}px` : undefined,
        ...rest.style
      }}
    >
      {isOpen && children}
    </div>
  }
)