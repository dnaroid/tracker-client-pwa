import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Icon } from './index'

const Popup = styled.div`
  z-index: 2000;
  overflow: auto;
  ${p => p.center ? `
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);`
  : `
  margin-top: -30px!important;`}
 `
const Cover = styled.div`
  z-index: 1000;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  margin: 0!important;
  opacity: 0.7;
 `

export default ({ trigger, center, children }) => {

  const [active, setActive] = useState(false)

  return <>
    <div onClick={() => setActive(true)}>
      {trigger || <Icon>menu</Icon>}
    </div>
    {active && <>
      <Cover onClick={() => setActive(false)} />
      <Popup onClick={() => setActive(false)} center={center} active={active}>
        {children}
      </Popup>
    </>}
  </>
}
