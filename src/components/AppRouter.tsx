import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteNames } from '../routes'

interface AppRouterProps {}

const AppRouter: React.FC<AppRouterProps> = () => {
  let auth = false

  return (
    <>
      {auth ? (
        <Switch>
          {privateRoutes.map((route) => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
              key={route.path}
            />
          ))}
          <Redirect to={RouteNames.EVENT} />
        </Switch>
      ) : (
        <Switch>
          {publicRoutes.map((route) => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
              key={route.path}
            />
          ))}
          <Redirect to={RouteNames.LOGIN} />
        </Switch>
      )}
    </>
  )
}

export default AppRouter
