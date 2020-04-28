import { fileLoader, mergeTypes } from "merge-graphql-schemas"
import path from "path"

const typesArray = fileLoader(path.join(__dirname, "../**/*.gql"), {
  recursive: true
})

const typeDefs = mergeTypes(typesArray, { all: true })

export default typeDefs
