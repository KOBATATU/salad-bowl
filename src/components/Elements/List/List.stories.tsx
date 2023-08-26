import { Meta, StoryObj } from '@storybook/react'
import { MdWarningAmber } from 'react-icons/md'
import { Card, List, ListItem, Typography } from '@/components/Elements'

const meta = {
  title: 'Elements/List',
  component: List,
  tags: ['autodocs'],
} satisfies Meta<typeof List>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return (
      <Card>
        <List {...args}>
          <ListItem ripple={false}>HOGE</ListItem>
          <ListItem>HOGEHUGA</ListItem>
          <ListItem>HOGEHOGEHOGE</ListItem>
          <ListItem className={'justify-between'}>
            HOGE
            <MdWarningAmber className="inline-block h-6 w-6" />
          </ListItem>
        </List>
      </Card>
    )
  }
}