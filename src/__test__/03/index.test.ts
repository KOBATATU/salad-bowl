import { add, timeout, wait } from '@/__test__/03/index'

describe('足し算のテスト', ()=>{
  test('1+1', () =>{
    expect(add(1,1)).toBe(2)
  })

  test('100以上の入力値の時エラーがthrowされる', ()=>{
    expect(()=> add(100 , 101)).toThrow('入力値は0~100の間にしてください')
  })
})

describe('値の検証', () => {
  test('toBeTruthy or toBeFalsy', ()=>{
    expect(1).toBeTruthy()
    expect(true).toBeTruthy()

    expect(0).toBeFalsy()
    expect(null).toBeFalsy()
    expect(false).toBeFalsy()
  })

  test('文字列の検証' , ()=>{
    const str = 'Hello'
    expect(str).toBe('Hello')
    expect(str).toEqual('Hello')
    expect(str).toContain('He')
    expect(str).toMatch(/He/)
  })

  test('配列の検証', ()=>{
    const tags = ['Next','React', 'Vue']
    expect(tags).toContain('Next')
    expect(tags).toHaveLength(3)
  })

  test('オブジェクトの検証', ()=>{
    expect([2]).toEqual([2, undefined])
    expect([2]).not.toStrictEqual([2, undefined])

    expect([, 2]).toEqual([undefined, 2])
    expect([, 2]).not.toStrictEqual([undefined, 2])
  })

  test('非同期処理のテスト', async ()=> {
    // wait実行が終わればresolveの値がthenの引数としてreturn
    expect(await wait(50)).toBe(50)
    await expect(wait(50)).resolves.toBe(50)

    // アサーションが実行されることを確認
    // expect.assertions(1)
    await expect(timeout(50)).rejects.toBe(50)
  })
})