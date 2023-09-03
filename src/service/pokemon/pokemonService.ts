import { QueryClient, useQuery } from '@tanstack/react-query'
import { clientPokemonAxios } from '@/service/lib/clientPokemonAxios'
import {loggerDebug} from "@/infrastructure/logging";

const getPokemon = async (pokemonName: string) => {
  const data = await clientPokemonAxios.get(`v2/pokemon/${pokemonName}`)
  return data.data
}

export const pokemonService = {

  /**
   *
   * @param queryClient
   */
  prefetchPokemonByName: async (queryClient: QueryClient, pokemonName: string)=>{
    await queryClient.prefetchQuery(['pokemon', pokemonName], () => getPokemon(pokemonName))
  },

  /**
   * 
   */
  usePokemonByName: (pokemonName: string)=>{
    return useQuery(
      ['pokemon', pokemonName], 
      ()=>getPokemon(pokemonName),
      {
        enabled: pokemonName !== undefined
      })
  }
}