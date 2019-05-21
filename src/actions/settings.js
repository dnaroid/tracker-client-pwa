import { ActionsCreator } from '../helpers/actions'

const make = new ActionsCreator('settings')

export default {
  update: make.action('update'),
  setTheme: make.action('setTheme'),

  initApp: make.asyncAction('initApp')
}
