import { QueryClient, useQuery } from '@tanstack/react-query'
import { clientPokemonAxios } from '@/service/lib/clientPokemonAxios'
import { useFetch } from '@/service/lib/queryService/useFetch'

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
   * ポケモン一匹を名前から取得する
   * @param pokemonName
   */
  usePokemonByName: (pokemonName: string)=>{
    return useFetch(['pokemon', pokemonName], getPokemon, { enabled: pokemonName !== undefined })
    
  }
}