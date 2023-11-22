'use client'

import { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '@/components/Layout/Error/ErrorFallback'

type MyErrorBoundaryProps = {
  children: ReactNode
}
export const MyErrorBoundary = ({ children }: MyErrorBoundaryProps) => {
  
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} >
      { children }
    </ErrorBoundary>
  )
}
