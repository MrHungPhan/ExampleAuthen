import React from 'react';
import PropTypes from 'prop-types';

import { ButtonWrapper } from './styles';

const Button = ({ size, type, label, onClick, disabled, className }) => {
  const classType = `${size} ${type} ${className}`;
  return <ButtonWrapper disabeled={disabled} className={classType} onClick={onClick} >
    {label}
  </ButtonWrapper>
}

Button.propTypes = {
  size: PropTypes.oneOf(['md', 'sm']).isRequired,
  type: PropTypes.oneOf(['primary', 'outline', 'secondary']).isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  onClick: () => null,
}

export default Button;