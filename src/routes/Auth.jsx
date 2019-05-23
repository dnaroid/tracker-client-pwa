import React from 'react'
import { connect } from 'react-redux'
import actions from '../actions'
import { Button, Col, Error, TextInput, Validator } from '../components/common'
import validators from '../helpers/validators'

const FIELD = {
  EMAIL: 'email',
  PASSWORD: 'password',
  VALID: 'valid'
}

export default connect(s => ({ user: s.user }))(
  ({ user, dispatch }) => {

    const update = field => value => {
      dispatch({ type: actions.user.update, object: { [field]: value } })
    }

    const login = () => {
      dispatch({ type: actions.user.login.request })
    }

    const register = () => {
      dispatch({ type: actions.user.register.request })
    }

    return <Col>
      {user.logged ?
        <Button onClick={() => dispatch({ type: actions.user.logout.request })}>
          Logout
        </Button>
        :
        <form>
          <Validator onValidate={update(FIELD.VALID)}>
            <Col>
              <Error> {user.error} </Error>
              <TextInput
                onChange={update(FIELD.EMAIL)}
                value={user.email}
                validator={validators.email}
                label={FIELD.EMAIL}
                type={FIELD.EMAIL}
                name={FIELD.EMAIL}
                autocomplete='username'
              />
              <TextInput
                onChange={update(FIELD.PASSWORD)}
                value={user.password}
                validator={validators.password}
                label={FIELD.PASSWORD}
                type={FIELD.PASSWORD}
                name={FIELD.PASSWORD}
                autocomplete='current-password'
              />
              <Button disabled={!user.valid} onClick={login}>Login</Button>
              <Button disabled={!user.valid} onClick={register}>Register</Button>
            </Col>
          </Validator>
        </form>}
    </Col>
  })
