'use client'

import { pokemonService } from '@/service/pokemon/pokemonService'

export const Pokemon = ()=>{
  const { data, isLoading } = pokemonService.usePokemonByName()

  return (
    <>
      { data && <div>{data?.base_experience}</div> }
    </>
  )
}