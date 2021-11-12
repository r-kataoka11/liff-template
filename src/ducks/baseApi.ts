import liff from '@line/liff/dist/lib'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL as string) ?? ''

/**
 * RTK Queryを使用したAPI接続のベース
 *
 * MEMO：このbaseApiを元にdomain毎にinjectEndpointsするようにしてください。
 */
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
    prepareHeaders: (headers) => {
      const accessToken = liff.getAccessToken()

      headers.set('authorization', `Bearer ${accessToken}`)

      return headers
    },
  }),
  endpoints: () => ({}),
  tagTypes: ['Posts'],
})
