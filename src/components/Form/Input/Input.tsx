import { ComponentProps, forwardRef } from 'react'
import { base, InputDefault, inputError, InputType, sizes } from '@/components/Form/Input/style/theme'
import { objectsToString } from '@/utils/objectsToString'
import { tailwindMerge } from '@/utils/tailwindMerge'

type InputProps = Partial<InputType> & Omit<ComponentProps<'input'>, 'size'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size,
      isError,  
      className,
      type,
      registration,
      ...rest
    }, 
    ref
  ) => {
    // 1: set props
    const inputSizeProps = size ?? InputDefault.size
    const inputType = type ?? InputDefault.type

    // 2: set styles
    const inputBase = objectsToString(base)
    const inputSize = objectsToString(sizes[inputSizeProps])
    const inputErrorStyle = isError ? objectsToString(inputError.error) : ''
    const classNames = tailwindMerge(inputBase, inputSize, inputErrorStyle, className)

    return <input
      {...rest}
      type={inputType}
      className={classNames}
      ref={ref}
      {...registration}
    />
  }
)

Input.displayName = 'Input'