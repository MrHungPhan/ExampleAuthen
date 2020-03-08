import React from "react";
import { observer } from "mobx-react";

import { useStore } from "hooks/useStore";
import LoginPage from "../index";

const LoginPageConnected = () => {
  const {
    appStore: { user, handleChangeLoginMeta }
  } = useStore();

  return <LoginPage user={user} handleChange={handleChangeLoginMeta} />;
};

export default observer(LoginPageConnected);
