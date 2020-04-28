import { NowRequest, NowResponse } from "@now/node"
import cors from "micro-cors"
import { ApolloServer } from "apollo-server-micro"
import { resolvers, typeDefs } from "../src/graphql"

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
})

export const config = {
  api: {
    bodyParser: false
  }
}

const handler = apolloServer.createHandler({ path: "/graphql" })

export default cors()((req: NowRequest, res: NowResponse) => {
  return req.method === "OPTIONS" ? res.end() : handler(req, res)
})
