import actions from '../actions'
import { createReducer, setIn } from '../helpers/reducers'

const initialState = {
  currentId: null,
  all: {}
}

export default createReducer({

  [actions.track.fetchAll.success.type]: (s, a) => setIn(s, 'all', a.payload),

  [actions.track.setCurrentId.type]: (s, a) => setIn(s, 'currentId', a.id)

}, initialState)
