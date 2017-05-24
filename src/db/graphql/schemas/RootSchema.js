// @flow

import {GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLNonNull} from 'graphql/type'

import {findPostById} from '$db/repositories/postRepository'
import PostType from '../types/PostType'

const RootSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Root',
    fields: {
      post: {
        type: PostType,
        args: {
          id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID),
          },
        },
        resolve: async (parentValue, {id}) => {
          return await findPostById(id)
        },
      },
    },
  }),
})

export default RootSchema
