import * as Fetchers from './fetcher'
import { getMyProfile } from './fetcher'
import { greet, sayGoodBye, getGreet } from '@/__test__/04/index'

jest.mock('./', ()=>({
  ...jest.requireActual('./'),
  sayGoodBye: (name: string) => `Good bye ${name}`
}))
jest.mock('./fetcher')


describe('mockのテスト', ()=> {
  test('greetのテスト', ()=>{
    expect(greet('hoge')).toBe('Hello hoge')
  })

  test('sayGoodBye', ()=>{
    expect(sayGoodBye('hoge')).toBe('Good bye hoge')
  })
})

describe('APIのテスト', ()=>{
  const httpError = {
    err: {
      message: 'error'
    }
  }
  test('getMyProfileをmockしてnameが存在しない', async ()=>{
    const mock = jest.spyOn(Fetchers, 'getMyProfile').mockResolvedValueOnce({
      id: 'hoge',
      email: 'hoge.test.com',
      age: 10
    })

    await expect(getGreet()).resolves.toBe('Hello user')
    expect(mock).toHaveBeenCalledTimes(1)

    mock.mockRestore()
  })

  test('getMyProfileをmockしてnameが存在する', async ()=>{
    const mock = jest.spyOn(Fetchers, 'getMyProfile').mockResolvedValueOnce({
      id: 'hoge',
      email: 'hoge.test.com',
      age: 10,
      name: 'test'
    })
    await expect(getGreet()).resolves.toBe('Hello test')

    expect(mock).toHaveBeenCalledTimes(1)
    mock.mockRestore()
  })

  test('getMyProfileでデータ取得が失敗', async ()=>{
    expect.assertions(1)
    jest.spyOn(Fetchers, 'getMyProfile').mockRejectedValueOnce(httpError)

    await expect(getGreet()).rejects.toStrictEqual({
      err: {
        message: 'error'
      }
    })

  })
})