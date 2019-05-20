import React from 'react'
import { connect } from 'react-redux'
import actions from '../actions'
import { Col, Select } from '../components/common'
import { THEME } from '../config/strings'

export default connect(s => ({ settings: s.settings }))(
  ({ dispatch, settings }) => <Col>
    <Select
      label='Theme'
      items={Object.values(THEME)}
      value={settings.theme}
      onChange={theme => {dispatch({ type: actions.settings.setTheme, theme })}}
    />
  </Col>)

