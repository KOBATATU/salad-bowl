import Axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'
import { extractPokemonPath, pokemonAxios } from '@/infrastructure/bff/backendPokemonAxios'

export const GET = async (req: NextRequest) => {
  // 1: extract Pokémon path
  const pokemonPath =  extractPokemonPath(req.url ?? '')

  // 2: Pokémon api fetch
  try {
    const data = await pokemonAxios(pokemonPath, {
      data: req.body
    })

    return NextResponse.json(data.data)
  } catch (e) {
    if (Axios.isAxiosError(e) && e.response){
      return new Response(JSON.stringify({ error: e.response.data }), {
        status: e.response.status
      })
    }
    return new Response('予期しないエラーが起きました', {
      status: 500,
    })
  }
}