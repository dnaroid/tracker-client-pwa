import { all, put, select, takeLatest } from 'redux-saga/effects'
import actions from '../actions'
import { LOCAL_STORAGE, THEME } from '../config/strings'
import { loadObject, saveObject, updateTheme } from '../helpers/browser'

function* saveSettings() {
  const settings = yield select(s => s.settings)
  saveObject(LOCAL_STORAGE.SETTINGS, settings)
}

function* setTheme({ theme }) {
  updateTheme(theme)
  yield saveSettings()
}

function* initSettings() {
  const settings = loadObject(LOCAL_STORAGE.SETTINGS, { theme: THEME.LIGHT })
  yield put({ type: actions.settings.update, settings })
  updateTheme(settings.theme)
}

export default function* () {
  yield all([
    takeLatest(actions.settings.initApp.request, initSettings),
    takeLatest(actions.settings.setTheme, setTheme)
  ])
}
