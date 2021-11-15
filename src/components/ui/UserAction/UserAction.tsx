import { shallowEqual, useSelector } from 'react-redux'
import { userProfileSelector } from '../../../ducks/auth/authSelector'
import './userAction.css'

/**
 * ユーザー情報の型
 */
export interface UserActionPresenterProps {
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
 * ユーザー情報（View部分）
 */
export const UserActionPresenter = ({
  userImg,
  userName,
}: UserActionPresenterProps) => {
  return (
    <div className="user-action">
      <p className="user-action-thumbnail">
        <img
          src={userImg ?? '/assets/user-default.png'}
          className="user-action-thumbnail__img"
        />
      </p>
      <p className="user-action-name">{userName}</p>
    </div>
  )
}

/**
 * ユーザー情報
 */
export const UserAction = () => {
  const profile = useSelector(userProfileSelector, shallowEqual)

  return (
    <UserActionPresenter userImg={profile?.picture} userName={profile?.name} />
  )
}
