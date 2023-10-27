import { useQuery } from '@tanstack/react-query'
import type { UseQueryOptions } from '@tanstack/react-query'

/**
 * simple useQuery fetch
 * @see https://zenn.dev/anton072/scraps/74e6c1ff25d5ee
 * @param queryKey useQuery's key
 * @param queryFn callback func
 * @param options useQuery's options
 */
export const useFetch = <
  TQueryFnData,
  TError,
  TQueryKey extends [string, (Record<string, unknown> | string)?],
  TData = TQueryFnData
>(
    queryKey: TQueryKey,
    queryFn: (params: TQueryKey[1]) => Promise<TQueryFnData>,
    options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'queryKey' | 'queryFn'
  >
  )=>{
  return useQuery(
    queryKey, 
    async () => queryFn(queryKey[1]), 
    {
      ...options
    })
}