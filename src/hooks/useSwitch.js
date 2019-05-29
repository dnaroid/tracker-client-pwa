import { useCallback, useState } from 'react'

export default function (initialValue) {
  const [active, setActive] = useState(initialValue)
  const switcher = useCallback(value => setActive(value === undefined ? !active : value))

  return [active, switcher]
}
