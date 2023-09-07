import axios from 'axios'
import * as http from "http";
import * as https from "https";


export const clientPokemonAxios = axios.create({
  // サーバで使われる際はデフォルトで80番ポートになってしまうのでHOSTNAMEを環境変数で使う
  baseURL: process.env.HOSTNAME ? process.env.HOSTNAME + '/api/pokemon/' : '/api/pokemon/',
  headers: {
    'content-type': 'application/json'
  },
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
})