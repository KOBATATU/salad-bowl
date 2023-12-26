import { Meta, StoryObj } from '@storybook/react'
import { Button, List, ListItem } from '@/components/Elements'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Headless/Popover/Popover'
import { usePopover } from '@/hooks/usePopover'

const meta = {
  title :  'Headless/Popover',
  component: Popover,
  tags: ['autodocs']
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const _Popover: Story = {
  render: ()=> {
    return (
      <div>
        <header >
          <nav className=" border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
              <a href="https://flowbite.com" className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
              </a>
              <div className=" flex items-center lg:order-2">
                <Popover>
                  <PopoverTrigger asChild><Button variant='text' color='white'>Login</Button></PopoverTrigger>
                  <PopoverContent className='rounded-lg border bg-white ' asChild >
                    <List>
                      <ListItem>通常のListItem</ListItem>
                      <ListItem>通常のListItem</ListItem>
                    </List>
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild><Button variant='text' color='white'>HOME</Button></PopoverTrigger>
                  <PopoverContent className='rounded-lg border bg-white ' asChild >
                    <List>
                      <ListItem>通常のListItem</ListItem>
                      <ListItem>通常のListItem</ListItem>
                    </List>
                  </PopoverContent>
                </Popover>
                <a href="#" className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mr-2 rounded-lg px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4 lg:px-5 lg:py-2.5">Get started</a>

              </div>
            </div>
          </nav>
        </header>
        <Popover>

        </Popover>
      </div>
    )
  }
}

const PopoverHook = () => {
  const { isVisible,
    buttonRef,
    popoverRef,
    handleButtonClick, popoverPosition
  } = usePopover<HTMLButtonElement>()

  const popoverStyle = isVisible
    ? {
      left: popoverPosition.left,
      top: popoverPosition.top
    }
    : {}

  return (
    <>
      <Button variant='text' color='white' ref={buttonRef} onClick={handleButtonClick}>Login</Button>
      {isVisible &&
        <div hidden={!isVisible} ref={popoverRef} style={popoverStyle} className='absolute rounded-lg border bg-white'>
          <List>
            <ListItem>通常のListItem</ListItem>
            <ListItem>通常のListItem</ListItem>
          </List>
        </div>
      }
    </>
  )


}

export const _PopoverHook: Story = {
  render: () => {
    return (
      <div>
        <header >
          <nav className=" border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
              <a href="https://flowbite.com" className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
              </a>
              <div className=" flex items-center lg:order-2">
                <PopoverHook/>
                <PopoverHook/>
                <a href="#" className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mr-2 rounded-lg px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4 lg:px-5 lg:py-2.5">Get started</a>
              </div>
            </div>
          </nav>
        </header>

      </div>
    )

  }
}