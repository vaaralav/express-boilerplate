// @flow

import {createPost as createNewPost} from '$db/repositories/postRepository'
import {PostType, PostInputType} from './types'

import type {DbPost} from '$db/models/Post'

export const createPost = {
  type: PostType,
  args: {
    post: {
      type: PostInputType,
    },
  },
  resolve: async (parentValue: any, {post}: {post: $Shape<DbPost>}) => {
    return await createNewPost(post)
  },
}
