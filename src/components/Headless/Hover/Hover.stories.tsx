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
  const { isHovered, hoverProps } =
    useHover<HTMLDivElement>({ type: 'right' })

  return (
    <div className='relative p-1' >
      <ListItem
        prefixIcon={<MdDashboard className='text-white' />}
        className='relative gap-3 hover:bg-gray-100 dark:hover:bg-gray-700'
        ref={hoverProps.buttonRef}
        onMouseOut={hoverProps.onMouseOut}
        onMouseOver={hoverProps.onMouseOver}
      >
        <a href="#">
          <Typography variant='span' color='white'>Dashboard</Typography>
        </a>
      </ListItem>
      
      <div className='z-100 absolute w-full rounded-lg border bg-white'
        hidden={!isHovered}
        onMouseOver={hoverProps.onMouseOver}
        onMouseOut={hoverProps.onMouseOut}
        ref={hoverProps.hoverRef}
        style={hoverProps.hoverPosition}>
        {isHovered && (
          <List className='w-full '>
            <ListItem>通常のListItem</ListItem>
            <ListItem>通常のListItem</ListItem>
          </List>
        )}
      </div>
      
    </div>

  )
}

export const Hover:Story = {
  render: ()=>{
    return (
      <aside id="default-sidebar" className="fixed left-0 top-0 z-40 h-screen w-60 -translate-x-full transition-transform sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full bg-gray-50 py-4 dark:bg-gray-800">
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