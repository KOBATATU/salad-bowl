import axios from 'axios'
import Axios from 'axios'
import { loggerDebug, loggerError } from '@/infrastructure/logging'
import http from "http";
import https from "https";

export const pokemonAxios = axios.create({
  baseURL: 'https://pokeapi.co/api/',
  headers: {
    'content-type': 'application/json'
  },
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
})

const prefixRequest = '[Request] '
const prefixResponse = '[Response] '
pokemonAxios.interceptors.request.use( (config) => {
  loggerDebug({ path: config.url, message: prefixRequest })
  return config
},  (error) => {
  if(Axios.isAxiosError(error) && error.response) {
    loggerError({ status: error.response.status, message: prefixRequest + error.message, path: error.config?.url })
  } else {
    loggerError({ status: 500, message: prefixRequest + `予期せぬエラーが発生しました ${error}` })
  }
  return Promise.reject(error)
})

pokemonAxios.interceptors.response.use( (response) => {
  loggerDebug({ status: response.status, message: prefixResponse + response.statusText, path: response.config.url })
  return response
},  (error) => {
  if(Axios.isAxiosError(error) && error.response) {
    loggerError({ status: error.response.status, message: prefixResponse +  error.message, path: error.config?.url })
  } else {
    loggerError({ status: 500, message: prefixResponse + `予期せぬエラーが発生しました ${error}` })
  }
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

