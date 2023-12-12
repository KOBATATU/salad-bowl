'use client'
import React, { ComponentProps, forwardRef } from 'react'
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
      ...triggerProps
    },
    ref
  ) => {
    const context = useCollapsibleContext(TRIGGER_NAME, __scopeCollapsible);


    return <></>
  }
)