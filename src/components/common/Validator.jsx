import React, { useEffect, useRef, useState } from 'react'
import { findDOMNode } from 'react-dom'

export default ({ children, onValidate }) => {

  const ref = useRef(null)
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    if (!onValidate) { return }
    const node = findDOMNode(ref.current)
    const newErrors = !!node.querySelector('[data-error="true"]')
    errors !== newErrors && onValidate(!newErrors)
    setErrors(newErrors)
  }, [children])

  return <div ref={ref}>
    {children}
  </div>
}
