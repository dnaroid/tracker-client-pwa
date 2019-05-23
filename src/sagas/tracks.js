import { all, call, put, takeLatest } from 'redux-saga/effects'
import actions from '../actions'
import endpoints from '../config/endpoints'
import { ROUTE } from '../config/strings'
import { redirect } from '../helpers/browser'

function* fetch() {
  const { data, message } = yield call(endpoints.track.collection)
  if (data) {
    yield put({ type: actions.tracks.fetch.success, data })
  } else {
    yield put({ type: actions.tracks.fetch.fail, message })
  }
  redirect(ROUTE.TRACKS)
}

export default function* () {
  yield all([
    takeLatest(actions.tracks.fetch.request, fetch)
  ])
}
