import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TestForm } from '@/__test__/05/Form'

describe('Formのテスト', () => {
  test('render', async ()=>{
    render(<TestForm name='hoge' />)
    expect(await screen.findByText('hoge')).toBeInTheDocument()
  })

  test('ボタンクリック', async ()=> {
    // given
    const user = userEvent.setup()
    const onSubmit = jest.fn()
    render(<TestForm name='hoge'  onSubmit={onSubmit}/>)

    // when
    await user.click(screen.getByRole('button'))

    // then
    expect(onSubmit).toHaveBeenCalledTimes(1)
  })


})