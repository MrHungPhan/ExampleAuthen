import React from "react";
import PropTypes from "prop-types";

import { LoginWrapper } from "./styles";
import LoginForm from "./FormLogin";

const LoginPage = ({ user, handleChange, dispatchLogin, errors }) => {
  function handleLoginUser() {
    dispatchLogin();
  }

  return (
    <LoginWrapper>
      <LoginForm
        user={user}
        handleChange={handleChange}
        handleLoginUser={handleLoginUser}
        errors={errors}
      />
    </LoginWrapper>
  );
};

LoginPage.propTypes = {
  user: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  dispatchLogin: PropTypes.func,
  errors: PropTypes.object || PropTypes.string
};

export default LoginPage;
