'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'
import { getQueryClient } from '@/infrastructure/queryClient'

export const QueryClientProviders = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        suspense: true
      }
    } }))
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}