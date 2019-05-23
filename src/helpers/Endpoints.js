import { LOCAL_STORAGE, ROUTE } from '../config/strings'
import { loadString, redirect } from './browser'

export default class Endpoints {
  _host = ''

  constructor(url) {
    this._host = url
  }

  add(url) {
    return new Endpoint(`${this._host}/${url}`)
  }
}

class Endpoint {
  //_isCollection = false

  constructor(url) {
    this._url = url
  }

  param = p => {
    this._url = `${this._url}/${p}`
    return this
  }

  //get collection() {
  //  this._isCollection = true
  //  return this
  //}

  //get = () => this._getRequest(`${this._url}${this._isCollection ? 's' : ''}`, { method: 'GET' })
  get = () => this._getRequest(this._url, { method: 'GET' })

  post = (data) => this._getRequest(this._url, { method: 'POST', body: JSON.stringify(data) })

  put = (data) => this._getRequest(this._url, { method: 'PUT', body: JSON.stringify(data) })

  static _getHeaders() {
    return {
      Authorization: `Bearer ${loadString(LOCAL_STORAGE.TOKEN, '')}`,
      'Content-Type': 'application/json'
    }
  }

  _getRequest = (url, options) =>
    fetch(url, { headers: Endpoint._getHeaders(), ...options })
      .then(response => {
        if (!response.ok) { throw response }
        return response.json()
      })
      .catch(err => {
        if (err.status && err.status === 401) {
          setTimeout(() => redirect(ROUTE.AUTH))
        }
        return err.json()
      })

}
