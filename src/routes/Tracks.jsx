import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'
import { Col, Text } from '../components/common'
import { ROUTE } from '../config/strings'
import { redirect } from '../helpers/browser'

export default connect(s => ({ tracks: s.tracks }))(
  ({ dispatch, tracks }) => {

    useEffect(() => {
      dispatch({ type: actions.tracks.fetch.request })
    }, [])

    const goToTrack = track => {
      dispatch({ type: actions.track.update, object: track })
      redirect(`${ROUTE.TRACK}/${track.id}`)
    }

    return <Col>

      {Object.values(tracks).map(t =>
        <div key={t.id} onClick={() => goToTrack(t)}>
          <Text big> {t.number} </Text><br />
          <Text small> {t.title} </Text>
        </div>)}

    </Col>
  })
