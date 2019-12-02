import { resolve } from 'path'
import { GraphQLServer } from 'graphql-yoga'

const USERS = [
  {
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Mary'
  }
]

const typeDefs = resolve(__dirname, 'schema.graphql')
const resolvers = {
  Query: {
    users: () => USERS
  }
}

const server = new GraphQLServer({
  resolvers,
  typeDefs
})

export default server