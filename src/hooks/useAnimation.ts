import * as React from 'react'


type AnimationWidthHeightProps = {
  ref:  React.MutableRefObject<HTMLDivElement | null>
  open: boolean
}

/**
 * refオブジェクトに対してのanimationがある場合遅延させる
 * @param props
 */
export const useAnimationWidthHeight = <E extends React.ElementType,>(props: AnimationWidthHeightProps)=>{
  const [isPresent, setIsPresent] = React.useState<boolean>(false)
  const heightRef = React.useRef<number | undefined>(0)
  const widthRef = React.useRef<number | undefined>(0)
  const originalStylesRef = React.useRef<Record<string, string>>()

  React.useLayoutEffect(() => {
    const node = props.ref.current
    
    if (node) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      }
      // block any animations/transitions so the element renders at its full dimensions
      node.style.transitionDuration = '0s'
      node.style.animationName = 'none'

      // アニメーションが始まる直前の値を取得
      const rect = node.getBoundingClientRect()
      heightRef.current = rect.height
      widthRef.current = rect.width

      // kick off any animations/transitions that were originally set up if it isn't the initial mount
      node.style.transitionDuration = originalStylesRef.current.transitionDuration
      node.style.animationName = originalStylesRef.current.animationName

      //閉じる時のanimation終わりにisOpenがfalseになる
      node.addEventListener('animationend', ()=>{
        setIsPresent(props.open)
      })
    }

  }, [props.open, props.ref])
  
  return { isPresent, widthRef, heightRef }

}