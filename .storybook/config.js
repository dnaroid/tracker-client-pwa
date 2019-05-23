import { addDecorator, addParameters, configure, forceReRender } from '@storybook/react'
import React from 'react'

addParameters({ viewport: { defaultViewport: 'iphonex' } })

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)

const style = {
  height: 'calc(100vh - 40px)',
  padding: '20px',
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`
}

const styleByTheme = {
  dark: { backgroundColor: 'black', color: 'white' },
  light: { backgroundColor: 'white', color: 'black' }
}

const LS_THEME = 'story-book-theme'
var theme = localStorage.getItem(LS_THEME) || 'dark'

const setTheme = t => {
  localStorage.setItem(LS_THEME, t)
  theme = t
  forceReRender()
}

addDecorator(fn => <div style={{ ...styleByTheme[theme], ...style }}>
  <div style={{ position: 'absolute', margin: '-20px', color: 'red', background: 'transparent', cursor: 'pointer' }}>
    <span onClick={() => setTheme('light')}>Light</span>/
    <span onClick={() => setTheme('dark')}>Dark</span>
  </div>
  {fn()}
</div>)
