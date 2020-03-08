import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled("div")`
  padding: 0 1rem;
  box-sizing: border-box;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.bluePrimary};

  .menu_content {
    height: 100%;
    display: flex;
    flex: 1;
  }
  .user_info {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const NavLinkCustom = styled(NavLink)`
  color: ${({ theme }) => theme.whitePrimary};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  height: 100%;
  text-transform: uppercase;
  font-weight: bold;
  &.active {
    background: ${({ theme }) => theme.grayPrimary};
  }
`;
