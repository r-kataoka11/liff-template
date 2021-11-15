import React from 'react'
import './header.css'

/**
 * ヘッダーの型
 */
export interface HeaderProps {
  /**
   * ページのタイトル
   */
  pageTitle?: string
  /**
   * ユーザー情報コンポーネント
   */
  userAction: React.ReactNode
}

/**
 * ヘッダー
 */
export const Header = ({ pageTitle, userAction }: HeaderProps) => {
  return (
    <div className="header">
      <h1 className="header-title">{pageTitle}</h1>
      {userAction}
    </div>
  )
}
