import { Meta, StoryObj } from '@storybook/react'
import { Primitive } from '@/components/Headless/Primitive/Primitive'

const meta = {
  title: 'Headless/Primitive',
  component: Primitive.div,
  tags: ['autodocs'],
} satisfies Meta<typeof Primitive.div>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return (
      <div>
        <div className='flex flex-col'>
          <span>Primitive div</span>
          <Primitive.div>
            div
          </Primitive.div>
        </div>
      </div>
    )
  }
}
