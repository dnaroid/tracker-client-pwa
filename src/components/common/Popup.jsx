import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Icon } from './index'

const Popup = styled.div`
  z-index: 2000;
  position: fixed;
  overflow: auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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

export default ({ trigger, children }) => {

  const [active, setActive] = useState(false)

  return <>
    <div onClick={() => setActive(true)}>
      {trigger || <Icon>menu</Icon>}
    </div>
    {active &&
     <div>
       <Cover onClick={() => setActive(false)} />
       <Popup onClick={() => setActive(false)}>
         {children}
       </Popup>
     </div>}
  </>
}
