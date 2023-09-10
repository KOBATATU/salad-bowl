import { QueryKey } from '@tanstack/query-core'
import { UseQueryOptions } from '@tanstack/react-query'
import { getQueryClient } from '@/service/lib/queryClient/queryClient'

/**
 * hydarateするときにprefetchをする
 * @param queryKey
 * @param fetcher
 * @param options
 */
export const prefetch = async <
  TQueryFnData,
  TError,
  TQueryKey extends QueryKey = QueryKey,
  TData = TQueryFnData
>(  queryKey: TQueryKey,
  fetcher: (params: TQueryKey[1]) => Promise<TQueryFnData>,
  options?: Omit<
    UseQueryOptions<unknown, TError, TData, TQueryKey>,
    'queryKey' | 'queryFn'
  >) => {

  const queryClient =  getQueryClient()

  await queryClient.prefetchQuery({
    queryKey,
    queryFn: async () => fetcher(queryKey[1]),
    staleTime: 60 * 1000,
    ...options,
  })
}