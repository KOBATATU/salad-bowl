import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

type ClientType = {
  clientId: string;
  clientSecret: string;
}

const authOption: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET
    } as ClientType)
  ],
  pages: {
    signIn: 'auth/login'
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }
