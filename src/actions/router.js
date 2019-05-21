import { ActionsCreator } from '../helpers/actions'

const make = new ActionsCreator('router')

export default {
  updateLocation: make.action('updateLocation')
}
