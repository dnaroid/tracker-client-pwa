import { all, takeLatest } from 'redux-saga/effects'
import actions from '../actions'
import { LOCAL_STORAGE } from '../config/constants'
import { loadObject, redirect, saveObject } from '../helpers/browser'

function updateLocation({ location }) {
  saveObject(LOCAL_STORAGE.LOCATION, location)
}

function initRouter() {
  const location = loadObject(LOCAL_STORAGE.LOCATION, { pathname: '/' })
  redirect(location)
}

export default function* () {
  yield all([
    takeLatest(actions.settings.initApp.request.type, initRouter),
    takeLatest(actions.router.updateLocation.type, updateLocation)
  ])
}
