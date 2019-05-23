import actions from '../actions'
import { createReducer } from '../helpers/reducers'

export default createReducer({

  [actions.tracks.fetch.success]: (s, a) => a.data,

  [actions.tracks.fetch.fail]: () => ({})

})
