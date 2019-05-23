import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Cover, Icon } from './index'

export default ({ trigger, center, children }) => {

  const [active, setActive] = useState(false)

  return <>
    <div onClick={() => setActive(true)}>
      {trigger || <Icon>menu</Icon>}
    </div>
    {active && <>
      <Content onClick={() => setActive(false)} center={center} active={active}>
        {children}
      </Content>
      <Cover onClick={() => setActive(false)} />
    </>}
  </>
}

const Content = styled.div`
  z-index: 2000;
  overflow: auto;
  transition: .25s ease-in-out;
  position: fixed;
  ${p => p.center && `
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);`}
`
