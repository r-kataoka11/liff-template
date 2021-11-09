import liff from '@line/liff/dist/lib'
import { createAsyncThunk, SerializedError } from '@reduxjs/toolkit'
import { AuthInterface } from './authInterface'

const liffId: string = (import.meta.env.VITE_LIFF_ID as string) ?? ''

/**
 * LIFFログインしてユーザーのプロフィール情報を取得する
 */
export const initLiff = createAsyncThunk<
  AuthInterface,
  undefined,
  { rejectValue: SerializedError }
>('auth/initLiff', async (_, { rejectWithValue }) => {
  await liff.init({ liffId })

  // 未ログインの場合ログインする
  if (!liff.isLoggedIn()) {
    liff.login()
    return rejectWithValue({
      name: 'Error',
      code: 'LOGIN_ERROR',
      message: 'ログインされていません。',
    })
  }

  // ログイン済みの場合はプロフィール情報を取得する
  return {
    loading: false,
    profile: liff.getDecodedIDToken(),
  }
})

/**
 * ログアウトする
 */
export const logoutLiff = createAsyncThunk('auth/logoutLiff', () => {
  liff.logout()
})
