// @flow

import {GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString} from 'graphql/type'

const PostType = new GraphQLObjectType({
  name: 'post',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    title: {
      type: GraphQLString,
    },
    body: {
      type: GraphQLString,
    },
  },
})

export default PostType
