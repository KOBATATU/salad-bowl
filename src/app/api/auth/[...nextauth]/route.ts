import NextAuth from 'next-auth'
import { authOption } from '@/infrastructure/nextAuthOptions'

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }
