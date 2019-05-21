import { all, takeLatest } from 'redux-saga/effects'
import actions from '../actions'
import { LOCAL_STORAGE } from '../config/strings'
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
    takeLatest(actions.settings.initApp.request, initRouter),
    takeLatest(actions.router.updateLocation, updateLocation)
  ])
}
