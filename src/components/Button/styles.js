import styled from 'styled-components';

export const ButtonWrapper = styled('button')`
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &.primary {
    background-color: ${({ theme }) => theme.bluePrimary};
    color: ${({ theme }) => theme.whitePrimary};
    &:hover {
      background-color: ${({ theme }) => theme.blueMedium1}
    }
  }
  &.outline {
    background-color: ${({ theme }) => theme.whitePrimary };
    border-color: 1px solid ${({ theme }) => theme.darkPrimary };
    color: ${({ theme }) => theme.darkPrimary };
    &:hover {
      background-color: ${({ theme }) => theme.darkPrimary  };
      color: ${({ theme }) => theme.whitePrimary };
    }
  }
  &.md {
    height: 42px;
    width: 170px;
  }
  &.sm {
    height: 32px;
    width: 15px;
  }
`;
