import { spawn } from 'redux-saga/effects'
import router from './router'
import settings from './settings'
import track from './track'
import tracks from './tracks'
import user from './user'

export default function* () {
  yield spawn(settings)
  yield spawn(router)
  yield spawn(user)
  yield spawn(track)
  yield spawn(tracks)
}
