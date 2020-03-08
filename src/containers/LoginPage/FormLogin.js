import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { LoginFormWrapper } from "./styles";
import { InputText, Button } from "components";

const LoginForm = ({ user, handleChange, handleLoginUser, errors }) => {
  const { t } = useTranslation();

  function handleChangeEmail(val) {
    handleChange({ email: val });
  }

  function handleChangePass(val) {
    handleChange({ password: val });
  }

  return (
    <LoginFormWrapper>
      <h2>{t("loginPage.login")}</h2>
      <InputText
        label={t("common.email")}
        value={user.email}
        onChange={handleChangeEmail}
        error={errors.email || ""}
      />
      <InputText
        label={t("common.password")}
        type="password"
        value={user.password}
        onChange={handleChangePass}
        error={errors.password || ""}
      />
      <Button
        className="btn_login"
        label={t("loginPage.login")}
        size="md"
        type="primary"
        onClick={handleLoginUser}
      />
    </LoginFormWrapper>
  );
};

LoginForm.propTypes = {
  user: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleLoginUser: PropTypes.func,
  errors: PropTypes.object || PropTypes.string
};

export default LoginForm;
