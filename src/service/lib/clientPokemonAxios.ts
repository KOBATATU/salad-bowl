import axios from 'axios'

export const clientPokemonAxios = axios.create({
  baseURL: process.env.HOSTNAME ? process.env.HOSTNAME + '/api/pokemon/' : '/api/pokemon/',
  headers: {
    'content-type': 'application/json'
  }
})