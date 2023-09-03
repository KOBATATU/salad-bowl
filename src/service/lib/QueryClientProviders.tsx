'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { cache, ReactNode, useState } from 'react'

export const QueryClientProviders = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}