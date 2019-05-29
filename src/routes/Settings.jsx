import React from 'react'
import actions from '../actions'
import { Col, Select } from '../components/common'
import { THEME } from '../config/constants'
import useActionCreators from '../hooks/useActionCreators'
import useSelectors from '../hooks/useSelectors'

export default () => {

  const [settings] = useSelectors(s => s.settings)

  const [setTheme] = useActionCreators(actions.settings.setTheme)

  return <Col>
    <Select
      label='Theme'
      items={Object.values(THEME)}
      value={settings.theme}
      onChange={setTheme}
    />
  </Col>
}

