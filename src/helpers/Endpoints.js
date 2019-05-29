import { LOCAL_STORAGE, ROUTE } from '../config/constants'
import { loadString, redirect } from './browser'

export default class Endpoints {
  _host = ''

  constructor(url) {
    this._host = url
  }

  add(url) {
    return new Endpoint([this._host, ...url.split('/')])
  }
}

class Endpoint {
  _paramsArray = null

  constructor(path) {
    this._pathArray = path
  }

  params = obj => {
    this._paramsArray = Object.entries(obj)
    return this
  }

  get = () => this._getRequest(this._getURL(), { method: 'GET' })

  post = (data) => this._getRequest(this._getURL(), { method: 'POST', body: JSON.stringify(data) })

  put = (data) => this._getRequest(this._getURL(), { method: 'PUT', body: JSON.stringify(data) })

  del = () => this._getRequest(this._getURL(), { method: 'DELETE' })

  _getURL = () => this._paramsArray
    ? this._pathArray.map(this._paramsMapper).join('/')
    : this._pathArray.join('/')

  _paramsMapper = step => {
    if (!step.startsWith(':')) { return step }
    step = step.slice(1)
    return this._paramsArray.find(([k]) => k === step)[1]
  }

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
        return new Response(`{"error":"${err.message}", "status":${err.status || 500}}`).json()
      })

}
