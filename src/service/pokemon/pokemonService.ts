import { QueryClient, useQuery } from '@tanstack/react-query'
import { clientPokemonAxios } from '@/service/lib/clientPokemonAxios'

const getPokemon = async () => {
  const data = await clientPokemonAxios.get('v2/pokemon/pikachu')
  return data.data
}

export const pokemonService = {

  /**
   *
   * @param queryClient
   */
  prefetchPokemonByName: async (queryClient: QueryClient)=>{
    await queryClient.prefetchQuery(['pokemon', 'pikachu'], getPokemon)
  },

  /**
   * 
   */
  usePokemonByName: ()=>{
    return useQuery(['pokemon', 'pikachu'], getPokemon) 
  }
}