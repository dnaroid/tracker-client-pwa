import actions from '../actions'
import { createReducer, mergeIn } from '../helpers/reducers'

export default createReducer({

  [actions.track.update]: (s, a) => mergeIn(s, a.object),

  [actions.track.submit.success]: (s, a) => ({ number: '', title: '', valid: false })

}, {
  number: '',
  title: '',
  valid: false
})