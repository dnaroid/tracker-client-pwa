import { ActionsTypeCreator } from '../helpers/actions'

const make = new ActionsTypeCreator('track')

export default {
  update: make.action('update'),

  submit: make.asyncAction('submit')
}
