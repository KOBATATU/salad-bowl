import { dehydrate, Hydrate } from '@tanstack/react-query'
import { RootContainer } from '@/features/pokemon/[pokemon]/components/RootContainer'
import { getQueryClient } from '@/service/lib/queryClient'
import { pokemonService } from '@/service/pokemon/pokemonService'

type PokemonProps = { params: { pokemonName: string } }

export default async function PokemonPage({ params }: PokemonProps) {

  const queryClient = getQueryClient()
  await pokemonService.prefetchPokemonByName(queryClient, params.pokemonName)
  const dehydratedState = dehydrate(queryClient)
  return (
    <Hydrate state={dehydratedState}>
      <RootContainer params={ { pokemonName: params.pokemonName }}/>
    </Hydrate>
  )
}