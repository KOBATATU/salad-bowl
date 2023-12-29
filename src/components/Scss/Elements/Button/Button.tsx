import React, { ReactNode } from 'react'
import { sizes } from '@/@types/style-type'
import { joinWithSpace } from '@/utils/objectsToString'
import './index.scss'
type ButtonProps = {
  /**
   * ボタンのスタイルの種類
   */
  variant?: 'primary' | 'danger' | 'white' | 'text'


  /**
   * ボタンの大きさ
   */
  size?: sizes

  /**
   * `true`のとき、ボタンを正方形にする。
   */
  square?: boolean

  /**
   * `true`のとき、ボタンが押下で若干グレーになる
   */
  ripple?: boolean

  /**
   * `true`のとき、ボタンのコンテンツ内容がローディングに変更
   */
  loading?: boolean

  /**
   * `true`のとき、ボタンが100%になる
   */
  fullWidth?: boolean

  /**
   * ボタンの前につくIcon
   */
  prefixIcon?: ReactNode

  /**
   * ボタンの後につくIcon
   */
  suffixIcon?: ReactNode

  /**
   * `true`のとき、ボタンがdisabledになる
   */
  disabled?: boolean

  /**
   * ボタンにクラスを追加
   */
  className?: string
}


const button   = {
  defaultProps: {
    variant: 'primary',
    size: 'md',
    square: false,
    ripple: false,
    loading: false,
    fullWidth: false,
    disabled:false,
    className: '',
  }
} as const

const createBtnClassName = (key:string, name: string) => `btn--${key}--${name} btn--${key}`
const createBtnClass = (name: string) => `btn--${name}`
export const Button = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithRef<'button'> & ButtonProps>(
  (props, ref) => {
    // 1 defaultProps
    const { defaultProps } = button

    // 2 props展開
    const buttonVariant = props.variant ?? defaultProps.variant
    const buttonSize = props.size ?? defaultProps.size
    const buttonSquare = props.square ?? defaultProps.square


    // 3className
    const variant = createBtnClassName('variant', buttonVariant)
    const size = createBtnClassName('size', buttonSize)
    const square = buttonSquare ? createBtnClass('square') : ''

    // 3 className join
    const classNames = joinWithSpace('btn', variant , size,square, props.className ?? '')

    const _children = () => {
      return (
        <>
          {props.prefixIcon && props.prefixIcon }
          {props.children}
          {props.suffixIcon && props.suffixIcon}
        </>
      )
    }

    return (
      <button className={classNames}>
        {_children()}
      </button>
    )
  }
)

Button.displayName = 'Button'