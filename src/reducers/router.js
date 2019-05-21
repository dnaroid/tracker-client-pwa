import actions from '../actions'
import { createReducer, setIn } from '../helpers/reducers'

export default createReducer({

  [actions.router.updateLocation]: (s, a) => setIn(s, 'location', a.location)

}, {
  location: {
    pathname: '/'
  }
})
