import './globals.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MyErrorBoundary } from '@/components/Layout/Error/ErrorBoundary'
import { QueryClientProviders } from '@/components/QueryClientProviders'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyErrorBoundary>
          <QueryClientProviders> 
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProviders>
        </MyErrorBoundary>
      </body>
    </html>
  )
}
