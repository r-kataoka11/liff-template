import { combineReducers, configureStore } from '@reduxjs/toolkit'
import auth from './auth/authSlice'

/**
 * Reducer
 */
const reducer = combineReducers({
  auth,
})

/**
 * Store （カスタマイズする場合はここを触る）
 */
export const store = configureStore({
  reducer,
})

/**
 * RootStateの型
 */
export type RootState = ReturnType<typeof store.getState>

/**
 * Dispatchの型
 */
export type AppDispatch = typeof store.dispatch
