import { baseApi } from '../baseApi'
import { Post, PostEditedData, PostList } from './postsInterface'

/**
 * 投稿用API（サンプル）
 */
export const postsEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 投稿一覧を取得
    getPostList: builder.query<PostList, void>({
      query: () => ({
        url: 'posts',
      }),
      providesTags: () => [{ type: 'Posts' }],
    }),
    // 投稿を追加
    addPost: builder.mutation<{}, PostEditedData>({
      query: (params) => ({
        url: 'posts',
        method: 'POST',
        body: params,
      }),
      invalidatesTags: ['Posts'],
    }),
    // 投稿を編集
    editPost: builder.mutation<{}, Pick<Post, 'id'> & PostEditedData>({
      query: ({ id, ...params }) => ({
        url: `posts/${id}`,
        method: 'PUT',
        body: params,
      }),
      invalidatesTags: ['Posts'],
    }),
    // 投稿を削除
    deletePost: builder.mutation<{}, Pick<Post, 'id'>>({
      query: ({ id }) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
})

/**
 * 投稿API用Hooks（サンプル）
 */
export const {
  useGetPostListQuery,
  useAddPostMutation,
  useEditPostMutation,
  useDeletePostMutation,
} = postsEndpoints
