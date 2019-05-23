import styled from 'styled-components/macro'
import { COLOR, TEXT_SIZE } from '../../config/strings'

export { default as Drawer } from './Drawer'
export { default as Popup } from './Popup'
export { default as Select } from './Select'
export { default as TextInput } from './TextInput'
export { default as Validator } from './Validator'

export const Main = styled.main`
  width: 100%;
  margin-top: 30px;
  padding: 20px;
  min-height: calc(100vh - 30px);
`

export const Card = styled.div`
  padding: 20px;
  border: 1px solid currentColor;
  border-radius: 4px;
`

export const Button = styled.div`
  :hover { opacity: 0.5; }
  height: 30px;
  line-height: 30px;
  border-radius: 4px;
  text-align: center;
  user-select: none;
  width: ${p => p.compact && 'fit-content'};
  ${p => p.disabled && 'pointer-events: none; opacity: 0.3;'}
  ${p => !p.noBorder && 'padding: 0 10px;  border: 1px solid currentColor;'}
`

export const Expander = styled.div`
  flex: 2;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${p => p.start ? 'flex-start' : `space-between;`}; 
  > :not(:first-of-type) { margin-left: 20px; } 
`

export const Col = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  > :not(:first-of-type) { margin-top: 20px; } 
`

export const Icon = styled.div`
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 30px;
  line-height: 1;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
`

export const Cover = styled.div`
  display: block;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  margin: 0!important;
  opacity: 0.7;
  z-index: 1000;
 `

export const Error = styled.div`
  color: ${COLOR.ERROR};
`

export const Text = styled.span`
  font-size: ${({ big, small }) => big && TEXT_SIZE.BIG || small && TEXT_SIZE.SMALL}px;
`
