'use client'

import { SessionProvider } from 'next-auth/react'
import { RootContainer } from '@/features/auth/login/components/Container/RootContainer'

export default function LoginPage() {

  return (
    <SessionProvider>
      <RootContainer />
    </SessionProvider>
  )
}