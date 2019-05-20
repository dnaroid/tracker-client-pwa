import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ROUTE } from '../config/strings'
import Auth from './Auth'
import NotFound from './NotFound'
import Settings from './Settings'
import Track from './Track'
import Tracks from './Tracks'

export default ({ user: { logged, checked } }) => checked ? <>

  {!logged &&
   <Switch>
     <Route exact path={ROUTE.AUTH} component={Auth} />
     <Route component={NotFound} />
   </Switch>}

  {logged &&
   <Switch>
     <Route exact path={ROUTE.TRACKS} component={Tracks} />
     <Route exact path={`${ROUTE.TRACK}/:number`} component={Track} />
     <Route exact path={ROUTE.SETTINGS} component={Settings} />
     <Route exact path={ROUTE.AUTH} component={Auth} />
     <Route component={NotFound} />
   </Switch>}

</> : null
