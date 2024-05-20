import { CSidebarNav, CBadge, CNavLink } from "@coreui/react";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import { Link } from "@tanstack/react-router";
import PropTypes from "prop-types";

export const AppSidebarNav = ({ items }: any) => {
  const navLink = (
    name: string,
    icon: any,
    badge?: any,
    indent: boolean = false
  ) => {
    return (
      <>
        {icon
          ? icon
          : indent && (
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>
            )}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}
      </>
    );
  };

  const navItem = (items: any, index: any, indent: boolean = false) => {
    const { component, name, badge, icon, ...rest } = items;
    const Component = component;

    return (
      <Component as="div" key={index}>
        {rest.to || rest.href ? (
          <CNavLink {...(rest.to && { as: Link })} {...rest}>
            {navLink(name, icon, badge, indent)}
          </CNavLink>
        ) : (
          navLink(name, icon, badge, indent)
        )}
      </Component>
    );
  };

  const navGroup = (item: any, index: any) => {
    const { component, name, icon, items, to, ...rest } = item;
    const Component = component;

    return (
      <Component
        compact
        as="div"
        key={index}
        toggler={navLink(name, icon)}
        {...rest}
      >
        {items.items?.map((item: any, index: any) =>
          item.items ? navGroup(item, index) : navItem(item, index, true)
        )}
      </Component>
    );
  };
  return (
    <CSidebarNav as={SimpleBar}>
      {items &&
        items.map((item: any, index: any) =>
          item.items ? navGroup(item, index) : navItem(item, index)
        )}
    </CSidebarNav>
  );
};

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};
