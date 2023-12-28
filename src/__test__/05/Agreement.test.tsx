import { render, screen } from '@testing-library/react'
import { Agreement } from '@/__test__/05/Agreement'

test('fieldsetの要素を使っている', ()=>{
  //given
  render(<Agreement />)
  
  //then
  expect(screen.getByRole('group', { name: '利用規約の同意' })).toBeInTheDocument()
})

test('チェックボックスが入っていない', ()=>{
  //given
  render(<Agreement />)

  //then
  expect(screen.getByRole('checkbox')).not.toBeChecked()
})