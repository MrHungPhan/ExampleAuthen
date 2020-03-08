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
    height: 42px;
    width: 100%;
    font-size: 16px;
    border-radius: 6px;
    padding: 0 10px;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.grayPrimary};
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.bluePrimary};
    }
  }
`;

const InputText = ({ label, type, value, onChange, disabled }) => {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <WrapperInput>
      {label && <label>{label}</label>}
      <input
        disabled={disabled}
        type={type}
        value={value}
        onChange={handleChange}
      />
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
