import actions from '../actions'
import { createReducer, setIn } from '../helpers/reducers'

export default createReducer({

  [actions.user.login.success]: (s) => setIn(s, 'logged', true),

  [actions.user.updateField]: (s, a) => setIn(s, a.field, a.value)

}, {
  logged: false,
  checked: false
})
