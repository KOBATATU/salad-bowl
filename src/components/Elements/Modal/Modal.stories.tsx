import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '@/components/Elements'
import { Modal } from '@/components/Elements/Modal/Modal'

const meta = {
  title: 'Elements/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isOpen: false,
    closeModal:  ()=> {}
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState<boolean>(args.isOpen)

    const closeModal = ()=>{
      setIsOpen(false)
    }

    const openModal = ()=>{
      setIsOpen(true)
    }

    return (
      <>
        <div className="fixed inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            Open dialog
          </button>
        </div>
        <Modal isOpen={isOpen} closeModal={closeModal} >
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              サンプルのモーダルです.
              <a href={'https://headlessui.com/react/dialog'}>headless uiを用いてmodalを作成しています</a>
            </p>

            <div>
              <Button onClick={closeModal} variant={'outlined'}>閉じる</Button>
            </div>
          </div>
        </Modal>
      </>
    )
  }
}

