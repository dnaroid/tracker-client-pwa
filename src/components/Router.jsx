import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ROUTE } from '../config/strings'
import routes from '../routes'

export default connect(s => ({ logged: s.user.logged }))(
  ({ logged }) => <>

    {!logged &&
     <Switch>
       <Route exact path={ROUTE.Account} component={routes.Auth} />
       <Route component={routes.NotFound} />
     </Switch>}

    {logged &&
     <Switch>
       <Route exact path={ROUTE.Tracks} component={routes.Tracks} />
       <Route exact path={`${ROUTE.Track}/:number`} component={routes.Track} />
       <Route exact path={ROUTE.Settings} component={routes.Settings} />
       <Route exact path={ROUTE.Account} component={routes.Auth} />
       <Route component={routes.NotFound} />
     </Switch>}

  </>)
