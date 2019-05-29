import { STATUS } from '../config/constants'

export class ActionCreator {
  constructor(scope) {
    this._scope = scope
  }

  _fullName = arr => [this._scope, arr].join('.')

  _createAction = (type, ...argNames) => {
    const action = (...args) => {
      let action = { type }
      argNames.forEach((arg, index) => {
        action[argNames[index]] = args[index]
      })
      return action
    }
    action.type = type
    return action
  }

  action(name, ...args) {
    return this._createAction(this._fullName(name), args)
  }

  asyncAction(name) {
    const prefix = this._fullName(name)
    return ({
      request: this._createAction(`${prefix}.request`, 'payload'),
      success: this._createAction(`${prefix}.${STATUS.SUCCESS}`, 'payload'),
      fail: this._createAction(`${prefix}.${STATUS.FAIL}`, 'payload')
    })
  }
}
