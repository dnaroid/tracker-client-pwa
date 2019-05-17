import { ActionsCreator } from '../helpers/actions'

const scope = 'user'
const make = new ActionsCreator(scope)

export default {
  [scope]: {
    updateField: make.action('updateField'),

    login: make.asyncAction('login'),
    logout: make.asyncAction('logout'),
    register: make.asyncAction('register')
  }
}
