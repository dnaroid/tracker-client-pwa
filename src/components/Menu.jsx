import React from 'react'
import { connect } from 'react-redux'
import { ROUTE } from '../config/strings'
import { redirect, redirectBack } from '../helpers/browser'
import { Icon } from './common'

export default connect(s => ({ router: s.router }))(
  ({ dispatch, router: { location } }) => {

    switch(location.pathname) {

    case(ROUTE.TRACKS):
      return <Icon onClick={() => {redirect(ROUTE.TRACK, { trackId: null })}}>add_box</Icon>

    case(ROUTE.TRACK):
      return <>
        <Icon onClick={() => {dispatch()}}>save</Icon>
        <Icon onClick={() => {redirectBack()}}>cancel</Icon>
      </>

    default:
      return null
    }
  })
