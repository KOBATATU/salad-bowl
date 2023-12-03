import { http, HttpResponse } from 'msw'
import { mockPokemonPickachu } from '@/domain/pokemon/__mock__/mockPokemon'

export const pokemonHandlers = [
  http.get( process.env.MY_HOSTNAME + '/api/proxy/pokemon/v2/pokemon/pickachu', ()=>{
    return HttpResponse.json(mockPokemonPickachu)
  })
]