import { all, call, put, takeLatest } from 'redux-saga/effects'
import actions from '../actions'
import endpoints from '../config/endpoints'
import { LOCAL_STORAGE, ROUTE, STATUS } from '../config/strings'
import { redirect, saveString } from '../helpers/browser'

function* finishUserCheck() {
  yield put({ type: actions.user.updateField, field: 'checked', value: true })
}

function* login({ email, password }) {
  const { token } = yield call(endpoints.login.post, { email, password })
  if (token) {
    saveString(LOCAL_STORAGE.TOKEN, token)
    yield put({ type: actions.user.login.success })
  }
  yield finishUserCheck()
  redirect(ROUTE.TRACKS)
}

function* initUser() {
  const { status } = yield call(endpoints.status.get)
  if (status === STATUS.SUCCESS) {
    yield put({ type: actions.user.login.success })
  }
  else {
    redirect(ROUTE.AUTH)
  }
  yield finishUserCheck()
}

export default function* () {
  yield all([
    takeLatest(actions.settings.initApp.request, initUser),
    takeLatest(actions.user.login.request, login)
  ])
}
