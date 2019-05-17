import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'
import { Main } from './common'
import Header from './Header'
import Router from './Router'

export default connect()(
  ({ dispatch }) => {

    useEffect(() => {
      dispatch({ type: actions.settings.initApp.request })
    }, [])

    return <>
      <Header />
      <Main>
        <Router />
      </Main>
    </>
  })
