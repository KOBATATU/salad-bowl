import { ResponseError } from '@/components/Layout/Error/ErrorFallback'
import { useFetch } from '@/hooks/tanstack/useFetch'
import { prefetch } from '@/hooks/tanstack/usePrefetch'
import {loggerInfo} from "@/infrastructure/logging";

const hogeFetch = async (pokemonName: string) => {

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  loggerInfo({  path: '',
    status: response.status,
    message: response.statusText })

  if (!response.ok) {
    throw new ResponseError(response.statusText, response.status)
  }

  return response
}

const getPokemon = async (pokemonName: string) => {
  const response = await hogeFetch(pokemonName)

  return response.json()

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