import React from 'react'
import { connect } from 'react-redux'
import actions from '../actions'
import { Button, Col, Row, TextInput } from '../components/common'

export default connect(s => ({ user: s.user }))(
  ({ user, dispatch }) => {

    const updateField = field => value => {
      dispatch({ type: actions.user.updateField, field, value })
    }

    return <Col>
      {user.logged ?
        <Button onClick={() => dispatch({ type: actions.user.logout.request })}>
          Logout
        </Button>
        :
        <form>
          <Col>
            <Row>
              <TextInput
                onChange={updateField('email')}
                value={user.email}
                label='email'
                type='email'
                name='email'
                autocomplete='username'
              />
              <TextInput
                onChange={updateField('password')}
                value={user.password}
                label='password'
                type='password'
                name='password'
                autocomplete='current-password'
              />
            </Row>
            <Row>
              <Button onClick={() => dispatch({ type: actions.user.login.request })}>Login</Button>
              <Button onClick={() => dispatch({ type: actions.user.register.request })}>Register</Button>
            </Row>
          </Col>
        </form>}
    </Col>
  })
