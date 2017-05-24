// @flow

import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import graphqlHTTP from 'express-graphql'

import schema from './schema'
import connectDb from './connectDb'

import type {$Application} from 'express'

export default (): $Application => {
  const app = express()

  app.use(helmet())
  app.use(cors())

  connectDb()

  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  }))

  return app
}
