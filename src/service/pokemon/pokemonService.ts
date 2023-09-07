import { clientPokemonAxios } from '@/service/lib/clientPokemonAxios'
import { useFetch } from '@/service/lib/queryService/useFetch'
import { prefetch } from '@/service/lib/queryService/usePrefetch'

const getPokemon = async (pokemonName: string) => {
  const data = await clientPokemonAxios.get(`v2/pokemon/${pokemonName}`)
  return data.data
}

export const pokemonService = {

  /**
   * ポケモン一匹を取得するprefetch
   * @param pokemonName
   */
  prefetchPokemonByName: async (pokemonName: string)=>{
    await prefetch(['pokemon', pokemonName], async () => await getPokemon(pokemonName))
  },

  /**
   * ポケモン一匹を名前から取得する
   * @param pokemonName
   */
  usePokemonByName: (pokemonName: string)=>{
    return useFetch(['pokemon', pokemonName], getPokemon, { enabled: pokemonName !== undefined })
    
  }
}