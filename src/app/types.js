// @flow

export type Id = string

export type DbModel = {
  _id: Id,
  isNew: boolean,
  errors: Object,
  save: (options: Object, safe: boolean, validateBeforeSave: boolean, callback?: Function) => Promise<DbModel>,
  validate: () => boolean,
  remove: (error: Error, model: DbModel) => Promise<mixed>,
}
