import { ActionsTypeCreator } from '../helpers/actions'

const make = new ActionsTypeCreator('user')

export default {
  update: make.action('update'),

  login: make.asyncAction('login'),
  logout: make.asyncAction('logout'),
  register: make.asyncAction('register')
}
