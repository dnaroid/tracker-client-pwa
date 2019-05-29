import Endpoints from '../helpers/Endpoints'
import { DEVELOPMENT } from './constants'

const API_URL = DEVELOPMENT
  ? 'http://localhost:5000/api'
  : 'https://dnaroid.pythonanywhere.com/api'

const ep = new Endpoints(API_URL)

export default {
  login: ep.add('login'),
  register: ep.add('register'),
  logout: ep.add('logout'),
  status: ep.add('status'),

  track: ep.add('track/:id'),
  tracks: ep.add('tracks')
}
