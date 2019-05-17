import actions from '../actions'
import { createReducer, setIn } from '../helpers/reducers'

export default createReducer({
  email: '',
  password: '',
  logged: false,
  errors: {}
}, {
  [actions.user.updateField]: (s, a) => setIn(s, 'user', a.field, a.value),
  [actions.user.login.success]: (s) => setIn(s, 'user', 'logged', true)
})
