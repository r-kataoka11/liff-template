import React, { FC } from 'react'
import './button.css'

export interface ButtonProps {
  /**
   * ボタンの種類（デフォルト：primary）
   */
  variant?: 'primary' | 'secondary' | 'danger'
  /**
   * ボタンのサイズ（デフォルト：medium）
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * ボタンクリック時の処理
   */
  onClick?: () => void
}

/**
 * ボタン
 */
export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={['button', `button--${size}`, `button--${variant}`].join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
