import { Meta, StoryObj } from '@storybook/react'
import { Slot } from '@/components/Headless/Slot/Slot'

const meta = {
  title: 'Headless/Slot',
  component: Slot,
  tags: ['autodocs'],
} satisfies Meta<typeof Slot>

export default meta
type Story = StoryObj<typeof meta>


export const Default: Story = {
  render: () => {
    return (
      <div>
        <Slot
          data-state='open'
        >
          <div className='text-xl'>
            <div>
              hoge
            </div>
          </div>

        </Slot>
      </div>
    )
  }
}