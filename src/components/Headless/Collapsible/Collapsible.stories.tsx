import * as RadixCollapsible from '@radix-ui/react-collapsible'
import { Meta, StoryObj } from '@storybook/react'
import { useEffect, useRef, useState } from 'react'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/Headless/Collapsible/Collapsible'
import './styles.css'

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
      <>
        <Collapsible  {...args} open={open} onOpenChange={setOpen}  >
          <CollapsibleTrigger>ボタン</CollapsibleTrigger>
          <CollapsibleContent className='CollapsibleContent'>
            <div>content1</div>
            <div>content2</div>
          </CollapsibleContent>
        </Collapsible>

        <div>
          <RadixCollapsible.Collapsible>
            <RadixCollapsible.Trigger> ボタン</RadixCollapsible.Trigger>
            <RadixCollapsible.CollapsibleContent className='CollapsibleContent'>
              <div>content1</div>
              <div>content2</div>
            </RadixCollapsible.CollapsibleContent>
          </RadixCollapsible.Collapsible>
        </div>
      </>
    )
  }
}