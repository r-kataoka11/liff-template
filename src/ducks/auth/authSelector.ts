import { RootState } from '../store'

/**
 * LIFF初期化・ログイン中かどうか取得する
 * @returns ローディング状態（true：ログイン中）
 */
export const authLoadingSelector = (state: RootState) => state.auth.loading

/**
 * ユーザーのプロフィール情報を取得する
 * @returns プロフィール情報
 */
export const userProfileSelector = (state: RootState) => state.auth.profile

/**
 * LIFF初期化・ログイン時のエラー内容を取得する
 * @returns エラー内容
 */
export const authErrorSelector = (state: RootState) => state.auth.error
