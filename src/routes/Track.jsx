import React from 'react'
import { connect } from 'react-redux'
import actions from '../actions'
import { Col, TextInput } from '../components/common'
import Validator from '../components/common/Validator'
import validators from '../helpers/validators'

export default connect(s => ({ track: s.track }))(
  ({ dispatch, track }) => {

    const update = field => value => {
      if (track[field] === value) { return }
      dispatch({ type: actions.track.update, object: { [field]: value } })
    }

    return <Validator onValidate={update('valid')}>
      <Col>
        <TextInput
          onChange={update('number')}
          value={track.number}
          label='track number'
          validator={validators.trackNumber}
        />
        <TextInput
          onChange={update('title')}
          value={track.title}
          label='description'
          multiline
          rows={4}
        />
      </Col>
    </Validator>
  })
