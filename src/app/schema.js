// @flow

import {GraphQLSchema, GraphQLObjectType} from 'graphql/type'

import * as postQueryFields from '$modules/post/queries'
import * as postMutationFields from '$modules/post/mutations'

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      ...postQueryFields,
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      ...postMutationFields,
    },
  }),
})

export default schema
