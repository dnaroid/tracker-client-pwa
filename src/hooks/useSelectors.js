import useStore from './useStore'

export default function (...selectors) {
  const [state] = useStore()
  return selectors.map(selector => selector(state))
}
