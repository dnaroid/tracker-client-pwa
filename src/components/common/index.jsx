import styled from 'styled-components/macro'

export { default as Drawer } from './Drawer'
export { default as Popup } from './Popup'
export { default as Select } from './Select'
export { default as TextInput } from './TextInput'

export const Main = styled.main`
  width: 100%;
  padding: 20px;
`

export const Card = styled.div`
  padding: 20px;
  border: 1px solid currentColor;
  border-radius: 4px;
`

export const Button = styled.div`
  line-height: 30px;
  padding: 0 10px;
  border: 1px solid currentColor;
  border-radius: 4px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${p => p.start ? 'flex-start' : `space-between;
  > div { width: 100%; }`}; 
  > div { margin-left: 20px; } 
  > div:first-child { margin-left: 0; }
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div { margin-top: 20px; } 
  > div:first-child { margin-top: 0; } 
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
