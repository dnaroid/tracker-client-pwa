import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
  position: relative;
  height: ${p => !p.multiline && '30px'};
  border: 1px solid currentColor;
  border-radius: 4px;
  width: 100%;
 `
const inputStyle = `
  background: transparent;
  border: 0;
  width: calc(100%);
  color: inherit;
  padding: 0 8px;
 `
const Input = styled.input`
  line-height: 30px;
  height: 28px;
  ${inputStyle}
`

const TextArea = styled.textarea`
  line-height: 24px;
  ${inputStyle}
`

const Label = styled.div`
  position: absolute;
	font-size: 10px;
  top: -6px;
  left: 5px;
  padding: 0 2px;
  text-transform: uppercase;
`

export default ({ value, onChange = () => {}, multiline, label, icon, ...attrs }) =>
  <Wrapper multiline={multiline}>
    <Label>{label}</Label>
    {multiline ?
      <TextArea
        {...attrs}
        value={value}
        onChange={e => { onChange(e.target.value) }}
      />
      :
      <Input
        {...attrs}
        value={value}
        onChange={e => { onChange(e.target.value) }}
      />}
  </Wrapper>
