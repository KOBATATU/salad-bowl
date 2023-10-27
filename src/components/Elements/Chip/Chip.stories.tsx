import { Meta, StoryObj } from '@storybook/react'
import Link from 'next/link'
import { Chip } from '@/components/Elements/Chip/Chip'

const meta = {
  title: 'Elements/Chip',
  component: Chip,
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    return <Chip {...args}>HOGE</Chip>
  }
}

export const ChipLink: Story = {
  render: (args) => {
    return (
      <Link href={'/hoge'}>
        <Chip>HOGE</Chip>
      </Link>
    )
  }
}