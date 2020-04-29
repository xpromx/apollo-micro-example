import path from "path"
import { fileLoader, mergeResolvers } from "merge-graphql-schemas"

const resolversArray = [
  ...fileLoader(path.join(__dirname, "../**/*Resolvers.ts")),
  ...fileLoader(path.join(__dirname, "../**/*Resolvers.js")),
  ...fileLoader(path.join(__dirname, "/src/**/*Resolvers.ts")),
  ...fileLoader(path.join(__dirname, "../src/**/*Resolvers.ts"))
]

const resolvers = mergeResolvers(resolversArray)

export default resolvers
