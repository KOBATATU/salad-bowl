// testで共通に使うユーティリティ関数を定義
import '@testing-library/jest-dom'
import { setupServer } from 'msw/node'
import { pokemonHandlers } from '@/domain/pokemon/__mock__/handlers'

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

jest.mock('react', () => {
  const originalReact = jest.requireActual('react')
  return {
    ...originalReact,
    cache: jest.fn(),
  }
})
