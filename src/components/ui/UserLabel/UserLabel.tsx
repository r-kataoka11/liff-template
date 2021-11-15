import './userLabel.css'

/**
 * ユーザー情報の型
 */
export interface UserLabelProps {
  /**
   * ユーザーのサムネイル画像
   */
  userImg?: string
  /**
   * ユーザーの表示名
   */
  userName?: string
}

/**
 * ユーザー情報
 */
export const UserLabel = ({ userImg, userName }: UserLabelProps) => {
  return (
    <div className="user-label">
      <p className="user-label-thumbnail">
        <img
          src={userImg ?? '/assets/user-default.png'}
          className="user-label-thumbnail__img"
        />
      </p>
      <p className="user-label-name">{userName}</p>
    </div>
  )
}
