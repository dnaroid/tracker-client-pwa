import React from 'react'
import styled from 'styled-components/macro'
import { Z_INDEX } from '../../config/constants'
import useSwitch from '../../hooks/useSwitch'
import { Cover, Icon } from './index'

export default ({ trigger, center, children }) => {

  const [active, toggle] = useSwitch(false)

  return <>
    <div onClick={() => toggle(true)}>
      {trigger || <Icon>menu</Icon>}
    </div>
    {active && <>
      <Content onClick={() => toggle(false)} center={center} active={active}>
        {children}
      </Content>
      <Cover onClick={() => toggle(false)} />
    </>}
  </>
}

const Content = styled.div`
  z-index: ${Z_INDEX.POPUP};
  overflow: auto;
  transition: .25s ease-in-out;
  position: fixed;
  ${p => p.center && `
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);`}
`
