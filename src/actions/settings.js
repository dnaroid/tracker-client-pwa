import { ActionsCreator } from '../helpers/actions'

const scope = 'settings'
const make = new ActionsCreator(scope)

export default {
  [scope]: {
    setTheme: make.action('setTheme'),

    initApp: make.asyncAction('initApp')
  }
}
