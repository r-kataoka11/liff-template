import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { logoutLiff } from '../../ducks/auth/authThunk'
import { UserProfile } from '../domain/UserProfile/UserProfile'

export const TopPage = () => {
  const dispatch = useDispatch()

  const logout = useCallback(() => {
    dispatch(logoutLiff())
    window.location.reload()
  }, [dispatch])

  return (
    <div>
      <UserProfile />
      <p>
        <button onClick={logout}>ログアウト</button>
      </p>
    </div>
  )
}
