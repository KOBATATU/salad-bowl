// 1: style base

import { ReactNode } from 'react'

export const base = {
  base: {
    display: 'flex',
    flexCol: 'flex-col',
    padding: 'p-1',
    marginY: 'my-1'
  }
}

// 2: Wrapper Type
export type FormWrapperType = {
  className?: string
  label: ReactNode
  errorMessage?: string
  required: boolean
}

// 3: DefaultStyle
export const FormWrapperDefaultStyle = {
  className: '',
  required: false
}