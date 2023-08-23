import type { UseFormRegisterReturn } from 'react-hook-form'

// 1: style base
export const sizes = {
  sm: {
    fontSize: 'text-sm',
    p: 'p-2',
    borderRadius: 'rounded-lg',
  },
  md: {
    fontSize: 'text-sm',
    p: 'p-2.5',
    borderRadius: 'rounded-lg',
  }
}

export const inputError = {
  error: {
    borderColor: 'border-red-500 placeholder-shown:border-red-500',
    borderColorFocused: 'focus:border-red-500',
  }
}

export const base = {
  border: 'border',
  borderGray: 'border-gray-300',
  background: 'bg-gray-50',
  focusRing: 'focus:ring-blue-500',
  focusRingBorder: 'focus:border-blue-500',
  width: 'w-full',
  height: 'h-full'
}

// 2: Input Type
export type InputType = {
  size: keyof typeof sizes
  base: typeof base
  isError: boolean
  type: 'text' | 'email' | 'password'
  registration?: UseFormRegisterReturn
  className?: string
}

// 3: Input Default Style
export const InputDefault: InputType = {
  size: 'md',
  base: base,
  type: 'text',
  isError: false,
}