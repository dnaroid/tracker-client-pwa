import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'
import Routes from '../routes'
import { Main } from './common'
import Header from './Header'
import SideBar from './SideBar'

export default connect(s => ({ user: s.user }))(
  ({ user, dispatch }) => {

    useEffect(() => {
      dispatch({ type: actions.settings.initApp.request })
    }, [])

    return <>
      <Header user={user} />
      <SideBar user={user} />
      <Main>
        <Routes user={user} />
      </Main>
    </>
  })
