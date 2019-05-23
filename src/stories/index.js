import { action } from '@storybook/addon-actions'
import { forceReRender, storiesOf } from '@storybook/react'
import React from 'react'
import { Button, Col, Icon, Popup, Row, Select } from '../components/common'
import Drawer from '../components/common/Drawer'
import TextInput from '../components/common/TextInput'
import Validator from '../components/common/Validator'
import '../index.css'

storiesOf('Button', module)
  .add('Default', () => <Button onClick={action('clicked')}>Default Button</Button>)
  .add('Disabled', () => <Button disabled onClick={action('clicked')}>Disabled Button</Button>)
  .add('Compact', () => <Button compact onClick={action('clicked')}>Compact Button</Button>)
  .add('No border', () => <Button noBorder onClick={action('clicked')}>No border Button</Button>)

storiesOf('Popup', module)
  .add('default', () => <Popup>content</Popup>)
  .add('center', () => <Popup center>content</Popup>)

const items = ['item1', 'item2', 'item3']
let item = items[0]
const setItem = i => {
  item = i
  forceReRender()
}

storiesOf('Select', module)
  .add('default', () => <Select onChange={setItem} label='item' value={item} items={items}>content</Select>)
  .add('disabled', () => <Select label='item' disabled value={item} items={items}>content</Select>)

const colors = ['red', 'blue', 'green', 'yellow', 'gray', 'magenta', 'brown', 'orange']
let id = 0
const Block = () => <div style={{ height: '30px', width: '100%', background: colors[id++ % colors.length] }} />

storiesOf('Row, Col', module)
  .add('default', () => <Col>
    <Block />
    <Row><Block /><Block /></Row>
    <Row><Block /><Block /></Row>
    <Row>
      <Col> <Row><Block /></Row> <Row><Block /></Row> </Col>
      <Col> <Row><Block /><Block /></Row> <Row><Block /><Block /></Row> </Col>
      <Col> <Row><Block /></Row> <Row><Block /></Row> </Col>
    </Row>
    <Block />
  </Col>)

let drawerActive = false
const toggleDrawer = i => {
  drawerActive = !drawerActive
  forceReRender()
}
storiesOf('Drawer', module)
  .add('default', () => <>
    <button onClick={toggleDrawer}>Toggle</button>
    <Drawer active={drawerActive} onClose={toggleDrawer}>content</Drawer>
  </>)

let text = 'text'
let valid = false
const updateText = v => {
  text = v
  forceReRender()
}
const lengthValidator = v => v.length < 6 && '6 or more chars'
storiesOf('TextInput', module)
  .add('default', () => <TextInput value={text} label='text' onChange={updateText} />)
  .add('With Icon', () => <TextInput value={text} label='text' onChange={updateText} icon={<Icon>search</Icon>} />)
  .add('Multiline', () => <TextInput value={text} label='text' onChange={updateText} rows={6} />)
  .add('Disabled', () => <TextInput value={text} label='text' onChange={updateText} disabled />)
  .add('With Clear action', () => <TextInput value={text} label='text' onChange={updateText} withClear />)
  .add('Focus', () => <Col>
    <TextInput value={text} label='text' onChange={updateText} />
    <TextInput value={text} label='text' onChange={updateText} focus />
    <TextInput value={text} label='text' onChange={updateText} />
  </Col>)
  .add('Validation', () => <TextInput
    value={text} label='password' type='password' onChange={updateText}
    validator={lengthValidator}
  />)
  .add('Mass Validation', () => <Validator
    onValidate={v => {
      valid = v
      forceReRender()
    }}
  >
    <Col>
      <TextInput value={text} label='text' onChange={updateText} validator={lengthValidator} />
      <TextInput value={text} label='text' onChange={updateText} validator={lengthValidator} />
      <TextInput value={text} label='text' onChange={updateText} validator={lengthValidator} />
      <Button disabled={!valid}>Submit</Button>
    </Col>
  </Validator>)
