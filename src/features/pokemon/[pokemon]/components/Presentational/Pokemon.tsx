import { Primitive } from '@radix-ui/react-primitive'
import { useEffect, useRef } from 'react'

type PokemonProps = { data: any }
export const Pokemon = ({ data }: PokemonProps) => {
  const ref = useRef<HTMLButtonElement>(null)

  
  return (
    <div>
      { data && <div>{data.id}  </div> }
      
      <Primitive.button ref={ref} asChild aria-expanded={true}>
        <div><a>hoge</a></div>
      </Primitive.button>


      <div className={'flex justify-between'}>
        <div>HEADER</div>
        <PopoverExample/>
      </div>

      

    </div>
  )
}

import React, { useState } from 'react'
import './popover.css' // スタイルは必要に応じて調整してください

const PopoverExample: React.FC = () => {
  const [isPopoverVisible, setPopoverVisible] = useState(false)
  const [popoverPosition, setPopoverPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 })

  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { top, left, height, width } = event.currentTarget.getBoundingClientRect()
    setPopoverPosition({ top: top + height, left: left })
    setPopoverVisible(true)
  }

  const handleMouseLeave = () => {
    setPopoverVisible(false)
  }

  const handlePopoverMouseEnter = () => {
    // ポップオーバーにホバーしている間は閉じないようにする
    setPopoverVisible(true)
  }

  const handlePopoverMouseLeave = () => {
    setPopoverVisible(false)
  }

  return (
    <div >
      <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Open Popover
      </button>
      {isPopoverVisible && (
        <div
          className="popover"
          style={{ top: popoverPosition.top, left: popoverPosition.left }}
          onMouseEnter={handlePopoverMouseEnter}
          onMouseLeave={handlePopoverMouseLeave}
        >
          <p>Popover Content</p>
        </div>
      )}
    </div>
  )
}