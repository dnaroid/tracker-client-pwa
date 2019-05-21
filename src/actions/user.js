import { ActionsCreator } from '../helpers/actions'

const make = new ActionsCreator('user')

export default {
  updateField: make.action('updateField'),

  login: make.asyncAction('login'),
  logout: make.asyncAction('logout'),
  register: make.asyncAction('register')
}
