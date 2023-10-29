// 1: style base
import { Dispatch, ReactNode, SetStateAction } from 'react'

export const sizes = {
  xs: {
    width: 'w-full md:w-3/5 lg:w-2/5 2xl:w-1/4',
    minWidth: 'min-w-[80%] md:min-w-[60%] lg:min-w-[40%] 2xl:min-w-[25%]',
    maxWidth: 'max-w-[80%] md:max-w-[60%] lg:max-w-[40%] 2xl:max-w-[25%]',
  },
  sm: {
    width: 'w-full md:w-2/3 lg:w-2/4 2xl:w-1/3',
    minWidth: 'min-w-[80%] md:min-w-[66.666667%] lg:min-w-[50%] 2xl:min-w-[33.333333%]',
    maxWidth: 'max-w-[80%] md:max-w-[66.666667%] lg:max-w-[50%] 2xl:max-w-[33.333333%]',
  },
  md: {
    width: 'w-full md:w-3/4 lg:w-3/5 2xl:w-2/5',
    minWidth: 'min-w-[90%] md:min-w-[75%] lg:min-w-[60%] 2xl:min-w-[40%]',
    maxWidth: 'max-w-[90%] md:max-w-[75%] lg:max-w-[60%] 2xl:max-w-[40%]',
  },
  lg: {
    width: 'w-full md:w-5/6 lg:w-3/4 2xl:w-3/5',
    minWidth: 'min-w-[90%] md:min-w-[83.333333%] lg:min-w-[75%] 2xl:min-w-[60%]',
    maxWidth: 'max-w-[90%] md:max-w-[83.333333%] lg:max-w-[75%] 2xl:max-w-[60%]',
  },
  xl: {
    width: 'w-full md:w-5/6 2xl:w-3/4',
    minWidth: 'min-w-[95%] md:min-w-[83.333333%] 2xl:min-w-[75%]',
    maxWidth: 'max-w-[95%] md:max-w-[83.333333%] 2xl:max-w-[75%]',
  },
  xxl: {
    display: 'flex',
    flexDirection: 'flex-col',
    width: 'w-screen',
    minWidth: 'min-w-[100vw]',
    maxWidth: 'max-w-[100vw]',
    height: 'h-screen',
    minHeight: 'min-h-[100vh]',
    maxHeight: 'max-h-[100vh]',
    m: 'm-0',
    borderRadius: 'rounded-none',
  },
} as const

export const modalBase = {
  display: 'flex',
  justifyContent: 'justify-center',
  round: 'rounded-2xl',
  background: 'bg-white',
  padding: 'p-6',
  shadow: 'shadow-xl'
} as const

// 2: Type
export type ModalProps = {
  isOpen: boolean,
  closeModal: Dispatch<SetStateAction<boolean>>,
  size?: keyof typeof sizes,
  children?: ReactNode,
  modalClassName?: string
}

// 3: Deault
export const modalDefault = {
  isOpen: false,
  size: 'md',
  base: modalBase
} as const
