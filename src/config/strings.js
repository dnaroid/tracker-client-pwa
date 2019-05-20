export const GLOBAL = window

export const DEVELOPMENT = GLOBAL && GLOBAL.location.hostname === 'localhost'

export const ROUTE = {
  AUTH: '/auth',
  TRACKS: '/',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  TRACK: '/track'
}

export const THEME = {
  DARK: 'dark',
  LIGHT: 'light'
}

export const THEME_STYLE = {
  [THEME.DARK]: 'background-color: black; color: white;',
  [THEME.LIGHT]: 'background-color: white; color: black;'
}

export const TOKEN = 'token'

export const STATUS = {
  SUCCESS: 'success',
  FAIL: 'fail'
}
