import { THEME_STYLE } from '../config/strings'

export const saveString = (key, value) =>
  localStorage.setItem(key, value)

export const loadString = (key, defaultValue = 'null') =>
  localStorage.getItem(key) || defaultValue

export const loadObject = (key, defaultValue = {}, cb) => {
  const str = loadString(key, null)
  const obj = str ? JSON.parse(str) : defaultValue
  if (cb) {cb(obj)}
  return obj
}

export const saveObject = (key, obj) => {
  saveString(key, JSON.stringify({ ...obj, __updated: (new Date().getTime()) }))
}

export const updateTheme = theme => {
  document.body.style = THEME_STYLE[theme]
}
