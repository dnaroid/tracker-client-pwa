import React from 'react'
import { Col, Select } from '../components/common'

export default () =>
  <Col>
    <Select
      label='Theme'
      items={[1, 2, 3, 4, 5]}
      //value={settings.theme}
      //onChange={setTheme}
    />
  </Col>
