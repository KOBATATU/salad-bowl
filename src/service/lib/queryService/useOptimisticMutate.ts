import { QueryKey } from '@tanstack/query-core'
import { useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query'

export const useOptimisticMutate = <
  TData,
  TVariables,
  TQueryKey extends QueryKey = QueryKey,
  TContext = unknown,
>(
    queryKey: TQueryKey,
    fetcher: (params: TVariables) => Promise<TData | void>,
    updater?: ((oldData: TContext, newData: TVariables) => TContext) | undefined,
    options?: Omit<
    UseMutationOptions<TData | void, unknown, TVariables, TContext>,
    'onMutate' | 'onError' | 'onSettled'
  >
  )=>{
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (params: TVariables) => await fetcher(params),
    onMutate: async (newData: TVariables) => {
      await queryClient.cancelQueries(queryKey)

      // Snapshot the previous value
      const previousData = queryClient.getQueryData<TContext>(queryKey)

      // Optimistically update to the new value
      if (previousData && updater) {
        queryClient.setQueryData<TContext>(queryKey, () => {
          return updater(previousData, newData)
        })
      }

      return previousData
    },
    
    onError: (err, _, context) => {
      queryClient.setQueryData(queryKey, context)
    },
    
    onSettled: async () => {
      await queryClient.invalidateQueries(queryKey)
    },

    ...options,
  })
}