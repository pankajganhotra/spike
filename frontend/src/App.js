import React, { Suspense, useCallback, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes"

import Header from "./Layout/Header";
import { useSelector } from "react-redux";
import { checkSession } from "./app/store/actions/authActions";

const App = () => {
  const { auth, user, loading } = useSelector(state => state.auth)

  useEffect(() => {
    checkSession()
  }, []);

  const getRoutes = useCallback(() => {
    if (user) {
      return privateRoutes;
    } else {
      return publicRoutes;
    }
  }, [user])


  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <BrowserRouter>
      <Header user={user} />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {getRoutes().map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={props => (
                <route.component
                  {...props} //Routing props
                  {...(route.props || {})} //Component props defined in routes.js
                />
              )}
            />
          ))}
        </Switch>
      </Suspense>
    </BrowserRouter>
  )

}


export default App;
