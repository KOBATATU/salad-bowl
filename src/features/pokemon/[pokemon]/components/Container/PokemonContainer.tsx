'use client'
import { Pokemon } from '@/features/pokemon/[pokemon]/components/Presentational/Pokemon'
import { pokemonService } from '@/domain/pokemon/pokemonService'

type PokemonContainerProps = { params: { pokemonName: string } }

export const PokemonContainer = ({ params }: PokemonContainerProps)=>{
  const { data, isLoading } = pokemonService.useGetPokemonByName(params.pokemonName)

  return (
    <>
      <Pokemon data={data} />
    </>
  )
}