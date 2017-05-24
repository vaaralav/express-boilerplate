// @flow

import mongoose from 'mongoose'
import {graphql} from 'graphql'

import schema from '$app/schema'
import createTestServer from '../createTestServer'

describe('post', () => {
  let server

  beforeAll(() => {
    server = createTestServer()
  })

  afterAll(() => {
    server.close()
    mongoose.connection.close()
  })

  it('should create post', async () => {
    const mutation = `
      mutation {
        createPost(post: {
          title: "Hello World",
          body: "Welcome to my blog.",
        }) {
          _id,
          title,
          body,
        }
      }
    `

    const result: {data: any} = await graphql(schema, mutation)

    expect(result.data.createPost._id).toBeDefined()
    expect(result.data.createPost.title).toBe('Hello World')
    expect(result.data.createPost.body).toBe('Welcome to my blog.')
  })

  it('should fetch post', async () => {
    const mutation = `
      mutation {
        createPost(post: {
          title: "Hello World",
          body: "Welcome to my blog.",
        }) {
          _id,
          title,
          body,
        }
      }
    `

    const mutationResult: {data: any} = await graphql(schema, mutation)

    const query = `
      query {
        post(id: "${mutationResult.data.createPost._id}") {
          _id,
          title,
          body,
        }
      }
    `

    const queryResult: {data: any} = await graphql(schema, query)

    expect(queryResult.data.post._id).toBe(mutationResult.data.createPost._id)
    expect(queryResult.data.post.title).toBe('Hello World')
    expect(queryResult.data.post.body).toBe('Welcome to my blog.')
  })
})
