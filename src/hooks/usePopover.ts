import React from 'react'

export const usePopover = <T extends HTMLElement>()=>{
  const [isVisible, setIsVisible] = React.useState(false)
  const buttonRef = React.useRef<T>(null)
  const popoverRef = React.useRef<HTMLDivElement>(null)
  const [popoverPosition, setPopoverPosition] = React.useState({ left: 0, top: 0 })

  const handleButtonClick = () => {
    setIsVisible(!isVisible)
  }

  React.useEffect( () => {
    const popoverNode = popoverRef.current
    if (isVisible && buttonRef.current && popoverNode) {

      const rect = buttonRef.current.getBoundingClientRect()
      const popoverRect = popoverNode.getBoundingClientRect()

      setPopoverPosition({
        left: rect.left ,
        top: rect.top
      })
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