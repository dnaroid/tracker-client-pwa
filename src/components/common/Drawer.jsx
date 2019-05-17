import React from 'react'
import styled from 'styled-components/macro'

const Content = styled.div`
  z-index: 2000;
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
  z-index: 1000;
  background-color: rgba(127,127,127,0.5);
  opacity: 0.5;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: fixed;
 `

export default ({ active, onClose, children }) => {

  return <>
    {active && <Cover onClick={onClose} />}
    <Content onClick={onClose} active={active}>
      {children}
    </Content>
  </>
}
