import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

type ClientType = {
  clientId: string;
  clientSecret: string;
}
const prisma = new PrismaClient()
export const authOption: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'database',
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET
    } as ClientType)
  ],
  pages: {
    signIn: '/auth/login',
    signOut: '/',
    error: '/'
  },
  callbacks: {
    async session({ session,  user }) {
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}