import React from 'react'
import { connect } from 'react-redux'
import actions from '../actions'
import { ROUTE } from '../config/strings'
import { redirect, redirectBack } from '../helpers/browser'
import { Button, Icon } from './common'

export default connect(s => ({ router: s.router, track: s.track }))(
  ({ dispatch, track, router: { location } }) => {

    switch(location.pathname) {

    case(ROUTE.TRACKS):
      return <Icon onClick={() => {redirect(ROUTE.TRACK, { trackId: null })}}>add_box</Icon>

    case(ROUTE.TRACK):
      return <>

        <Button
          noBorder
          disabled={!track.valid}
          onClick={() => {dispatch({ type: actions.track.submit.request })}}
        >
          <Icon>save</Icon>
        </Button>

        <Button noBorder><Icon onClick={() => {redirectBack()}}>cancel</Icon></Button>
      </>

    default:
      return null
    }
  })
