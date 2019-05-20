import actions from '../actions'
import { createReducer, setIn } from '../helpers/reducers'

export default createReducer({
  logged: false,
  checked: false
}, {
  [actions.user.login.success]: (s) => setIn(s, 'logged', true),
  [actions.user.updateField]: (s, a) => setIn(s, a.field, a.value)
})
