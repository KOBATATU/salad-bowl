import { Meta, StoryObj ,} from '@storybook/react'
import { MdWarningAmber } from 'react-icons/md'
import { Card, List, ListItem } from '@/components/Elements'

const meta = {
  title: 'Elements/List',
  component: List,
  tags: ['autodocs'],
} satisfies Meta<typeof List>

export default meta
type Story = StoryObj<typeof meta>

export const list: Story = {
  render: (args) => {
    return (
      <Card>
        <List {...args}>
          <ListItem>通常のListItem</ListItem>
          <ListItem ripple={true}>ListItemのRippleがtrue</ListItem>
          <ListItem disabled={true}>LiteItemのDisabledがtrue</ListItem>
          <ListItem prefixIcon={<MdWarningAmber className="h-6 w-6" />}>
            前にicon
          </ListItem>
          <ListItem className='justify-between' suffixIcon={<MdWarningAmber className=" h-6 w-6" />}>
            後ろにicon
          </ListItem>
        </List>
      </Card>
    )
  }
}