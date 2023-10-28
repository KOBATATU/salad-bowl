export { default } from 'next-auth/middleware'

// https://nextjs.org/learn/dashboard-app/adding-authentication
// role権限で制御をかけるときはwithAuthを使って認可する. https://zenn.dev/tfutada/articles/5557b780050574

// pokemonのパスを認証必須に
export const config = {
  matcher: [
    '/pokemon/:path*'
  ],
}