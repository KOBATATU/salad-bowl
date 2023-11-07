import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { LoginContainer } from '@/features/auth/login/components/Container/LoginContainer'

export const RootContainer = () =>{
  return (
    <>
      <LoginContainer />
    </>
  )
}