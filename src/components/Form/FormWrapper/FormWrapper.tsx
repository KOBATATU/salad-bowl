import { ComponentProps, forwardRef } from 'react'
import { Typography } from '@/components/Elements'
import { base, FormWrapperDefaultStyle, FormWrapperType } from '@/components/Form/FormWrapper/style/theme'
import { objectsToString } from '@/utils/objectsToString'
import { tailwindMerge } from '@/utils/tailwindMerge'

type FormWrapperProps = FormWrapperType & ComponentProps<'div'>

export const FormWrapper = forwardRef<HTMLDivElement, FormWrapperProps>(
  (
    {
      className,
      children,
      label,
      required,
      errorMessage,
      ...rest
    },
    ref
  ) => {
    //1: set style
    const baseStyle = objectsToString(base.base)
    const classNames = tailwindMerge(baseStyle, className)
    
    return (
      <div {...rest} ref={ref} className={classNames}>
        <div className={'mb-2 flex flex-row'}>
          <label>{label}</label>
          { required && <Typography variant={'span'} as={'span'} color={'red'} className={'ml-2'}>必須</Typography> }
        </div>
        {children}
        { errorMessage && <Typography variant={'span'} as={'span'} color={'red'} className={'mt-2'}>{errorMessage}</Typography> }
      </div>
    )
  }
)

FormWrapper.displayName = 'FormWrapper'