import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader } from '@/components/Elements/Accordion/'

const meta = {
  title: 'Elements/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

// @ts-ignore
export const Default: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(1)

    const handleOpen = (value: number) => setOpen(open === value ? 0 : value)

    return (
      <div>
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            Q1: これはAccordionですか？
          </AccordionHeader>
          <AccordionBody>
            ヘッダーのコンテキストをクリックすることで質問を回答を見ることができるので、Accordionです。
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            Q2: アニメーションどのように設定しましたか？
          </AccordionHeader>
          <AccordionBody>
            <a href={'https://www.framer.com/motion/lazy-motion/'} className={'border-b border-blue-500 text-blue-500'}>このサイト</a>
            の内容のframer-motionというライブラリを使って実装しました。
          </AccordionBody>
        </Accordion>
      </div>
    )
  }
}