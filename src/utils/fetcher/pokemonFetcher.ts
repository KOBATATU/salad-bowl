import * as url from 'url'
import { ResponseError } from '@/components/Layout/Error/ErrorFallback'
import { loggerError, loggerInfo, Option } from '@/infrastructure/logging'

const pokemonURL = '/api/proxy/pokemon/'
// server side実行時はenvから. frontからではlocationを使ってhostnameを取得する
const pokemonDomain = process.env.MY_HOSTNAME !== undefined ? process.env.MY_HOSTNAME : location.hostname

export const pokemonGetFetcher = async <T = any,>(
  resource: string,
  init?: RequestInit
): Promise<T> => {
  // リクエスト開始時間を記録
  const startTime = performance.now()
  const path = url.resolve(pokemonURL, resource)
  const res = await fetch(url.resolve(pokemonDomain , path),
    { ...{
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },

    }, ...init }
  )

  // リクエスト終了時間を記録
  const endTime = performance.now()
  const logger:Option = { path: path, message:res.statusText, status: res.status, time: endTime - startTime }

  if (!res.ok) {
    loggerError(logger)
    throw new ResponseError(res.statusText, res.status)
  }

  loggerInfo(logger)

  return res.json()
}
