import React from 'react'
import styled from 'styled-components/macro'
import { ROUTE_ICON, ROUTE_NAME, ROUTE_NEED_AUTH, SIDE_MENU_ITEMS } from '../config/constants'
import { redirect } from '../helpers/browser'
import useSelectors from '../hooks/useSelectors'
import useSwitch from '../hooks/useSwitch'
import { Col, Drawer, Icon, Row } from './common'

export default () => {

  const [user] = useSelectors(s => s.user)
  const [drawerActive, switchDrawer] = useSwitch(false)

  return <>
    <Trigger>
      <Icon onClick={switchDrawer}>menu</Icon>
    </Trigger>

    <Drawer active={drawerActive} onClose={switchDrawer}>
      <nav>
        <Col>
          {SIDE_MENU_ITEMS
            .filter(route => user.logged || !ROUTE_NEED_AUTH[route])
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

const Trigger = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`
const MenuItem = styled.div`
  white-space: nowrap;
`

