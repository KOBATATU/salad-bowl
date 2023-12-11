'use client'
import { ComponentProps, forwardRef } from 'react'
import {createContextScope, Scope} from "@/components/Headless/Context/createContext";

type CollapsibleProps = {
  defaultOpen?: boolean;
  open?: boolean;
  disabled?: boolean;
  onOpenChange?(open: boolean): void;
}
const COLLAPSIBLE_NAME = 'Collapsible'
type ScopedProps<P> = P & { __scopeCollapsible?: Scope };

const [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME);
const [CollapsibleProvider, useCollapsibleContext] =
  createCollapsibleContext<CollapsibleProps>(COLLAPSIBLE_NAME)

export const Collapsible = forwardRef<HTMLDivElement,ScopedProps<CollapsibleProps>>(
  (
    {
      __scopeCollapsible,
      defaultOpen,
      open,
      disabled,
      onOpenChange,
      ...rest
    },
    ref
  ) => {

    // useCollapsibleContext({
    //
    // })


    return <></>
  })