'use client'

import { pokemonService } from '@/service/pokemon/pokemonService'

type RootContainerProps = { params: { pokemonName: string } }
export const RootContainer = ({ params }: RootContainerProps)=>{
  const { data, isLoading } = pokemonService.usePokemonByName(params.pokemonName)

  return (
    <>
      { data && <div>{data.id}</div> }
    </>
  )
}