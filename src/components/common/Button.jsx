import React, { useRef, useState } from 'react'
import styled from 'styled-components/macro'
import { redirect } from '../../helpers/browser'
import { Icon } from './index'

export default ({ compact, disabled, noBorder, onClick, linkTo, action, icon, noDebounce, children }) => {

  const ref = useRef(null)
  const [active, setActive] = useState(true)

  const clickHandler = () => {
    if (linkTo) { redirect(linkTo) } else { onClick && onClick(action) }
    if (noDebounce) { return}
    setActive(false)
    setTimeout(() => setActive(true), 2000)
  }

  return <Wrapper
    compact={compact}
    disabled={disabled || !active}
    noBorder={noBorder}
    onClick={clickHandler}
    ref={ref}
  >
    {icon ? <Icon>{icon}</Icon> : children}
  </Wrapper>
}

export const Wrapper = styled.div`
  :hover { opacity: 0.5; }
  height: 30px;
  line-height: 30px;
  border-radius: 4px;
  text-align: center;
  user-select: none;
  width: ${p => p.compact && 'fit-content'};
  ${p => p.disabled && 'pointer-events: none; opacity: 0.3;'}
  ${p => (p.icon || p.noBorder) && 'padding: 0 10px;  border: 1px solid currentColor;'}
`
