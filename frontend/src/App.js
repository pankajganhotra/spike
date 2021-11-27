import React, { Suspense, useCallback, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";

import Header from "./Layout/Header";
import { useSelector } from "react-redux";
import { checkSession } from "./app/store/actions/authActions";
import Fallback from "./Util/Fallback";
import ErrorBoundary from "./Util/ErrorBoundary";
import { ToastContainer } from "react-toastify"
import Modals from "./Modals";


const App = () => {
  const { auth, user, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    checkSession();
  }, []);

  const getRoutes = useCallback(() => {
    if (auth) {
      return privateRoutes;
    } else {
      return publicRoutes;
    }
  }, [auth]);

  if (loading) {
    return <Fallback />;
  }

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ToastContainer />
        <Header user={user} />

        <Suspense fallback={<Fallback />}>
          <Switch>
            {getRoutes().map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                render={(props) => (
                  <route.component
                    {...props} //Routing props
                    {...(route.props || {})} //Component props defined in routes.js
                  />
                )}
              />
            ))}
          </Switch>
        </Suspense>
        <Modals />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
