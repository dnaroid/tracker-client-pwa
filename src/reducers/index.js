import { combineReducers } from 'redux'
import router from './router'
import settings from './settings'
import track from './track'
import user from './user'

export default combineReducers({
  user,
  settings,
  router,
  track
})
