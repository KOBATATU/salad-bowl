import React from 'react'
import { getMarginPaddingInfo } from '@/hooks/useHover'

export const usePopover = <T extends HTMLElement>()=>{
  const [isVisible, setIsVisible] = React.useState(false)
  const buttonRef = React.useRef<T>(null)
  const popoverRef = React.useRef<HTMLDivElement>(null)
  const [popoverPosition, setPopoverPosition] = React.useState(
    { left: 0, top: 0, width:0, height:0, paddingTop:0, paddingLeft: 0, marginLeft: 0 }
  )

  const handleButtonClick = () => {
    setIsVisible(!isVisible)
  }

  React.useLayoutEffect( () => {
    const popoverNode = popoverRef.current
    if (isVisible && buttonRef.current && popoverNode) {
      const marginPadding = getMarginPaddingInfo(buttonRef.current)

      //相対値で計算させる
      if (buttonRef.current.offsetParent) {
        setPopoverPosition({
          left: buttonRef.current.offsetLeft,
          width: buttonRef.current.offsetWidth,
          top: buttonRef.current.offsetTop,
          height: buttonRef.current.offsetHeight,
          paddingTop: marginPadding.paddingTop,
          paddingLeft: marginPadding.paddingLeft,
          marginLeft: marginPadding.marginLeft
        })
      }
    }
  }, [buttonRef, popoverRef, isVisible])


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