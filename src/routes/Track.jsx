import React, { useEffect } from 'react'
import actions from '../actions'
import { Button, Col, TextInput, TopMenu } from '../components/common'
import Validator from '../components/common/Validator'
import { ROUTE } from '../config/constants'
import validators from '../helpers/validators'
import useActionCreators from '../hooks/useActionCreators'
import useInput from '../hooks/useInput'
import useRouter from '../hooks/useRouter'
import useSelectors from '../hooks/useSelectors'

export default () => {

  const [track] = useSelectors(s => s.track)

  const trackError = validators.trackNumber(track.number)

  const number = useInput(track.number, validators.trackNumber)
  const title = useInput(track.title)

  const { match: { params } } = useRouter()

  const [clear, fetch, update, remove, submit] = useActionCreators(
    actions.track.clear,
    actions.track.fetch.request,
    actions.track.delete.request,
    actions.track.submit.request
  )

  useEffect(() => {
    if (params.id === 'new') { clear() } else { fetch(params.id) }
  }, [])

  return <Validator onValidate={console.log}>
    <TopMenu>
      <Button
        disabled={!track.id}
        onClick={remove}
        icon='delete'
      />
      <Button
        disabled={trackError}
        onClick={submit}
        icon='save'
      />
      <Button
        icon='arrow_back'
        linkTo={ROUTE.TRACKS}
      />
    </TopMenu>

    <Col>
      <TextInput
        {...number}
        error={trackError}
        label='track number'
        validator={validators.trackNumber}
      />
      <TextInput
        {...title}
        label='description'
        multiline
        rows={4}
      />
    </Col>
  </Validator>
}

