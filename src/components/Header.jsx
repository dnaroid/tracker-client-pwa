import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
  margin-left: 40px;
  height: 30px;
  line-height: 30px;
  align-items: center;
 `

export default ({ user: { logged } }) => {

  return <Wrapper>
    HEADER
  </Wrapper>
}

