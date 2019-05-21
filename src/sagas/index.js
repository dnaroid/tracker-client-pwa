import { spawn } from 'redux-saga/effects'
import router from './router'
import settings from './settings'
import user from './user'

export default function* () {
  yield spawn(settings)
  yield spawn(router)
  yield spawn(user)
}
