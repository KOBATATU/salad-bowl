'use client'
import { pokemonService } from '@/domain/pokemon/pokemonService'
import { Pokemon } from '@/features/pokemon/[pokemon]/components/Presentational/Pokemon'

type PokemonContainerProps = { params: { pokemonName: string } }

export const PokemonContainer = ({ params }: PokemonContainerProps)=>{
  const { data, isLoading } = pokemonService.useGetPokemonByName(params.pokemonName)

  return (
    <>
      <Pokemon data={data} />
    </>
  )
}