import React from 'react'
import styled from 'styled-components/macro'
import { Card, Icon } from './index'
import Popup from './Popup'

const Wrapper = styled.div`
  position: relative;
  height: 30px;
  border: 1px solid currentColor;
  border-radius: 4px;
 `
const Value = styled.div`
  line-height: 28px;
  padding: 0 8px;
  :hover { opacity: 0.5; }
  background-color: transparent;
 `
export const Item = styled.div`
  position: relative;
  white-space: nowrap;
  padding: 20px 20px 20px 30px;
  :hover { opacity: 0.5; }
 `
const Check = styled.div`
  position: absolute;
  margin-left: -38px;
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
const CardLabel = styled.div`
  position: absolute;
	font-size: 10px;
  margin-top: -26px;
  margin-left: -15px;
  padding: 0 2px;
  text-transform: uppercase;
`

export default ({ items, value, label, onChange }) =>
  <Popup
    trigger={
      <Wrapper>
        <Value>
          {value}
          <Caret><Icon>expand_more</Icon></Caret>
        </Value>
        <Label>{label}</Label>
      </Wrapper>
    }
  >
    <Card>
      <CardLabel>{label}</CardLabel>
      {items.map(item =>
        <Item
          key={item}
          onClick={() => {onChange && onChange(item)}}
        >
          {item === value && <Check><Icon>check</Icon></Check>}
          {item}
        </Item>)}
    </Card>
  </Popup>
