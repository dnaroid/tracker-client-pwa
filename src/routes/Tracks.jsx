import React, { useEffect } from 'react'
import actions from '../actions'
import { Button, Col, Text, TopMenu } from '../components/common'
import { ROUTE } from '../config/constants'
import { redirect } from '../helpers/browser'
import useActionCreators from '../hooks/useActionCreators'
import useSelectors from '../hooks/useSelectors'

export default () => {

  const [track] = useSelectors(s => s.track)

  const [fetchAll, setCurrentId] = useActionCreators(actions.track.fetchAll.request, actions.track.setCurrentId)

  useEffect(() => {
    fetchAll()
  }, [])

  const selectTrack = track => {
    setCurrentId(track.id)
    redirect(ROUTE.TRACK, track)
  }

  return <>
    <TopMenu>
      <Button linkTo={ROUTE.TRACK} icon='add_box'/>
    </TopMenu>
    <Col>
      {Object.values(track.all).map(track =>
        <div key={track.id} onClick={() => selectTrack(track)}>
          <Text big> {track.number} </Text><br/>
          <Text small> {track.title} </Text>
        </div>)}
    </Col>
  </>
}
