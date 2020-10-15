export type Post = {
  id: number
  title: string
  description: string
  url: string
  user: User
}

type User = {
  id: number
  name: string
}
