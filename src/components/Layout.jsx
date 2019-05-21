import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import actions from '../actions'
import Routes from '../routes'
import { Main } from './common'
import Header from './Header'
import SideBar from './SideMenu'

export default withRouter(connect(s => ({ user: s.user, router: s.router }))(
  ({ dispatch, user, router, location }) => {

    useEffect(() => {
      dispatch({ type: actions.settings.initApp.request })
    }, [])

    useEffect(() => {
      if (!router.location || router.location.pathname !== location.pathname) {
        dispatch({ type: actions.router.updateLocation, location })
      }
    }, [location.pathname])

    return <>
      <Header user={user} location={location} />
      <SideBar user={user} />
      <Main>
        <Routes user={user} />
      </Main>
    </>
  }))
