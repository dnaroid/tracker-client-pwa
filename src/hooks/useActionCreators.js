import useStore from './useStore'

export default function (...creators) {
  const [, dispatch] = useStore()
  return creators.map(creator =>
    (...param) => dispatch(creator(...param)))
}
