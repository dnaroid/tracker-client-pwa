import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { ROUTE_ICON, ROUTE_NAME, ROUTE_NEED_AUTH, SIDE_MENU_ITEMS } from '../config/strings'
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

  return <>
    <Trigger>
      <Icon onClick={toggleDrawer}>menu</Icon>
    </Trigger>

    <Drawer active={drawerActive} onClose={toggleDrawer}>
      <nav>
        <Col>

          {SIDE_MENU_ITEMS
            .filter(route => logged || !ROUTE_NEED_AUTH[route])
            .map(route =>
              <Row key={route} start onClick={() => redirect(route)}>
                <Icon>{ROUTE_ICON[route]}</Icon>
                <MenuItem>{ROUTE_NAME[route]}</MenuItem>
              </Row>
            )}

        </Col>
      </nav>
    </Drawer>
  </>
}

