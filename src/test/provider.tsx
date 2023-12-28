import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { MyErrorBoundary } from '@/components/Layout/Error/ErrorBoundary'

export const TestQueryClientProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient()
  return (
    <MyErrorBoundary>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </MyErrorBoundary>
  )
}