import { dehydrate, Hydrate } from '@tanstack/react-query'
import { RootContainer } from '@/features/pokemon/[pokemon]/components/RootContainer'
import { getQueryClient } from '@/infrastructure/queryClient'
import { pokemonService } from '@/service/pokemon/pokemonService'

type PokemonProps = { params: { pokemonName: string } }

export default async function PokemonPage({ params }: PokemonProps) {

  await pokemonService.prefetchPokemonByName(params.pokemonName)
  const dehydratedState = dehydrate(getQueryClient())
  return (
    <Hydrate state={dehydratedState}>
      <RootContainer params={ { pokemonName: params.pokemonName }}/>
    </Hydrate>
  )
}