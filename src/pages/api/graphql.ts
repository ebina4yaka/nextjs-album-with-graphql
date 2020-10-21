import { ApolloServer, gql } from 'apollo-server-micro/dist'

const typeDefs = gql`
  type Query {
    posts: [Post!]!
  }
  type Post {
    id: ID!
    title: String!
    caption: String!
    imageUrl: String!
    user: User!
  }
  type User {
    id: ID!
    name: String!
  }
`

const resolvers = {
  Query: {
    posts() {
      return [
        {
          id: 1,
          title: 'test1',
          caption: 'test post',
          imageUrl: 'https://source.unsplash.com/random',
          user: {
            id: 1,
            name: 'test_user',
          },
        },
        {
          id: 2,
          title: 'test2',
          caption: 'test post',
          imageUrl: 'https://source.unsplash.com/random',
          user: {
            id: 1,
            name: 'test_user',
          },
        },
        {
          id: 3,
          title: 'test3',
          caption: 'test post',
          imageUrl: 'https://source.unsplash.com/random',
          user: {
            id: 1,
            name: 'test_user',
          },
        },
        {
          id: 4,
          title: 'test4',
          caption: 'test post',
          imageUrl: 'https://source.unsplash.com/random',
          user: {
            id: 1,
            name: 'test_user',
          },
        },
        {
          id: 5,
          title: 'test5',
          caption: 'test post',
          imageUrl: 'https://source.unsplash.com/random',
          user: {
            id: 1,
            name: 'test_user',
          },
        },
        {
          id: `6`,
          title: 'test6',
          caption: 'test post',
          imageUrl: 'https://source.unsplash.com/random',
          user: {
            id: 1,
            name: 'test_user',
          },
        },
      ]
    },
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
