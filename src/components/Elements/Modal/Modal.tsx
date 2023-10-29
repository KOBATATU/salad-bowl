import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { tailwindMerge } from '@/utils/tailwindMerge'
import { modalDefault, ModalProps, sizes} from "@/components/Elements/Modal/style/theme";
import {objectsToString} from "@/utils/objectsToString";

export const Modal = ({ isOpen, closeModal, size, children, modalClassName }: ModalProps)=>{

  // 1: set props
  const modalSizeProp = size ?? modalDefault.size

  // 2: set style
  const base = objectsToString(modalDefault.base)
  const mosalSize = objectsToString(sizes[modalSizeProp])
  const classNames = tailwindMerge(base, mosalSize, modalClassName)

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        {/* 左端固定でinset-0で画面全部をサイズにもち、flex関連で中央に持ってくる */}
        <div className="fixed inset-0 flex items-center justify-center overflow-y-auto">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className={classNames}>
              {children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}