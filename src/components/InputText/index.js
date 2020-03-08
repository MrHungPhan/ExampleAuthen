import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const WrapperInput = styled("div")`
  margin-bottom: 16px;
  label {
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
    color: ${({ theme }) => theme.darkPrimary};
  }
  input {
    color: ${({ theme }) => theme.darkPrimary};
    height: 42px;
    width: 100%;
    font-size: 13px;
    border-radius: 6px;
    padding: 0 10px;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.grayPrimary};
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.bluePrimary};
    }
  }
  ${({ error, theme }) =>
    error &&
    `input {
    border-color: ${theme.redPrimary}
  }`}
  .error_input {
    display: block;
    margin-top: 10px;
    color: ${({ theme }) => theme.redPrimary};
    font-size: 12px;
  }
`;

const InputText = ({ label, type, value, onChange, disabled, error }) => {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <WrapperInput error={error}>
      {label && <label>{label}</label>}
      <input
        disabled={disabled}
        type={type}
        value={value}
        onChange={handleChange}
      />
      {error && <span className="error_input">{error}</span>}
    </WrapperInput>
  );
};

InputText.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

InputText.defaultProps = {
  disabled: false,
  label: "",
  type: "text"
};

export default InputText;
