import actions from '../actions'
import { THEME } from '../config/strings'
import { loadObject } from '../helpers/browser'
import { createReducer, setIn } from '../helpers/reducers'

export default createReducer(loadObject('settings', {
  theme: THEME.LIGHT
}), {
  [actions.settings.setTheme]: (s, a) => setIn(s, 'theme', a.theme)
})
