// 1: style base
import { ReactNode } from 'react'

export const base = {
  accordion: {
    display: 'block',
    position: 'relative',
    width: 'w-full',
  },
  header: {
    display: 'flex',
    justifyContent: 'justify-between',
    alignItems: 'items-center',
    width: 'w-full',
    py: 'py-4',
    borderWidth: 'border-b border-b-blue-gray-100',
    fontSmoothing: 'antialiased',
    fontSize: 'text-base',
    textAlign: 'text-left',
    fontWeight: 'font-semibold',
    lineHeight: 'leading-snug',
    userSelect: 'select-none',
    hover: 'hover:text-blue-gray-900',
  },
  body: {
    display: 'block',
    width: 'w-full',
    py: 'py-4',
    fontSmoothing: 'antialiased',
    fontSize: 'text-sm',
    fontWeight: 'font-light',
    lineHeight: 'leading-normal',
  }
}

// 2: Type
export type AccordionType = {
  open: boolean,
  className?: string
}
export type AccordionHeaderType = {
  className?: string
}
export type AccordionBodyType = {
  className?: string
  children?: ReactNode
}

