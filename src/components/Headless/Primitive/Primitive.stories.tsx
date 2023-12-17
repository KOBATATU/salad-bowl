import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Primitive } from '@/components/Headless/Primitive/Primitive'
import { Slot } from '@/components/Headless/Slot/Slot'

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
        <Slot>
          <div>
            <div><div>aaa</div><div>oo</div></div>
          </div>
          <span>hoge</span>
        </Slot>
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
