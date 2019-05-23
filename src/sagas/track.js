import { all, call, select, takeLatest } from 'redux-saga/effects'
import actions from '../actions'
import endpoints from '../config/endpoints'
import { ROUTE } from '../config/strings'
import { redirect } from '../helpers/browser'

function* submit() {
  const track = yield select(s => s.track)
  const { status } = yield call(endpoints.track.post, track)
  redirect(ROUTE.TRACKS)
}

export default function* () {
  yield all([
    takeLatest(actions.track.submit.request, submit)
  ])
}
