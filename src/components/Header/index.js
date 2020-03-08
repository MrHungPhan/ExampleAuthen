import React from "react";
import { observer } from "mobx-react";
import { navLinks } from "./constants";

import { useStore } from "hooks/useStore";
import { HeaderWrapper, NavLinkCustom } from "./styles";

const Header = () => {
  const {
    appStore: { userData }
  } = useStore();

  console.log("userData", userData);

  function renderMenu() {
    return navLinks.map(it => (
      <NavLinkCustom
        exact
        key={it.id}
        to={it.activeLink}
        activeClassName="active"
      >
        {it.text}
      </NavLinkCustom>
    ));
  }

  return (
    <HeaderWrapper>
      <div className="menu_content">{renderMenu()}</div>
      <div className="user_info">
        <div>{userData.email || ""}</div>
      </div>
    </HeaderWrapper>
  );
};

export default observer(Header);
