import React, { useEffect, useRef } from 'react'
import styled from 'styled-components/macro'
import { COLOR } from '../../config/strings'
import { Icon } from './index'

export default ({
                  value,
                  rows,
                  label,
                  focus,
                  icon,
                  withClear,
                  disabled,
                  onChange = () => {},
                  validator = () => false,
                  ...attrs
                }) => {

  const inputRef = useRef(null)

  useEffect(() => {
    focus && inputRef.current.focus()
  }, [])

  const selectAll = () => {
    inputRef.current.select()
  }

  const clear = () => {
    onChange('')
    inputRef.current.focus()
  }

  const error = value !== '' && validator(value)

  return <Wrapper multiline={rows} disabled={disabled} label={label} error={error} data-error={!!error}>
    {icon && <InnerIcon>{icon}</InnerIcon>}
    {rows ?
      <TextArea
        {...attrs}
        ref={inputRef}
        onClick={selectAll}
        rows={rows}
        value={value}
        onChange={e => { onChange(e.target.value) }}
      />
      :
      <Input
        {...attrs}
        ref={inputRef}
        value={value}
        onClick={selectAll}
        onChange={e => { onChange(e.target.value) }}
      />}
    {(withClear && !rows) &&
     <ClearIcon onClick={clear}><Icon>cancel</Icon></ClearIcon>}
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: ${p => !p.multiline && '30px'};
  border: 1px solid currentColor;
  border-radius: 4px;
  width: 100%;
  ${p => p.disabled && 'pointer-events: none; opacity: 0.3;'}
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
  :after {
    content: "${p => p.error}";
    position: absolute;
    font-size: 10px;
    bottom: -8px;
    left: 5px;
    padding: 0 2px;
    text-transform: uppercase;
    color: ${COLOR.ERROR};
    background-color: inherit;
  }
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
  min-width: 100%;
  line-height: 24px;
  ${inputStyle}
`
const InnerIcon = styled.span`
  margin-left: 5px;
  > div	{ 
    font-size: 20px;
    line-height: 30px;
  }
`
const ClearIcon = styled.span`
  margin-right: 5px;
  > div	{ 
    font-size: 20px;
    line-height: 30px;
  }
`
