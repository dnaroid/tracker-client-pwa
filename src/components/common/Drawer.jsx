import React from 'react'
import styled from 'styled-components/macro'

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
const Cover = styled.div`
  z-index: 2500;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  opacity: 0.7;
 `

export default ({ active, onClose, children }) => {

  return <>
    {active &&
     <Cover onClick={onClose} />}
    <Content onClick={onClose} active={active}>
      {children}
    </Content>
  </>
}
