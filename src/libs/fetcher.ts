import { request } from 'graphql-request'

export default async function fetcher(query: RequestInfo): Promise<never> {
  const response = await request<never>(
    'http://localhost:3000/api/graphql/',
    query.toString()
  )
  return response
}
