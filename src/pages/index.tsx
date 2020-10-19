import React from 'react'
import useSWR from 'swr'
import { gql } from 'apollo-server-micro/dist'
import { print } from 'graphql/language/printer'
import fetcher from '../libs/fetcher'
import { Post } from '../libs/models'
import IndexTemplate from '../templates/Index'

type Response = {
  posts: Post[]
}

const query = print(gql`
  {
    posts {
      id
      title
      description
      url
      user {
        id
        name
      }
    }
  }
`)

export default function Index({
  initialData,
}: {
  initialData: never
}): React.ReactElement {
  const { data } = useSWR<Response>(query, fetcher, { initialData })
  if (!data) return <div>loading...</div>
  return <IndexTemplate posts={data.posts} />
}

export async function getServerSideProps(): Promise<{
  props: { initialData: Response }
}> {
  const data = await fetcher(query)
  return { props: { initialData: data } }
}
