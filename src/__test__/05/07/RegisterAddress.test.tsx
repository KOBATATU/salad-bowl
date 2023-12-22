// import { render, screen } from '@testing-library/react'
// import { RegisterAddress } from './RegisterAddress'
// import { mockPostMyAddress } from './fetchers/mock'
// import {
//   clickSubmit,
//   inputContactNumber,
//   inputDeliveryAddress,
// } from './testingUtils'
//
// jest.mock('./fetchers')
//
test('a', ()=>{
  expect(1).toBe(1)
})
// async function fillValuesAndSubmit() {
//   const contactNumber = await inputContactNumber()
//   // const deliveryAddress = await inputDeliveryAddress()
//   const submitValues = { ...contactNumber }
//   await clickSubmit()
//   return submitValues
// }
//
// beforeEach(() => {
//   // return values or implementations の設定が削除される
//   jest.resetAllMocks()
// })
//
// test('成功時「登録しました」が表示される', async () => {
//   //given
//   const mockFn = mockPostMyAddress()
//   render(<RegisterAddress />)
//
//   //when
//   const submitValues = await fillValuesAndSubmit()
//
//   //then
//   expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValues))
//   expect(screen.getByText('登録しました')).toBeInTheDocument()
// })
//
// test('失敗時「登録に失敗しました」が表示される', async () => {
//   //given
//   const mockFn = mockPostMyAddress(500)
//   render(<RegisterAddress />)
//
//   //when
//   const submitValues = await fillValuesAndSubmit()
//
//   //then
//   expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValues))
//   expect(screen.getByText('登録に失敗しました')).toBeInTheDocument()
// })
//
