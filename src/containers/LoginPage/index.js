import React from "react";
import PropTypes from "prop-types";

import { LoginWrapper } from "./styles";
import LoginForm from "./FormLogin";

const LoginPage = ({ user, handleChange }) => {
  console.log("hihi");
  return (
    <LoginWrapper>
      <LoginForm user={user} handleChange={handleChange} />
    </LoginWrapper>
  );
};

LoginPage.propTypes = {
  user: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default LoginPage;
