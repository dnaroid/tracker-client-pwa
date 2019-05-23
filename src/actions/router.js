import { ActionsTypeCreator } from '../helpers/actions'

const make = new ActionsTypeCreator('router')

export default {
  updateLocation: make.action('updateLocation')
}
