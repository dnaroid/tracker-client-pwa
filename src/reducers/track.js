import actions from '../actions'
import { createReducer, mergeIn } from '../helpers/reducers'

export default createReducer({

  [actions.track.update]: (s, a) => mergeIn(s, a.object),

  [actions.track.submit.success]: (s, a) => ({ number: '', title: '', valid: false }),

  [actions.track.fetch.success]: (s, a) => a.data

}, {
  number: '',
  title: '',
  valid: false
})
