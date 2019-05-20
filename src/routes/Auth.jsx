import React, { useState } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'
import { Button, Col, TextInput } from '../components/common'

export default connect(s => ({ user: s.user }))(
  ({ user, dispatch }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
      dispatch({ type: actions.user.login.request, email, password })
    }
    const register = () => {
      dispatch({ type: actions.user.register.request, email, password })
    }

    return <Col>
      {user.logged ?
        <Button onClick={() => dispatch({ type: actions.user.logout.request })}>
          Logout
        </Button>
        :
        <form>
          <Col>
            <TextInput
              onChange={setEmail}
              value={email}
              label='email'
              type='email'
              name='email'
              autocomplete='username'
            />
            <TextInput
              onChange={setPassword}
              value={password}
              label='password'
              type='password'
              name='password'
              autocomplete='current-password'
            />
            <Button onClick={login}>Login</Button>
            <Button link onClick={register}>Register</Button>
          </Col>
        </form>}
    </Col>
  })
