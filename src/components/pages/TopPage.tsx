import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { logoutLiff } from '../../ducks/auth/authThunk'
import { UserAction } from '../domain/UserAction/UserAction'
import { UserProfile } from '../domain/UserProfile/UserProfile'
import { DefaultLayout } from '../layouts/DefaultLayout/DefaultLayout'
import { Header } from '../ui/Header/Header'

export const TopPage = () => {
  const dispatch = useDispatch()

  // ログアウト処理
  const logout = useCallback(() => {
    dispatch(logoutLiff())
    window.location.reload()
  }, [dispatch])

  return (
    <DefaultLayout
      header={<Header pageTitle="トップページ" userAction={<UserAction />} />}
    >
      <h2>ログイン中のユーザー情報</h2>
      <UserProfile />
      <p>
        <button onClick={logout}>ログアウト</button>
      </p>
    </DefaultLayout>
  )
}
