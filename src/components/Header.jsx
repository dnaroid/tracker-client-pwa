import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { ROUTE } from '../config/strings'
import { Col, Drawer, Icon, Row } from './common'

export default withRouter(({ history, location }) => {

  const [drawerActive, setDrawerActive] = useState(false)

  const toggleDrawer = () => {
    setDrawerActive(!drawerActive)
  }

  const redirect = route => () => {
    history.push(route)
  }

  return <>
    <Row>
      <Icon onClick={toggleDrawer}>menu</Icon>
      {location.pathname}
    </Row>

    <Drawer active={drawerActive} onClose={toggleDrawer}>
      <nav>
        <Col>
          <br />
          <div onClick={redirect(ROUTE.Account)}>Authorize</div>
          <div onClick={redirect(ROUTE.Settings)}>Settings</div>
          <div onClick={redirect(ROUTE.Tracks)}>Tracks</div>
        </Col>
      </nav>
    </Drawer>
  </>
})

