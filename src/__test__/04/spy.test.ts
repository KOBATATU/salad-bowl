import { greet } from '@/__test__/04/greet'

describe('spy test', ()=>{
  test('モック関数は引数として利用', ()=>{
    const mockFn = jest.fn()
    greet('Test', mockFn)
    
    expect(mockFn).toHaveBeenCalledWith('Hello Test')
  })
})

