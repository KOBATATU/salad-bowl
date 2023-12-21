import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InputAccount } from '@/__test__/05/InputAccount'

const user = userEvent.setup()

test('メールアドレスの入力', async () => {
  //given
  render(<InputAccount />)
  const textbox = screen.getByRole('textbox', { name: 'メールアドレス' })
  const value = 'taro@example.com'

  //when
  await user.type(textbox, value)

  //then
  expect(screen.getByDisplayValue(value)).toBeInTheDocument()
})

test('パスワード入力欄', async ()=> {
  //given
  render(<InputAccount />)
  const password = screen.getByPlaceholderText('8文字以上で入力')
  const value = 'abcd1234'

  //when
  await user.type(password, value)

  //then
  expect(screen.getByDisplayValue(value)).toBeInTheDocument()
})