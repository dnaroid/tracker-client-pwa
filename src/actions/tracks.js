import { ActionsTypeCreator } from '../helpers/actions'

const make = new ActionsTypeCreator('tracks')

export default {
  fetch: make.asyncAction('fetch')
}
