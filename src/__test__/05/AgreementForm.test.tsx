import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AgreementForm } from '@/__test__/05/AgreementForm'

const user = userEvent.setup()
test('サインアップボタンが非活性', ()=>{
  //given
  render(<AgreementForm/>)
  
  //then
  expect(screen.getByRole('button', { name: 'サインアップ' })).toBeDisabled()
})

test(('利用規約の同意チェックボックスを押下するとボタンは活性化'), async ()=>{
  //given
  render(<AgreementForm/>)
  
  //when
  await user.click(screen.getByRole('checkbox'))
  
  //then
  expect(screen.getByRole('button', { name: 'サインアップ' })).toBeEnabled()
})