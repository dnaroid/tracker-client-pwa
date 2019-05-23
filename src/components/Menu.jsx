import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import actions from '../actions'
import { ROUTE } from '../config/strings'
import { redirect } from '../helpers/browser'
import { Button, Icon } from './common'

export default connect(s => ({ track: s.track }))(
  ({ dispatch, track }) => <Switch>

    <Route exact path={ROUTE.AUTH} component={null} />

    <Route exact path={`${ROUTE.TRACK}/:id`}>
      <>
        <Button
          noBorder
          disabled={!track.valid}
          onClick={() => {dispatch({ type: actions.track.submit.request })}}
        >
          <Icon>save</Icon>
        </Button>

        <Button noBorder><Icon onClick={() => {redirect(ROUTE.TRACKS)}}>arrow_back</Icon></Button>
      </>
    </Route>

    <Route exact path={ROUTE.TRACKS}>
      <Icon onClick={() => {redirect(`${ROUTE.TRACK}/new`)}}>add_box</Icon>
    </Route>

    <Route exact path={ROUTE.SETTINGS} component={null} />

  </Switch>)

/*

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

    <Button noBorder><Icon onClick={() => {redirectBack()}}>arrow_back</Icon></Button>
  </>

default:
  return null
}*/
