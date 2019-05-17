import { all, fork } from 'redux-saga/effects'
import settings from './settings'
import user from './user'

export default function* () {
  yield all([
    fork(user),
    fork(settings)
  ])
}
