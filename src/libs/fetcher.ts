import { request } from 'graphql-request'

const getUrl = () => {
  if (process.env.API_URL) {
    return process.env.API_URL
  }
  return ''
}

export default async function fetcher(query: RequestInfo): Promise<never> {
  const response = await request<never>(getUrl(), query.toString())
  return response
}
