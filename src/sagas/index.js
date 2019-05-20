import { spawn } from 'redux-saga/effects'
import settings from './settings'
import user from './user'

export default function* () {
  yield spawn(settings)
  yield spawn(user)
}
