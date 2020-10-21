export type Post = {
  id: number
  title: string
  caption: string
  imageUrl: string
  likesCount: number
  user: {
    id: number
    name: string
  }
}

export type User = {
  id: number
  name: string
  screenName: string
  biography: string
  posts: Post[]
  followersCount: number
  avatarUrl: string
}
