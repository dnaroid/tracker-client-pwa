import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import store from './config/store'

const supportsHistory = 'pushState' in window.history

export default () =>
  <Provider store={store}>
    <Router forceRefresh={!supportsHistory}>
      <Layout />
    </Router>
  </Provider>
