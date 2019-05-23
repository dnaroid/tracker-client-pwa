import React from 'react'
import styled from 'styled-components/macro'
import { Cover } from './index'

export default ({ active, onClose, children }) =>
  <>
    {active &&
     <Cover onClick={onClose} />}
    <Content onClick={onClose} active={active}>
      {children}
    </Content>
  </>

const Content = styled.div`
  z-index: 3000;
  position: fixed;
  overflow: auto;
  top: 0;
  left: ${({ active }) => active ? '0' : '-100%'};
  bottom: 0;
  border: 1px solid currentColor;
  padding: 20px;
  overflow-x: hidden;
  transition: .25s ease-in-out;
 `
