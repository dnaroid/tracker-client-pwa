export const GLOBAL = window

export const DEVELOPMENT = GLOBAL && GLOBAL.location.hostname === 'localhost'

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
  [THEME.DARK]: 'background-color: black; color: white;',
  [THEME.LIGHT]: 'background-color: white; color: black;'
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
