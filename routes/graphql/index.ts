import { importSchema } from "graphql-import";
import { graphqlHTTP } from "express-graphql";
import { buildSchema, GraphQLError } from "graphql";
import express from "express";
import root from "./root";
import { authUser } from "../../middlewares";

const graphqlRoute = express.Router();
const schema = buildSchema(importSchema('**/*.gql'));

graphqlRoute.use("/", authUser() ,graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true ,
    customFormatErrorFn: (error : GraphQLError & { status: number }) => ({
        message: error.message,
        status: error.status || 500
    })
}))

export default graphqlRoute;