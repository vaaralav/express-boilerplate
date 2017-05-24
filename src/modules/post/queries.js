// @flow

import {GraphQLID, GraphQLNonNull} from 'graphql/type'

import {findPostById} from '$db/repositories/postRepository'
import {PostType} from './types'

import type {Id} from '$app/types'

export const post = {
  type: PostType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (parentValue: any, {id}: {id: Id}) => {
    return await findPostById(id)
  },
}
