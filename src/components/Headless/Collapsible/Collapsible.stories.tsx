import { Meta, StoryObj } from '@storybook/react'
import {useEffect, useRef, useState} from 'react'

import { Collapsible, CollapsibleTrigger } from '@/components/Headless/Collapsible/Collapsible'

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
    const ref = useRef<HTMLButtonElement>(null)

    useEffect(()=> { console.log(ref.current?.disabled)}, [ref])

    return (
      <Collapsible  {...args} open={open} onOpenChange={setOpen}  >
        {/*<CollapsibleTrigger ref={ref}>ボタン</CollapsibleTrigger>*/}
        <button ref={ref}>ボタン</button>
      </Collapsible>
    )
  }
}