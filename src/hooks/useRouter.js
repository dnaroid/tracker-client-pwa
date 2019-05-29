import { useContext } from 'react'
import { __RouterContext } from 'react-router-dom'

export default function () {
  return useContext(__RouterContext)
}
