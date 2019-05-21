import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Col } from '../components/common'

export default connect()(() => {

  useEffect(() => {
    //syncTracks()
  }, [])

  return (
    <Col>
      TRACKS
    </Col>
  )

})
