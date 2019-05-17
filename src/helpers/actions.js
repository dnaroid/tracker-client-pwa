export class ActionsCreator {
  constructor(scope) {
    this._scope = scope
  }

  _join = arr => [this._scope, arr].join('.')

  action(...path) {
    return this._join(path)
  }

  asyncAction(...path) {
    const prefix = this._join(path)
    return ({
      request: `${prefix}.request`,
      success: `${prefix}.success`,
      error: `${prefix}.error`
    })
  }
}
