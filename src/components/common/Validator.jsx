import React, { useEffect, useRef } from 'react'
import { findDOMNode } from 'react-dom'

export default ({ children, onValidate }) => {

  const ref = useRef(null)

  useEffect(() => {
    const node = findDOMNode(ref.current)
    const errors = node.querySelector('[data-error="true"]')

    onValidate && onValidate(!errors)
  })

  return <div ref={ref}>
    {children}
  </div>
}
