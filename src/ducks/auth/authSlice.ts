import { createSlice } from '@reduxjs/toolkit'
import { AuthInterface } from './authInterface'
import { initLiff, logoutLiff } from './authThunk'

/**
 * 認証情報の初期状態
 */
const initialState: AuthInterface = {
  loading: true,
  profile: undefined,
  error: undefined,
}

/**
 * 認証情報のSlice
 */
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initLiff.pending, (state) => {
      state.loading = true
      state.error = undefined
    })
    builder.addCase(initLiff.fulfilled, (state, action) => {
      state.loading = false
      state.profile = action.payload.profile
    })
    builder.addCase(initLiff.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    builder.addCase(logoutLiff.fulfilled, (state) => {
      state.loading = initialState.loading
      state.profile = initialState.profile
      state.error = initialState.error
    })
  },
})

/**
 * 認証情報のReducer
 */
export default authSlice.reducer
