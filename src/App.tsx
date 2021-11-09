import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserProfile } from './components/domain/UserProfile/UserProfile'
import {
  authErrorSelector,
  authLoadingSelector,
} from './ducks/auth/authSelector'
import { initLiff, logoutLiff } from './ducks/auth/authThunk'

function App() {
  const dispatch = useDispatch()

  const isLoading = useSelector(authLoadingSelector)
  const error = useSelector(authErrorSelector)

  const logout = () => {
    dispatch(logoutLiff())
    window.location.reload()
  }

  // LIFFアプリを初期化＆ログイン
  useEffect(() => {
    dispatch(initLiff())
  }, [])

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  if (!!error) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    )
  }

  return (
    <div>
      <UserProfile />
      <p>
        <button onClick={logout}>ログアウト</button>
      </p>
    </div>
  )
}

export default App
