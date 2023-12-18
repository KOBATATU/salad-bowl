import { Meta, StoryObj } from '@storybook/react'
import { Accordion, AccordionContent, AccordionTrigger, AccordionItem } from '@/components/Headless/Accordion/Accordion'
import './styles.css'
const meta = {
  title: 'Headless/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>


export const _Accordion: Story = {
  render: ()=>{
    return (
      <div>
        multi
        <Accordion type={'multi'} defaultOpen={'1'}>
          {['0', '1'].map((value)=>{
            return (
              <>
                <AccordionItem value={value}>
                  <AccordionTrigger className='w-full border-b py-4 text-left font-semibold hover:bg-gray-100 hover:opacity-75' onClick={()=>console.log('hoge')}>
                    Q1: これはAccordionですか？
                  </AccordionTrigger>
                  <AccordionContent className='AccordionContent w-full'  >
                    <div>
                      ヘッダーのコンテキストをクリックすることで質問を回答を見ることができるので、Accordionです。
                      ヘッダーのコンテキストをクリックすることで質問を回答を見ることができるので、Accordionです。
                      ヘッダーのコンテキストをクリックすることで質問を回答を見ることができるので、Accordionです。
                      ヘッダーのコンテキストをクリックすることで質問を回答を見ることができるので、Accordionです。
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </>
            )
          })}

        </Accordion>
        single

        <Accordion type={'single'} defaultOpen={'1'}>
          {['0','1'].map(value => {
            return (
              <>
                <AccordionItem value={value} >
                  <AccordionTrigger className='w-full border-b py-4 text-left font-semibold hover:bg-gray-100 hover:opacity-75'>
                    Q1: これはAccordionですか？
                  </AccordionTrigger>
                  <AccordionContent className='AccordionContent'  >
                    <div>
                      ヘッダーのコンテキストをクリックすることで質問を回答を見ることができるので、Accordionです。

                    </div>
                  </AccordionContent>
                </AccordionItem>
              </>
            )
          })}
        </Accordion>
      </div>

    )
  }
}