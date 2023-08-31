import { Meta, StoryObj } from '@storybook/react'
import { Spinner } from '@/components/Elements'

const meta = {
  title: 'Elements/Spinner',
  component: Spinner,
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args)=> {
    return (
      <div className={'mx-auto flex h-1/2 w-1/2 items-center justify-center'}>
        <Spinner />
        <Spinner className={'h-12 w-12'} />
        <Spinner {...args} className={'h-24 w-24'} />
      </div>
    )
  }
}
