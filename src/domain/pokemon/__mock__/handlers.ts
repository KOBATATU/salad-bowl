import { http, HttpResponse } from 'msw'
import { mockPokemonPickachu } from '@/domain/pokemon/__mock__/mockPokemon'

export const pokemonHandlers = [
  http.get('https://pokeapi.co/api/v2/pokemon/pickachu', ()=>{
    return HttpResponse.json(mockPokemonPickachu)
  })
]