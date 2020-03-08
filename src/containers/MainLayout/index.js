import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from "utility/constants";
const HomePage = lazy(() => import("../HomePage/connected"));
const NotfoundPage = lazy(() => import("../NotfoundPage"));

const MainLayout = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route exact path={routes.main} component={HomePage} />
        <Route component={NotfoundPage} />
      </Switch>
    </Suspense>
  );
};

export default MainLayout;
