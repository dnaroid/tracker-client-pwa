import actions from '../actions'
import { createReducer, setIn } from '../helpers/reducers'

export default createReducer({

  [actions.settings.setTheme.type]: (s, a) => setIn(s, 'theme', a.theme),

  [actions.settings.update.type]: (s, a) => a.settings

})
