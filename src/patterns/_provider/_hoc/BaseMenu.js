import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";

const MenuContainer = styled.div`
  position: relative;
  font: 14px sans-serif;
`;

const BaseMenu = props => {
  <MenuContainer>
    {props.children}
    {props.menuItems.map(item => {
      <span>{item.label}</span>;
    })}
  </MenuContainer>;
};

BaseMenu.PropTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      icon: PropTypes.string,
      label: PropTypes.string
    }).isRequired()
  )
};

export default BaseMenu;
