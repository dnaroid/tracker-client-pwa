import { all, takeLatest } from 'redux-saga/effects'
import actions from '../actions'

function login() {
  //try {
  //
  //}
  //catch (e) { console.warn(e) }
}

export default function* () {
  yield all([
    takeLatest(actions.user.login.request, login)
  ])
}
