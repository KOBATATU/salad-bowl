import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Popover, PopoverTrigger, PopoverContent } from './Popover'

const user = userEvent.setup()

const setup = () =>{
  render(
    <Popover>
      <PopoverTrigger>Click me!</PopoverTrigger>
      <PopoverContent>Hello, World!</PopoverContent>
    </Popover>
  )
}

const setupMulti = () => {
  render(
    <>
      <Popover>
        <PopoverTrigger>Click me 1!</PopoverTrigger>
        <PopoverContent>Popover Content 1</PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger>Click me 2!</PopoverTrigger>
        <PopoverContent>Popover Content 2</PopoverContent>
      </Popover>
    </>
  )
  const firstPopoverClick = async () =>{
    await user.click(screen.getByText('Click me 1!'))
  }
  const secondPopoverClick = async () => {
    await user.click(screen.getByText('Click me 2!'))
  }
  
  return { firstPopoverClick, secondPopoverClick }
}

describe('Popover Components Test', () => {
  test('renders Popover, PopoverTrigger, and PopoverContent', async () => {

    //given
    setup()

    // PopoverTriggerが表示されていることを確認
    expect(screen.getByText('Click me!')).toBeInTheDocument()
    // PopoverContentが初めは表示されていないことを確認
    expect(screen.queryByText('Hello, World!')).not.toBeInTheDocument()

    //then PopoverTriggerをクリックして、PopoverContentが表示されることを確認
    await user.click(screen.getByText('Click me!'))

    //when
    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
  })

  test('multi Popover', async ()=>{
    //given
    const { firstPopoverClick, secondPopoverClick } = setupMulti()

    expect(screen.queryByText('Popover Content 1')).not.toBeInTheDocument()
    expect(screen.queryByText('Popover Content 2')).not.toBeInTheDocument()
    
    //then
    await firstPopoverClick()
    expect(screen.getByText('Popover Content 1')).toBeInTheDocument()
    expect(screen.queryByText('Popover Content 2')).not.toBeInTheDocument()

    //then
    await secondPopoverClick()
    expect(screen.queryByText('Popover Content 1')).not.toBeInTheDocument()
    expect(screen.getByText('Popover Content 2')).toBeInTheDocument()
  })
})