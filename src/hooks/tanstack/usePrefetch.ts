import { UseQueryOptions } from '@tanstack/react-query'
import { getQueryClient } from '@/infrastructure/queryClient'

/**
 * hydarateするときにprefetchをする
 * @param queryKey
 * @param fetcher
 * @param options
 */
export const prefetch = async <
  TQueryFnData,
  TError,
  TQueryKey extends [string, (Record<string, unknown> | string)?],
  TData = TQueryFnData
>(  queryKey: TQueryKey,
  fetcher: (params: TQueryKey[1]) => Promise<TQueryFnData>,
  options?: Omit<
    UseQueryOptions<unknown, TError, TData, TQueryKey>,
    'queryKey' | 'queryFn'
  >) => {

  return await getQueryClient().fetchQuery({
    queryKey,
    queryFn: async () => fetcher(queryKey[1]),
    ...options,
  })
}