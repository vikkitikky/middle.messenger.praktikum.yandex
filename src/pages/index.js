import { Error } from './error/index.js'

const NotFoundPage = Error
const SomethingWentWrongPage = Error

const PageNames = {
  NotFond: 'NotFoundPage',
  SomethingWentWrong: 'SomethingWentWrongPage',
}

export {
  NotFoundPage,
  SomethingWentWrongPage,
  PageNames,
}
