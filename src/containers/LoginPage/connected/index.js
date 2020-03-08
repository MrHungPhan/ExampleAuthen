import React from "react";
import { observer } from "mobx-react";

import { useStore } from "hooks/useStore";
import LoginPage from "../index";

const LoginPageConnected = () => {
  const {
    appStore: { user, handleChangeLoginMeta, dispatchLogin, errors }
  } = useStore();

  return (
    <LoginPage
      user={user}
      handleChange={handleChangeLoginMeta}
      dispatchLogin={dispatchLogin}
      errors={errors}
    />
  );
};

export default observer(LoginPageConnected);
