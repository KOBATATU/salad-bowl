import { zodResolver } from '@hookform/resolvers/zod'
import * as React from 'react'
import { useForm, UseFormReturn, SubmitHandler, UseFormProps } from 'react-hook-form'
import { ZodType, ZodTypeDef } from 'zod'
import { tailwindMerge } from '@/utils/tailwindMerge'

// 参考：https://github.com/alan2207/bulletproof-react/blob/master/src/components/Form/Form.tsx
type FormProps<TFormValues extends Record<string, unknown>, Schema> = {
  className?: string
  onSubmit: SubmitHandler<TFormValues>
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode
  options?: UseFormProps<TFormValues>
  id?: string
  schema?: Schema
}

export const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>
>({
    onSubmit,
    children,
    className,
    options,
    id,
    schema,
  }: FormProps<TFormValues, Schema>) => {
  const methods = useForm<TFormValues>({ ...options, resolver: schema && zodResolver(schema) })
  return (
    <form
      className={tailwindMerge('space-y-6', className)}
      onSubmit={methods.handleSubmit(onSubmit)}
      id={id}
    >
      {children(methods)}
    </form>
  )
}