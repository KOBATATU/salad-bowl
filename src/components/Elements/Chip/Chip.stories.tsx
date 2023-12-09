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

export const Default: Story = {
  render: (args) => {
    return <Chip {...args}>タグ</Chip>
  }
}

export const Chips: Story = {
  render: (args) => {
    return (
      <div>
        <span>variants colors</span>
        <div className='flex'>
          <Chip variant='contained' color='blue' className='mr-2'>チップ</Chip>
          <Chip variant='outlined' color='blue'>チップ</Chip>
        </div>

        <span>リンク</span>
        <div className='flex'>
          <Link href={'/hoge'}>
            <Chip>タグ</Chip>
          </Link>
        </div>
      </div>
    )
  }
}