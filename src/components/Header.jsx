import React from 'react'
import styled from 'styled-components/macro'
import { ROUTE_NAME } from '../config/strings'
import { Expander, Row } from './common'
import Menu from './Menu'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 35px;
  right: 0;
  height: 30px;
  line-height: 30px;
  align-items: center;
`

export default ({ location: { pathname } }) => {

  return <Wrapper>
    <Row>
      <Expander>{ROUTE_NAME[pathname]}</Expander>
      <Menu />
    </Row>
  </Wrapper>
}

