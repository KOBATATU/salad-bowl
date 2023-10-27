import { QueryClient } from '@tanstack/react-query'
import { cache } from 'react'

// サーバ側で実行されるtanstack client.
// リクエストシングルトンとなりリクエストごとにクラスが作成される
// リクエストはQueryClientを介して行われprefetchするとQueryClientにデータが残る
// <Hydrate>コンポーネント以下のuseQueryでinisitalStateとしてデータが入る
// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#react-cache
export const getQueryClient = cache(() => new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    }
  } }))
