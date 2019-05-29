import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import actions from '../actions'
import { LOCAL_STORAGE, ROUTE, STATUS } from '../config/constants'
import endpoints from '../config/endpoints'
import { redirect, saveString } from '../helpers/browser'

function* login() {
  const { email, password } = yield select(s => s.user)
  const { token, message } = yield call(endpoints.login.post, { email, password })

  if (token) {
    saveString(LOCAL_STORAGE.TOKEN, token)
    yield put(actions.user.login.success())
    redirect(ROUTE.TRACKS)
  } else {
    yield put(actions.user.login.fail(message))
  }
}

function* register() {
  const { email, password } = yield select(s => s.user)
  const { token, message } = yield call(endpoints.register.post, { email, password })

  if (token) {
    saveString(LOCAL_STORAGE.TOKEN, token)
    yield put(actions.user.register.success())
    redirect(ROUTE.TRACK)
  } else {
    yield put(actions.user.register.fail(message))
  }
}

function* initUser() {
  const { status, message } = yield call(endpoints.status.get)
  if (status === STATUS.SUCCESS) {
    yield put(actions.user.login.success())
  } else {
    yield put(actions.user.login.fail(message))
    redirect(ROUTE.AUTH)
  }
}

function* logout() {
  const { status, message } = yield call(endpoints.logout.post)
  if (status === STATUS.SUCCESS) {
    yield put(actions.user.logout.success())
    saveString(LOCAL_STORAGE.TOKEN, '')
  } else {
    yield put(actions.user.logout.fail(message))
  }
  redirect(ROUTE.AUTH)
}

export default function* () {
  yield all([
    takeLatest(actions.settings.initApp.request.type, initUser),
    takeLatest(actions.user.login.request.type, login),
    takeLatest(actions.user.register.request.type, register),
    takeLatest(actions.user.logout.request.type, logout)
  ])
}
