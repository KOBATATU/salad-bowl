import { clientPokemonAxios } from '@/service/clientPokemonAxios'
import { useFetch } from '@/service/queryService/useFetch'
import { prefetch } from '@/service/queryService/usePrefetch'

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
  useGetPokemonByName: (pokemonName: string)=>{
    return useFetch(['pokemon', pokemonName], getPokemon, { enabled: pokemonName !== undefined })
  }
}