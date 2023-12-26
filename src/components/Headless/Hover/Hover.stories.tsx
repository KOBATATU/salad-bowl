import { Meta, StoryObj } from '@storybook/react'
import { MdDashboard } from 'react-icons/md'
import { List, ListItem, Typography } from '@/components/Elements'
import { Primitive } from '@/components/Headless/Primitive/Primitive'
import { useHover } from '@/hooks/useHover'

const meta = {
  title :  'Headless/Hover',
  component: Primitive.div,
  tags: ['autodocs']
} satisfies Meta<typeof Primitive.div>

export default meta
type Story = StoryObj<typeof meta>

const Menu = () => {
  const { isHovered, hoverProps } = useHover()

  return (
    <div className='p-1' {...hoverProps}>
      <ListItem
        prefixIcon={<MdDashboard className='text-white' />}
        className='gap-3 hover:bg-gray-100 dark:hover:bg-gray-700'
      >
        <a href="#">
          <Typography variant='span' color='white'>Dashboard</Typography>
        </a>
      </ListItem>
      {isHovered && (
        <div className='absolute w-full'
          onMouseOver={hoverProps.onMouseOver}
          onMouseOut={hoverProps.onMouseOut}
          style={{
            top: hoverProps.popoverPosition.top,
            left:hoverProps.popoverPosition.width + hoverProps.popoverPosition.left
          }}>
          <List className='w-full rounded-lg border bg-white p-1'>
            <ListItem>通常のListItem</ListItem>
            <ListItem>通常のListItem</ListItem>
          </List>
        </div>
      )}
    </div>

  )
}

export const Hover:Story = {
  render: ()=>{
    return (
      <aside id="default-sidebar" className="fixed left-0 top-0 z-40 h-screen w-60 -translate-x-full transition-transform sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full overflow-y-auto bg-gray-50 py-4 dark:bg-gray-800">
          <List className="space-y-2 p-0 font-medium">
            <Menu />
            <Menu />
            <Menu />
          </List>
        </div>
      </aside>
    )
  }
}