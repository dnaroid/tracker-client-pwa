import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ROUTE } from '../config/constants'
import useSelectors from '../hooks/useSelectors'
import Auth from './Auth'
import NotFound from './NotFound'
import Settings from './Settings'
import Track from './Track'
import Tracks from './Tracks'

export default () => {

  const [user] = useSelectors(s => s.user)

  if (!user.checked) { return null }

  return <>

    {!user.logged &&
     <Switch>
       <Route exact path={ROUTE.AUTH} component={Auth} />
       <Route exact path={ROUTE.SETTINGS} component={Settings} />
       <Route component={NotFound} />
     </Switch>}

    {user.logged &&
     <Switch>
       <Route exact path={ROUTE.AUTH} component={Auth} />
       <Route exact path={ROUTE.TRACK} component={Track} />
       <Route exact path={ROUTE.TRACKS} component={Tracks} />
       <Route exact path={ROUTE.SETTINGS} component={Settings} />
       <Route component={NotFound} />
     </Switch>}

  </>
}
