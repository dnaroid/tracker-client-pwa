import actions from '../actions'
import { createReducer, mergeIn } from '../helpers/reducers'

const requestSuccess = (s) => mergeIn(s, { logged: true, checked: true, error: null })
const requestFail = (s, a) => mergeIn(s, { logged: false, checked: true, error: a.payload })

export default createReducer({

  [actions.user.update.type]: (s, a) => mergeIn(s, a.user),

  [actions.user.login.success.type]: requestSuccess,
  [actions.user.login.fail.type]: requestFail,

  [actions.user.register.success.type]: requestSuccess,
  [actions.user.register.fail.type]: requestFail,

  [actions.user.logout.success.type]: (s) => mergeIn(s, { logged: false, checked: true })

}, {
  logged: false,
  checked: false,
  error: null
})
