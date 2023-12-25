import { useFetch } from '@/hooks/tanstack/useFetch'
import { prefetch } from '@/hooks/tanstack/usePrefetch'
import { pokemonGetFetcher } from '@/utils/fetcher/pokemonFetcher'


export const getPokemon = async (pokemonName: string) => {
  return await pokemonGetFetcher(`v2/pokemon/${pokemonName}`)

}

export const pokemonService = {

  /**
   * ポケモン一匹を取得するprefetch
   * @param pokemonName
   */
  prefetchPokemonByName: async (pokemonName: string)=>{
    return await prefetch(['pokemon', pokemonName], async () => await getPokemon(pokemonName))
  },

  /**
   * ポケモン一匹を名前から取得する
   * @param pokemonName
   */
  useGetPokemonByName: (pokemonName: string)=>{
    return useFetch(['pokemon', pokemonName], getPokemon, { enabled: pokemonName !== undefined })
  }
}