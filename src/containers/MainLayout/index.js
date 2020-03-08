import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from "utility/constants";
import Header from "components/Header";
const HomePage = lazy(() => import("containers/HomePage/connected"));
const ProductPage = lazy(() => import("containers/ProductsPage"));
const AboutPage = lazy(() => import("containers/AboutPage"));

const MainLayout = () => {
  return (
    <Suspense fallback={null}>
      <Header />
      <div className="main">
        <Switch>
          <Route exact path={routes.main} component={HomePage} />
          <Route exact path={routes.products} component={ProductPage} />
          <Route exact path={routes.about} component={AboutPage} />
        </Switch>
      </div>
    </Suspense>
  );
};

export default MainLayout;
