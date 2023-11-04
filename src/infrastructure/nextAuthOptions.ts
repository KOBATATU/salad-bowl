import { TypeORMAdapter } from '@auth/typeorm-adapter'
import { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { ConnectionOptions } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

type ClientType = {
  clientId: string;
  clientSecret: string;
}

const connection: ConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  namingStrategy: new SnakeNamingStrategy()
}

export const authOption: NextAuthOptions = {
  adapter: TypeORMAdapter(connection),
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
    signOut: '/'
  },
  secret: process.env.NEXTAUTH_SECRET,
}