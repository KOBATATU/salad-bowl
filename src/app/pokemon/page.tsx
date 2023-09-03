
import { dehydrate, Hydrate } from '@tanstack/react-query'
import { Pokemon } from '@/features/pokemon/components/RootContainer'
import { getQueryClient } from '@/service/lib/queryClient'
import { pokemonService } from '@/service/pokemon/pokemonService'

export default async function Page() {
  const queryClient = getQueryClient()
  await pokemonService.prefetchPokemonByName(queryClient)
  const dehydratedState = dehydrate(queryClient)
  
  return (
    <Hydrate state={dehydratedState}>
      <Pokemon/>
    </Hydrate>
  )
}