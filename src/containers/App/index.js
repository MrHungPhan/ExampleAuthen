import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { observer } from "mobx-react";
import { hasLogin } from "utility/cookieStorage";

import { routes } from "utility/constants";
import { useStore } from "hooks/useStore";
import MainLayout from "../MainLayout";
import NotFoundPage from "containers/NotfoundPage";
import LoginPage from "../LoginPage/connected";

const App = () => {
  const {
    appStore: { isLoading, getUserData }
  } = useStore();
  // const isLogin = useMemo(() => hasLogin(), []);
  useEffect(() => {
    if (hasLogin()) {
      getUserData();
    }
  }, [hasLogin()]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!hasLogin()) {
    return <LoginPage />;
  }
  return (
    <Switch>
      <Route path={routes.main} component={MainLayout} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default observer(App);
