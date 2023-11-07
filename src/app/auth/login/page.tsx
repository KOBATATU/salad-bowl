import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { RootContainer } from '@/features/auth/login/components/Container/RootContainer'
import { authOption } from '@/infrastructure/nextAuthOptions'

export default async function LoginPage() {

  const user = await getServerSession(authOption)

  if (user) {
    redirect('/')
  }

  return (
    <RootContainer />
  )
}