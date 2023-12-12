import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Collapsible } from '@/components/Headless/Collapsible/Collapsible'

const meta = {
  title: 'Headless/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>


export const _Collapsible: Story = {
  args: {
    open: false,
    onOpenChange: () => {}
  },
  render: function Default(args){
    const [open, setOpen] = useState<boolean>(args.open)
    return (
      <Collapsible open={open} onOpenChange={setOpen} >
        <div>hoge</div>
      </Collapsible>
    )
  }
}