import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
  position: relative;
  height: 30px;
  border: 1px solid currentColor;
  border-radius: 4px;
  width: 100%;
 `
const Input = styled.input`
  line-height: 30px;
  height: 28px;
  background: transparent;
  border: 0;
  width: calc(100%);
  color: inherit;
  padding: 0 8px;
 `
const Label = styled.div`
  position: absolute;
	font-size: 10px;
  top: -6px;
  left: 5px;
  padding: 0 2px;
  text-transform: uppercase;
`

export default ({ value, onChange = () => {}, label, icon, ...attrs }) =>
  <Wrapper>
    <Label>{label}</Label>
    <Input
      {...attrs}
      value={value}
      onChange={e => { onChange(e.target.value) }}
    />
  </Wrapper>
