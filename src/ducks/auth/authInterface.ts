import liff from '@line/liff/dist/lib'
import { SerializedError } from '@reduxjs/toolkit'

/**
 * LIFF認証情報
 */
export interface AuthInterface {
  /**
   * liff.init中かどうか（true：ローディング中）
   */
  loading: boolean
  /**
   * ユーザーのプロフィール情報
   */
  profile?: ReturnType<typeof liff.getDecodedIDToken>
  /**
   * LIFF初期化中のエラー内容
   */
  error?: SerializedError
}
