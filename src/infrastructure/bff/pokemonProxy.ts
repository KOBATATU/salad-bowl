import axios from 'axios'

export const pokemonAxios = axios.create({
  baseURL: 'https://pokeapi.co/api/',
  headers: {
    'content-type': 'application/json'
  }
})

pokemonAxios.interceptors.request.use( (config) => {
  // TODO: ログを仕込む
  return config
},  (error) => {
  // TODO: ログを仕込む
  return Promise.reject(error)
})


pokemonAxios.interceptors.response.use( (response) => {
  // TODO: ログを仕込む
  console.log('hoge')
  return response
},  (error) => {
  // TODO: ログを仕込む
  // console.log(error)
  return Promise.reject(error)
})

export const extractPokemonPath = (url: string): string => {
  const regex = /\/api\/pokemon\/(.*)$/
  const match = url.match(regex)

  if (match) {
    return match[1]
  } else {
    throw new Error('pokemon api に合致するapiではありません')
  }
}

