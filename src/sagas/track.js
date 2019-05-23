import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import actions from '../actions'
import endpoints from '../config/endpoints'
import { ROUTE } from '../config/strings'
import { redirect } from '../helpers/browser'

function* fetch({ id }) {
  const { data, message } = yield call(endpoints.track.param(id).get)
  if (data) {
    yield put({ type: actions.track.fetch.success, data })
  } else {
    yield put({ type: actions.track.fetch.fail, message })
  }
}

function* submit() {
  const track = yield select(s => s.track)
  const { status } = track.id
    ? yield call(endpoints.track.param(track.id).put, track)
    : yield call(endpoints.track.post, track)

  redirect(ROUTE.TRACKS)
}

export default function* () {
  yield all([
    takeLatest(actions.track.fetch.request, fetch),
    takeLatest(actions.track.submit.request, submit)
  ])
}
