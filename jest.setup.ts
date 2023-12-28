// testで共通に使うユーティリティ関数を定義
import '@testing-library/jest-dom'


jest.mock('react', () => {
  const originalReact = jest.requireActual('react')
  return {
    ...originalReact,
    cache: jest.fn(),
  }
})
