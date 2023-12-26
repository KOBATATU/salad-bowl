import React from 'react'


export const useHover = () => {
  const [isHovered, setIsHovered] = React.useState(false)
  const targetRef = React.useRef<HTMLDivElement>(null)
  const [popoverPosition, setPopoverPosition] = React.useState({ left: 0, top: 0, width: 0,right:0 })


  const handleMouseOver = () => setIsHovered(true)
  const handleMouseOut = () => setIsHovered(false)

  React.useEffect(()=>{
    const node = targetRef.current
    if (node) {
      const rect = node.getBoundingClientRect()
      setPopoverPosition({left: rect.left, top: rect.top,width: rect.width,right: rect.right})

    }

  },[targetRef ])

  const hoverProps = {
    ref: targetRef,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
    popoverPosition: popoverPosition
  }

  return { isHovered, hoverProps }
}

// marginやpaddingを一応取得はできる
//const getMarginPaddingInfo = (element: HTMLElement): ElementMarginPaddingInfo => {
//   const computedStyle = getComputedStyle(element);
//
//   return {
//     paddingTop: parseFloat(computedStyle.paddingTop),
//     paddingBottom: parseFloat(computedStyle.paddingBottom),
//     paddingLeft: parseFloat(computedStyle.paddingLeft),
//     paddingRight: parseFloat(computedStyle.paddingRight),
//     marginTop: parseFloat(computedStyle.marginTop),
//     marginBottom: parseFloat(computedStyle.marginBottom),
//     marginLeft: parseFloat(computedStyle.marginLeft),
//     marginRight: parseFloat(computedStyle.marginRight),
//   };
// };