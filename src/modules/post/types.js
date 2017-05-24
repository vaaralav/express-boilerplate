// @flow

import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
} from 'graphql/type'

export const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: {
    _id: {type: new GraphQLNonNull(GraphQLID)},
    title: {type: GraphQLString},
    body: {type: GraphQLString},
  },
})

export const PostInputType = new GraphQLInputObjectType({
  name: 'PostInput',
  fields: {
    _id: {type: GraphQLID},
    title: {type: new GraphQLNonNull(GraphQLString)},
    body: {type: new GraphQLNonNull(GraphQLString)},
  },
})
