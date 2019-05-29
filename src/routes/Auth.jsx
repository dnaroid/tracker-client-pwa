import React from 'react'
import actions from '../actions'
import { Button, Col, Error, TextInput, Validator } from '../components/common'
import validators from '../helpers/validators'
import useActionCreators from '../hooks/useActionCreators'
import useSelectors from '../hooks/useSelectors'

const FIELD = {
  EMAIL: 'email',
  PASSWORD: 'password',
  VALID: 'valid'
}

export default () => {

  const [user] = useSelectors(s => s.user)

  const [update, login, logout, register] = useActionCreators(
    actions.user.update,
    actions.user.login.request,
    actions.user.logout.request,
    actions.user.register.request)

  const updateField = field => value => {
    update({ [field]: value })
  }

  return <Col>
    {user.logged ?
      <Button onClick={logout}> Logout </Button>
      :
      <form>
        <Validator onValidate={updateField(FIELD.VALID)}>
          <Col>
            <Error> {user.error} </Error>
            <TextInput
              onChange={updateField(FIELD.EMAIL)}
              value={user.email}
              validator={validators.email}
              label={FIELD.EMAIL}
              type={FIELD.EMAIL}
              name={FIELD.EMAIL}
              autocomplete='username'
            />
            <TextInput
              onChange={updateField(FIELD.PASSWORD)}
              value={user.password}
              validator={validators.password}
              label={FIELD.PASSWORD}
              type={FIELD.PASSWORD}
              name={FIELD.PASSWORD}
              autocomplete='current-password'
            />
            <Button disabled={!user.valid} onClick={login}> Login </Button>
            <Button disabled={!user.valid} onClick={register}> Register </Button>
          </Col>
        </Validator>
      </form>}
  </Col>
}
