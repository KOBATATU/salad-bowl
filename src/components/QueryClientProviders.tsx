'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'

export const QueryClientProviders = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        suspense: true,
        retry:false,
      } },
    logger: {
      log: () => {},
      warn: () => {},
      error: () => {},
    } } ))
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}