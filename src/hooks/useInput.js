import { useState } from 'react'

export default function (initialValue = '',validator) {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    validator,
    onChange: setValue
  }
}
