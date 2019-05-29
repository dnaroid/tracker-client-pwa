import { ActionCreator } from '../helpers/ActionCreator'

const make = new ActionCreator('track')

export default {
  setCurrentId: make.action('setCurrentId', 'id'),
  clear: make.action('clear'),

  fetchAll: make.asyncAction('fetchAll'),
  submit: make.asyncAction('submit'),
  delete: make.asyncAction('delete'),
  fetch: make.asyncAction('fetch')
}
