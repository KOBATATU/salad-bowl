import { dehydrate, Hydrate } from '@tanstack/react-query'
import { SuspenseLoading } from '@/components/Elements/Suspense/Suspense'
import { PokemonContainer } from '@/features/pokemon/[pokemon]/components/Container/PokemonContainer'
import { getQueryClient } from '@/infrastructure/queryClient'
import { pokemonService } from '@/hooks/pokemon/pokemonService'

type RootContainerProps = { params: { pokemonName: string } }
export const RootContainer = async ({ params }: RootContainerProps)=>{
  await pokemonService.prefetchPokemonByName(params.pokemonName)
  const dehydratedState = dehydrate(getQueryClient())
  return (
    <>
      <Hydrate state={dehydratedState}>
        <SuspenseLoading>
          <PokemonContainer params={params} />
        </SuspenseLoading>
      </Hydrate>
    </>
  )
}