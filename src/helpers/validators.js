import { VALIDATION_ERROR } from '../config/constants'

export default {

  trackNumber: v => !/^[A-Z]{2}\d{9}[A-Z]{2}$/.test(v) && VALIDATION_ERROR.trackNumber,

  email: v => !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v) && VALIDATION_ERROR.email,

  password: v => !/^.{6,}$/.test(v) && VALIDATION_ERROR.password

}
