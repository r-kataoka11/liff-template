import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import {
  authErrorSelector,
  authLoadingSelector,
} from '../../../ducks/auth/authSelector'
import { initLiff } from '../../../ducks/auth/authThunk'

/**
 * ログイン時のみルーティングする
 */
export const PrivateRoute = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(authLoadingSelector)
  const error = useSelector(authErrorSelector)

  // LIFFアプリを初期化＆ログイン
  useEffect(() => {
    dispatch(initLiff())
  }, [])

  // LIFF初期化・ログイン中
  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  // LIFF初期化・ログインエラー時
  if (!!error) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    )
  }

  return <Outlet />
}
