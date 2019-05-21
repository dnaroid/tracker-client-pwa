import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Col, TextInput } from '../components/common'

export default connect()(
  ({ track, updateTrackProp, submitTrack }) => {

    const [number, setNumber] = useState('')
    const [title, setTitle] = useState('')

    return <div>
      <Col>
        <TextInput
          onChange={setNumber}
          value={number}
          label='track number'
        />
        <TextInput
          onChange={setTitle}
          value={title}
          label='description'
          multiline
          rows={4}
        />
      </Col>
    </div>
  })
