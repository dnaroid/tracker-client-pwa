import React from 'react'
import styled from 'styled-components/macro'
import { Z_INDEX } from '../../config/constants'
import useSwitch from '../../hooks/useSwitch'
import { Cover } from './index'

export default ({ items, value, label, disabled, onChange = () => {} }) => {

  const [active, toggle] = useSwitch(false)

  return <>
    <Wrapper disabled={disabled} active={active} label={label}>
      {active ?
        items.map(item =>
          <Item
            key={item}
            onClick={() => {
              toggle(false)
              onChange(item)
            }}
            selected={item === value}
          >
            {item}
          </Item>)
        :
        <Value onClick={() => toggle(true)}>
          {value}
        </Value>}
    </Wrapper>
    {active && <Cover onClick={() => toggle(false)} />}
  </>
}

const Wrapper = styled.div`
  position: relative;
  border: 1px solid currentColor;
  border-radius: 4px;
  :before {
    content: "${p => p.label}";
    position: absolute;
    font-size: 10px;
    top: -8px;
    left: 5px;
    padding: 0 2px;
    text-transform: uppercase;
    background-color: inherit;
  }
  ${p => p.disabled && 'pointer-events: none; opacity: 0.3;'}
  ${p => p.active && `z-index: ${Z_INDEX.POPUP};`}
 `
const Value = styled.div`
  line-height: 28px;
  padding: 0 8px;
  background-color: transparent;
  :hover { opacity: 0.5; }
  :after {
    position: absolute;
    content: 'expand_more';
    font-family: 'Material Icons';
    right: 4px;
  }
 `
export const Item = styled.div`
  position: relative;
  white-space: nowrap;
  padding: 20px 20px 20px 30px;
  background-color: transparent;
  :hover { opacity: 0.5; }
  ${p => p.selected && `
  :before {
    position: absolute;
    content: 'check';
    font-family: 'Material Icons';
    left: 10px;
  }`}
`
