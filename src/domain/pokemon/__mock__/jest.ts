import * as Fetcher from '../fetcher'
import { mockPokemonPickachu } from '@/domain/pokemon/__mock__/mockPokemon'

jest.mock('../fetcher', ()=>({
  getPokemon: jest.fn()
})
)

export function mockGetPokemon() {
  return jest.spyOn(Fetcher, 'getPokemon').mockResolvedValue(mockPokemonPickachu)
}