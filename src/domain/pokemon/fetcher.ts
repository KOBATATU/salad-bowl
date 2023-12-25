import { pokemonGetFetcher } from '@/utils/fetcher/pokemonFetcher'

export const getPokemon = async (pokemonName: string) => {
  return await pokemonGetFetcher(`v2/pokemon/${pokemonName}`)

}