import actions from '../actions'
import { createReducer, setIn } from '../helpers/reducers'

export default createReducer({

  [actions.settings.setTheme]: (s, a) => setIn(s, 'theme', a.theme),

  [actions.settings.update]: (s, a) => a.settings

})
