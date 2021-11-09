/**
 * 投稿一覧データ（サンプル）
 */
export interface PostList {
  posts: Post[]
}

/**
 * 投稿データ（サンプル）
 */
export interface Post {
  id: string
  title: string
  content: string
  createdDate: string
  updatedDate: string
}

/**
 * 編集済み投稿データ（サンプル）
 */
export type PostEditedData = Pick<Post, 'title' | 'content'>
