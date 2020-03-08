import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../utility/constants';

const LoginPage = lazy(() => import('../LoginPage/connected'));

const App = () => {
  return <Switch>
    <Suspense fallback>
      <Route exact path={routes.login} component={LoginPage} />
    </Suspense>
  </Switch>
}

export default App;