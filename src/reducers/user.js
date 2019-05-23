import actions from '../actions'
import { createReducer, mergeIn } from '../helpers/reducers'

const authSuccess = (s) => mergeIn(s, { logged: true, checked: true, error: null })
const authFail = (s, a) => mergeIn(s, { logged: false, checked: true, error: a.message })

export default createReducer({

  [actions.user.update]: (s, a) => mergeIn(s, a.object),

  [actions.user.login.success]: authSuccess,
  [actions.user.login.fail]: authFail,

  [actions.user.register.success]: authSuccess,
  [actions.user.register.fail]: authFail,

  [actions.user.logout.success]: (s) => mergeIn(s, { logged: false, checked: true })

}, {
  logged: false,
  checked: false,
  error: null
})
