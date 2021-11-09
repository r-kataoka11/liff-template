import { combineReducers, configureStore } from '@reduxjs/toolkit'
import auth from './auth/authSlice'
import { baseApi } from './baseApi'

/**
 * Reducer
 */
const reducer = combineReducers({
  auth,
  [baseApi.reducerPath]: baseApi.reducer,
})

/**
 * Store （カスタマイズする場合はここを触る）
 */
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

/**
 * RootStateの型
 */
export type RootState = ReturnType<typeof store.getState>

/**
 * Dispatchの型
 */
export type AppDispatch = typeof store.dispatch
