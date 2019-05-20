import React, { useState } from 'react'

import styled from 'styled-components/macro'
import { ROUTE } from '../config/strings'
import { redirect } from '../helpers/browser'
import { Col, Drawer, Icon, Row } from './common'

const Trigger = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`
const MenuItem = styled.div`
  white-space: nowrap;
`

export default ({ user: { logged } }) => {

  const [drawerActive, setDrawerActive] = useState(false)

  const toggleDrawer = () => {
    setDrawerActive(!drawerActive)
  }

  const go = route => () => {
    redirect(route)
  }

  return <>
    <Trigger>
      <Icon onClick={toggleDrawer}>menu</Icon>
    </Trigger>

    <Drawer active={drawerActive} onClose={toggleDrawer}>
      <nav>
        <Col>

          <Row start onClick={go(ROUTE.AUTH)}>
            <Icon>account_circle</Icon>
            <MenuItem>Authorize</MenuItem>
          </Row>

          <Row start onClick={go(ROUTE.SETTINGS)}>
            <Icon>settings</Icon>
            <MenuItem>Settings</MenuItem>
          </Row>

          {logged &&
           <Row start onClick={go(ROUTE.TRACKS)}>
             <Icon>view_list</Icon>
             <MenuItem>My Tracks</MenuItem>
           </Row>}

        </Col>
      </nav>
    </Drawer>
  </>
}

