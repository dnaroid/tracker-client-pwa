import { all, put, select, takeLatest } from 'redux-saga/effects'
import actions from '../actions'
import { LOCAL_STORAGE } from '../config/constants'
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
  const settings = loadObject(LOCAL_STORAGE.SETTINGS)
  yield put(actions.settings.update(settings))
}

export default function* () {
  yield all([
    takeLatest(actions.settings.initApp.request.type, initSettings),
    takeLatest(actions.settings.setTheme.type, setTheme)
  ])
}
