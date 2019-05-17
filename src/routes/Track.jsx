import React from 'react'
import { connect } from 'react-redux'
import { Button } from '../components/common'

export default connect()(
  ({ track, updateTrackProp, submitTrack }) => <div>
    <div>
      {/*<TextInput*/}
      {/*  onChange={v => updateTrackProp('number', v)}*/}
      {/*  value={track.number}*/}
      {/*  label='number'*/}
      {/*/>*/}
      {/*<TextInput*/}
      {/*  onChange={v => updateTrackProp('title', v)}*/}
      {/*  value={track.title}*/}
      {/*  label='title'*/}
      {/*/>*/}
    </div>
    <div>
      <Button onClick={submitTrack}>Create</Button>
      <Button onClick={console.log}>Cancel</Button>
    </div>
  </div>)
