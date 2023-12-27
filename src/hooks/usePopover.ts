import React from 'react'
import { getMarginPaddingInfo } from '@/hooks/useHover'

type position = {
  left?: number
  right?: number
  top?: number
  bottom?: number
}
type PopoverProps = {
  type: keyof position
}

export const usePopover = <T extends HTMLElement>(props: PopoverProps)=>{
  const { type = 'bottom' } = props
  const [isVisible, setIsVisible] = React.useState(false)
  const buttonRef = React.useRef<T>(null)
  const popoverRef = React.useRef<HTMLDivElement>(null)
  const [popoverPosition, setPopoverPosition] = React.useState<position>()

  const handleButtonClick = () => {
    setIsVisible(!isVisible)
  }

  React.useLayoutEffect(()=>{
    const buttonNode = buttonRef.current
    const popoverNode = popoverRef.current

    if (isVisible && buttonNode && popoverNode) {
      const marginPadding = getMarginPaddingInfo(buttonNode)
      const { width, height } = popoverNode.getBoundingClientRect()

      //相対値を計算
      if (buttonRef.current.offsetParent) {
        if(type === 'bottom') {
          setPopoverPosition({
            left: buttonNode.offsetLeft + buttonNode.offsetWidth -  width,
            top: buttonNode.offsetHeight + marginPadding.paddingTop + marginPadding.paddingBottom
          })
        } else if (type === 'top') {
          setPopoverPosition({
            left: buttonNode.offsetLeft,
            bottom: buttonNode.offsetHeight + marginPadding.paddingTop + marginPadding.paddingBottom
          })
        }
      }
    }
  }, [isVisible, type])


  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (buttonRef.current && buttonRef.current.contains(event.target as Node)) return

      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsVisible(false)
      }
    }

    // イベントリスナーを設定
    document.addEventListener('click', handleClickOutside)
    return () => {
      // コンポーネントのクリーンアップ時にイベントリスナーを削除
      document.removeEventListener('click', handleClickOutside)
    }
  }, [popoverRef, isVisible])

  return { isVisible, buttonRef, popoverRef, handleButtonClick, popoverPosition }

}