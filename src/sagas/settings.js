import { all, put, select, takeLatest } from 'redux-saga/effects'
import actions from '../actions'
import { saveObject, updateTheme } from '../helpers/browser'

function* setTheme({ theme }) {
  updateTheme(theme)
  yield saveSettings()
}

function* saveSettings() {
  const settings = yield select(s => s.settings)
  saveObject('settings', settings)
}

function* initApp() {
  const theme = yield select(s => s.settings.theme)
  yield put({ type: actions.settings.setTheme, theme })
}

export default function* () {
  yield all([
    takeLatest(actions.settings.setTheme, setTheme),
    takeLatest(actions.settings.initApp.request, initApp)
  ])
}
