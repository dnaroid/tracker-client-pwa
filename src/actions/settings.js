import { ActionCreator } from '../helpers/ActionCreator'

const make = new ActionCreator('settings')

export default {
  update: make.action('update', 'settings'),
  setTheme: make.action('setTheme', 'theme'),

  initApp: make.asyncAction('initApp')
}
