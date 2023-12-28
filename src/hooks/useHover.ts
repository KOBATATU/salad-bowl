import React from 'react'
import { position } from '@/hooks/usePopover'

type HoverProps = {
  type: keyof position
}

export const useHover = <T extends HTMLElement>(props: HoverProps) => {
  const { type = 'bottom' } = props
  const [isHovered, setIsHovered] = React.useState(false)
  const buttonRef = React.useRef<T>(null)
  const hoverRef = React.useRef<HTMLDivElement>(null)
  const [hoverPosition, setHoverPosition] = 
    React.useState<position>()
  
  const handleMouseOver = () => {
    setIsHovered(true)
  }
  const handleMouseOut = () => {
    setIsHovered(false)
  }

  React.useLayoutEffect(()=>{
    const buttonNode = buttonRef.current
    const popoverNode = hoverRef.current

    if (isHovered && buttonNode && popoverNode) {
      const marginPadding = getMarginPaddingInfo(buttonNode)
      const { width, height } = popoverNode.getBoundingClientRect()

      //相対値を計算
      if (buttonRef.current.offsetParent) {
        if(type === 'right') {
          setHoverPosition({
            left: buttonNode.offsetLeft + buttonNode.offsetWidth ,
            top: buttonNode.offsetTop
          })
        }
      }
    }
  }, [isHovered, type])


  const hoverProps = {
    buttonRef: buttonRef,
    hoverRef: hoverRef,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
    hoverPosition: hoverPosition
  }

  return { isHovered, hoverProps }
}

// marginやpaddingを一応取得はできる
export const getMarginPaddingInfo = (element: HTMLElement) => {
  const computedStyle = getComputedStyle(element)

  return {
    paddingTop: parseFloat(computedStyle.paddingTop),
    paddingBottom: parseFloat(computedStyle.paddingBottom),
    paddingLeft: parseFloat(computedStyle.paddingLeft),
    paddingRight: parseFloat(computedStyle.paddingRight),
    marginTop: parseFloat(computedStyle.marginTop),
    marginBottom: parseFloat(computedStyle.marginBottom),
    marginLeft: parseFloat(computedStyle.marginLeft),
    marginRight: parseFloat(computedStyle.marginRight),
  }
}