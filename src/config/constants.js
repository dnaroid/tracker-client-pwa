export const GLOBAL = window

export const DEVELOPMENT = GLOBAL && GLOBAL.location.hostname === 'localhost'

export const TEXT_SIZE = {
  BIG: 24,
  DEFAULT: 16,
  SMALL: 12
}

export const ROUTE = {
  AUTH: '/auth',
  TRACKS: '/',
  SETTINGS: '/settings',
  TRACK: '/track'
}

export const ROUTE_NAME = {
  [ROUTE.AUTH]: 'Account',
  [ROUTE.TRACKS]: 'My Tracks',
  [ROUTE.SETTINGS]: 'Settings',
  [ROUTE.TRACK]: 'Edit Track'
}

export const ROUTE_ICON = {
  [ROUTE.AUTH]: 'account_box',
  [ROUTE.TRACKS]: 'view_list',
  [ROUTE.SETTINGS]: 'settings',
  [ROUTE.TRACK]: 'picture_in_picture'
}

export const ROUTE_NEED_AUTH = {
  [ROUTE.AUTH]: false,
  [ROUTE.TRACKS]: true,
  [ROUTE.SETTINGS]: false,
  [ROUTE.TRACK]: false
}

export const SIDE_MENU_ITEMS = [ROUTE.TRACKS, ROUTE.SETTINGS, ROUTE.AUTH]

export const THEME = {
  DARK: 'dark',
  LIGHT: 'light'
}

export const THEME_STYLE = {
  [THEME.DARK]: `background-color: black; color: white; font-size: ${TEXT_SIZE.DEFAULT}px`,
  [THEME.LIGHT]: `background-color: white; color: black; font-size: ${TEXT_SIZE.DEFAULT}px`
}

export const LOCAL_STORAGE = {
  TOKEN: 'token',
  SETTINGS: 'settings',
  LOCATION: 'location'
}

export const STATUS = {
  SUCCESS: 'success',
  FAIL: 'fail'
}

export const VALIDATION_ERROR = {
  email: 'Invalid email',
  trackNumber: 'Invalid track number',
  password: 'At least 6 chars'
}

export const COLOR = {
  ERROR: '#ff8e8f'
}

export const Z_INDEX = {
  COVER: 1000,
  POPUP: 2000,
  DRAWER: 3000
}
