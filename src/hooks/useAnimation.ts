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
  const [height, setHeight] = React.useState<number | undefined>(0)
  const [width, setWidth] = React.useState<number | undefined>(0)
  const originalStylesRef = React.useRef<Record<string, string>>()
  
  
  React.useLayoutEffect(() => {
    const node = props.ref.current
    
    if (node) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      }
      // アニメーションに寄らない状態でサイズを取得
      node.style.transitionDuration = '0s'
      node.style.animationName = 'none'

      // アニメーションが始まる直前の値を取得
      const rect = node.getBoundingClientRect()
      setHeight(rect.height)
      setWidth(rect.width)

      // アニメーションの状態を元に戻す
      node.style.transitionDuration = originalStylesRef.current.transitionDuration
      node.style.animationName = originalStylesRef.current.animationName
      
      
      //閉じる時のanimation終わりにisOpenがfalseになる
      const handleAnimationEnd = ()=> {
        setIsPresent(props.open)
      }
      node.addEventListener('animationend', handleAnimationEnd)

      return ()=>{
        node.removeEventListener('animationend', handleAnimationEnd)
      }
    }


  }, [ props.open, props.ref])
  
  return { isPresent, width, height }

}