import { ActionCreator } from '../helpers/ActionCreator'

const make = new ActionCreator('user')

export default {
  update: make.action('update', 'user'),

  login: make.asyncAction('login'),
  logout: make.asyncAction('logout'),
  register: make.asyncAction('register')
}
