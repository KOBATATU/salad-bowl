import { greetByTime } from '@/__test__/04/greet'

describe('timerのテスト', ()=>{
  beforeEach(()=>{
    jest.useFakeTimers()
  })
  afterEach(()=>{
    jest.useRealTimers()
  })
  
  test('Systemのtimeをsetする 午前', ()=>{
    jest.setSystemTime(new Date(2022, 7, 20, 8, 0, 0))
    expect(greetByTime()).toBe('おはよう')
  })

  test('Systemのtimeをsetする 午後', ()=>{
    jest.setSystemTime(new Date(2022, 7, 20, 14, 0, 0))
    expect(greetByTime()).toBe('こんにちは')
  })
})