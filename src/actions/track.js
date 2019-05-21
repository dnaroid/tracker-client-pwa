import { ActionsCreator } from '../helpers/actions'

const make = new ActionsCreator('track')

export default {
  update: make.action('update'),

  submitReq: make.asyncAction('submitReq')
}
