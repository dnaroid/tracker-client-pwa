import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import store from './config/store'
import { history } from './helpers/browser'

export default () =>
  <Provider store={store}>
    <Router history={history}>
      <Layout />
    </Router>
  </Provider>
