import React from "react";
import { observer } from "mobx-react";
import { hasLogin } from "utility/cookieStorage";

import { useStore } from "hooks/useStore";
import MainLayout from "../MainLayout";
import LoginPage from "../LoginPage/connected";

const App = () => {
  const {
    appStore: { isLoading }
  } = useStore();
  // const isLogin = useMemo(() => hasLogin(), []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!hasLogin()) {
    return <LoginPage />;
  }
  return <MainLayout />;
};

export default observer(App);
