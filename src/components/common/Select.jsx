import React from 'react'
import styled from 'styled-components/macro'
import { Card, Icon } from './index'
import Popup from './Popup'

const Wrapper = styled.div`
  position: relative;
  height: 30px;
  border: 1px solid currentColor;
 `
const Value = styled.div`
  line-height: 28px;
  padding: 0 8px;
  :hover { opacity: 0.5; }
 `
export const Item = styled.div`
  white-space: nowrap;
  padding: 30px;
  :hover { opacity: 0.5; }
 `
const Check = styled.span`
  position: absolute;
  left: 12px;
  margin-top: -5px;
 `
const Caret = styled.span`
  position: absolute;
  right: 0;
 `
const Label = styled.div`
  position: absolute;
	font-size: 10px;
  top: -6px;
  left: 5px;
  padding: 0 2px;
  text-transform: uppercase;
`

export default ({ items, value, label, onChange }) =>
  <Popup
    trigger={
      <Wrapper> <Value>
        {value}
        <Caret><Icon>expand_more</Icon></Caret>
      </Value>
        <Label>{label}</Label>
      </Wrapper>
    }
  >
    <Card>
      {items.map(item =>
        <Item onClick={() => {onChange && onChange(item)}}>
          {item === value && <Check><Icon>check</Icon></Check>}
          {item}
        </Item>)}
    </Card>
  </Popup>
