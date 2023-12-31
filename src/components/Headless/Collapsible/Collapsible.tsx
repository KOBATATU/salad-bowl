'use client'
import React, { forwardRef, useRef } from 'react'
import { createContextScope, Scope } from '@/components/Headless/Context/createContext'
import { composeEventHandlers, Primitive } from '@/components/Headless/Primitive/Primitive'
import { useComposedRefs } from '@/components/Headless/composeRefs/composeRefs'
import { useAnimationWidthHeight } from '@/hooks/useAnimation'
import { useControllableState } from '@/hooks/useControllableState'
import { useId } from '@/hooks/useId'

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

type CollapsibleElement = React.ElementRef<typeof Primitive.div>
type CollapsibleProps = {
  defaultOpen?: boolean;
  contentId?: string;
  open?: boolean;
  disabled?: boolean;
  children?: React.ReactNode
  onOpenChange?(open: boolean): void;
} & React.ComponentPropsWithoutRef<typeof Primitive.div>
export const Collapsible = forwardRef<CollapsibleElement,ScopedProps<CollapsibleProps>>(
  (
    {
      __scopeCollapsible,
      defaultOpen,
      open: openProp,
      disabled,
      onOpenChange,
      ...rest
    },
    ref
  ) => {
    
    const [open = false, setOpen] = 
      useControllableState({ prop: openProp, onChange: onOpenChange, defaultProp: defaultOpen })

    // callbackする理由は以下
    // buttonにこの関数を渡すだけで済む
    // 不要な関数の再計算が不要
    const openChange = React.useCallback(
      ()=> {
        setOpen(!open)
      }, [setOpen, open]
    )

    return (
      <CollapsibleProvider
        scope={__scopeCollapsible}
        disabled={disabled}
        contentId={useId()}
        open={open}
        onOpenToggle={openChange}
      >
        <Primitive.div
          data-state={getState(open)} 
          data-disabled={disabled ? '' : undefined}
          {...rest} 
          ref={ref}
        />
      </CollapsibleProvider>
    )
  })
Collapsible.displayName = COLLAPSIBLE_NAME

/* -------------------------------------------------------------------------------------------------
 * CollapsibleTrigger
 * -----------------------------------------------------------------------------------------------*/
const TRIGGER_NAME = 'CollapsibleTrigger'

type CollapsibleTriggerElement = React.ElementRef<typeof Primitive.button>
type PrimitiveButtonProps = React.ComponentPropsWithoutRef<typeof Primitive.button>
type CollapsibleTriggerProps = PrimitiveButtonProps & {}

export const CollapsibleTrigger = forwardRef<HTMLButtonElement, ScopedProps<CollapsibleTriggerProps>>(
  (
    {
      __scopeCollapsible,
      ...triggerProps
    },
    ref
  ) => {
    const context = useCollapsibleContext(TRIGGER_NAME, __scopeCollapsible)


    return (
      <Primitive.button
        type="button"
        aria-controls={context.contentId}
        aria-expanded={context.open || false}
        data-state={getState(context.open)}
        data-disabled={context.disabled ? '' : undefined}
        disabled={context.disabled}
        {...triggerProps}
        ref={ref}
        onClick={composeEventHandlers(triggerProps.onClick , context.onOpenToggle)}
      />
    )
  }
)

CollapsibleTrigger.displayName = TRIGGER_NAME

/* -------------------------------------------------------------------------------------------------
 * CollapsibleContent
 * -----------------------------------------------------------------------------------------------*/
type PrimitiveDivProps = React.ComponentPropsWithoutRef<typeof Primitive.div>;

type CollapsibleContentImplElement = React.ElementRef<typeof Primitive.div>;
interface CollapsibleContentImplProps extends PrimitiveDivProps {
  present: boolean;
}
interface CollapsibleContentProps extends Omit<CollapsibleContentImplProps, 'present'> {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}


const CONTENT_NAME = 'CollapsibleContent'

export const CollapsibleContent = forwardRef<CollapsibleContentImplElement, CollapsibleContentProps>(
  (props: ScopedProps<CollapsibleContentProps>, ref) => {
    const { forceMount, ...contentProps } = props

    const context = useCollapsibleContext(CONTENT_NAME, props.__scopeCollapsible)
    return (
      // <Presence present={forceMount || context.open}>
      //   {({ present }) => (
      //     <>
      <CollapsibleContentImpl {...contentProps} ref={ref} present={false}/>
      //     </>
      //   )}
      // </Presence>
    )
  }
)
CollapsibleContent.displayName =CONTENT_NAME

const CollapsibleContentImpl = forwardRef<CollapsibleContentImplElement, ScopedProps<CollapsibleContentImplProps>>(
  ({
    children,
    ...rest
  }, forwardedRef) => {
    const context = useCollapsibleContext(CONTENT_NAME, rest.__scopeCollapsible)
    const ref = useRef<CollapsibleElement>(null)
    const composedRefs = useComposedRefs(ref)
    const { isPresent, width, height } = useAnimationWidthHeight({ ref, open: context.open })

    const isOpen = context.open || isPresent


    return (
      <Primitive.div
        data-state={getState(context.open)}
        data-disabled={context.disabled ? '' : undefined}
        id={context.contentId}
        {...rest}
        ref={composedRefs}
        hidden={!isOpen}
        style={{
          ['--radix-collapsible-content-height' as any]: height ? `${height}px` : undefined,
          ['--radix-collapsible-content-width' as any]: width ? `${width}px` : undefined,
          ...rest.style,
        }}
      >
        {isOpen && children}
      </Primitive.div>
    )
  }
)

CollapsibleContentImpl.displayName = 'CollapsibleContentImpl'