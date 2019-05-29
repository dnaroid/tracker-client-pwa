import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import actions from '../actions'
import { ROUTE } from '../config/constants'
import endpoints from '../config/endpoints'
import { redirect } from '../helpers/browser'

function* fetchAll() {
  const { data, message } = yield call(endpoints.tracks.get)
  if (data) {
    yield put(actions.track.fetchAll.success(data))
  } else {
    yield put(actions.track.fetchAll.fail(message))
  }
  redirect(ROUTE.TRACKS)
}

function* fetch({ payload }) {
  const { data, message } = yield call(endpoints.track.params({ id: payload }).get)
  if (data) {
    yield put(actions.track.fetch.success(data))
  } else {
    yield put(actions.track.fetch.fail(message))
  }
}

function* submit() {
  const track = yield select(s => s.track)
  const { status } = track.id
    ? yield call(endpoints.track.params(track.id).put, track)
    : yield call(endpoints.track.post, track)

  redirect(ROUTE.TRACKS)
}

export default function* () {
  yield all([
    takeLatest(actions.track.fetchAll.request.type, fetchAll),
    takeLatest(actions.track.fetch.request.type, fetch),
    takeLatest(actions.track.submit.request.type, submit)
  ])
}
