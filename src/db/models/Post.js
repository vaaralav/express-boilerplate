// @flow

import mongoose, {Schema} from 'mongoose'

import type {DbModel} from '$app/types'

export type DbPost = DbModel & {
  title: string,
  body: string,
}

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
})

export default mongoose.model('Post', PostSchema)
