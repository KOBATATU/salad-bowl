// testで共通に使うユーティリティ関数を定義
import '@testing-library/jest-dom'
import { setupServer, SetupServerApi } from 'msw/node'
import React from 'react'
import { pokemonHandlers } from '@/domain/pokemon/__mock__/handlers'
export * from 'msw'

// mock server構築
const server = setupServer(...pokemonHandlers)
beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})

global.React = React