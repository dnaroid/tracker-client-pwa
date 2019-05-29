import { ActionCreator } from '../helpers/ActionCreator'

const make = new ActionCreator('router')

export default {
  updateLocation: make.action('updateLocation', 'location')
}
