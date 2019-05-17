export const GLOBAL = window

export const DEVELOPMENT = GLOBAL && GLOBAL.location.hostname === 'localhost'

export const ROUTE = {
  Account: '/auth',
  Tracks: '/',
  Profile: '/profile',
  Settings: '/settings',
  Track: '/track'
}

export const THEME = {
  DARK: 'dark',
  LIGHT: 'light'
}

export const THEME_STYLE = {
  [THEME.DARK]: 'background-color: black; color: white;',
  [THEME.LIGHT]: 'background-color: white; color: black;'
}
