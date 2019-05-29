import React, { useEffect } from 'react'
import actions from '../actions'
import useActionCreators from '../hooks/useActionCreators'
import useRouter from '../hooks/useRouter'
import useSelectors from '../hooks/useSelectors'
import Routes from '../routes'
import { Main, MainShadow } from './common'
import SideBar from './SideMenu'

export default () => {

  const [router] = useSelectors(s => s.router)
  const { location } = useRouter()

  const [initApp, updateLocation] = useActionCreators(actions.settings.initApp.request, actions.router.updateLocation)

  useEffect(() => {
    initApp()
  }, [])

  useEffect(() => {
    if (!router.location || router.location.pathname !== location.pathname) {
      updateLocation(location)
    }
  }, [location.pathname])

  return <>
    <SideBar />
    <MainShadow />
    <Main>
      <Routes />
    </Main>
    <MainShadow />
  </>
}
