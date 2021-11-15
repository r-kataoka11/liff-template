import React, { FC } from 'react'
import './defaultLayout.css'

/**
 * デフォルトのページレイアウトの型
 */
export interface DefaultLayoutProps {
  /**
   * ヘッダーコンポーネント
   */
  header: React.ReactNode
}

/**
 * デフォルトのページレイアウト
 */
export const DefaultLayout: FC<DefaultLayoutProps> = ({ header, children }) => {
  return (
    <div className="default-layout">
      <div className="default-layout__header">{header}</div>
      <div className="default-layout__content">{children}</div>
    </div>
  )
}
