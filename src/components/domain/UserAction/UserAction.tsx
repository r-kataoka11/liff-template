import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { userProfileSelector } from '../../../ducks/auth/authSelector'
import { UserLabel } from '../../ui/UserLabel/UserLabel'

/**
 * ユーザー操作コンポーネント
 */
export const UserAction = () => {
  const profile = useSelector(userProfileSelector, shallowEqual)

  return <UserLabel userImg={profile?.picture} userName={profile?.name} />
}
