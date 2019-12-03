import { resolve } from 'path'
import { GraphQLServer } from 'graphql-yoga'

const USERS = [
  {
    id: 1,
    name: 'John',
    email: 'john@gmail.com'
  },
  {
    id: 2,
    name: 'Mary',
    email: 'mary@gmail.com'
  }
]

const typeDefs = resolve(__dirname, 'schema.graphql')
const resolvers = {
  Query: {
    users: () => USERS
  },
  Mutation: {
    createUser: (parent, args, ctx, info) => {
      const { data } = args
      const user = {
        ...data,
        id: USERS.length + 1
      }

      USERS.push(user)
      
      return user
    }
  }
}

const server = new GraphQLServer({
  resolvers,
  typeDefs
})

export default server