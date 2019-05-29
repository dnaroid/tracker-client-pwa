import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import Layout from './components/Layout'
import { LOCAL_STORAGE, THEME } from './config/constants'
import store from './config/store'
import { history, loadObject, updateTheme } from './helpers/browser'

const settings = loadObject(LOCAL_STORAGE.SETTINGS)
updateTheme(settings.theme || THEME.LIGHT)

export default () =>
  <Provider store={store}>
    <Router history={history}>
      <Layout/>
    </Router>
  </Provider>
