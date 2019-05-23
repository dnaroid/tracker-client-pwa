import { ActionsTypeCreator } from '../helpers/actions'

const make = new ActionsTypeCreator('settings')

export default {
  update: make.action('update'),
  setTheme: make.action('setTheme'),

  initApp: make.asyncAction('initApp')
}
