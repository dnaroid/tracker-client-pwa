import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import actions from '../actions'
import endpoints from '../config/endpoints'
import { LOCAL_STORAGE, ROUTE, STATUS } from '../config/strings'
import { redirect, saveString } from '../helpers/browser'

function* login() {
  const { email, password } = yield select(s => s.user)
  const { token, message } = yield call(endpoints.login.post, { email, password })

  if (token) {
    saveString(LOCAL_STORAGE.TOKEN, token)
    yield put({ type: actions.user.login.success })
    redirect(ROUTE.TRACKS)
  } else {
    yield put({ type: actions.user.login.fail, message })
  }
}

function* register() {
  const { email, password } = yield select(s => s.user)
  const { token, message } = yield call(endpoints.register.post, { email, password })

  if (token) {
    saveString(LOCAL_STORAGE.TOKEN, token)
    yield put({ type: actions.user.register.success })
    redirect(ROUTE.TRACK)
  } else {
    yield put({ type: actions.user.register.fail, message })
  }
}

function* initUser() {
  const { status } = yield call(endpoints.status.get)
  if (status === STATUS.SUCCESS) {
    yield put({ type: actions.user.login.success })
  } else {
    yield put({ type: actions.user.login.fail })
    redirect(ROUTE.AUTH)
  }
}

export default function* () {
  yield all([
    takeLatest(actions.settings.initApp.request, initUser),
    takeLatest(actions.user.login.request, login),
    takeLatest(actions.user.register.request, register)
  ])
}
