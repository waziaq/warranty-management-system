import { CBreadcrumb, CBreadcrumbItem } from "@coreui/react";
import { useLocation } from "@tanstack/react-router";
import React from "react";

// sidebar nav config
import navigation from "../../_nav";

const AppBreadcrumb = () => {
  const currentLocation = useLocation();

  const getRouteName = (pathname: string, navigation: any) => {
    const currentRoute = navigation.find((navigate: any) => navigate.to === pathname);
    return currentRoute?.name;
  };

  const getBreadcrumbs = (location: any) => {
    const breadcrumbs: any = [];
    location.pathname
      .split("/")
      .reduce((prev: any, curr: any, index: any, array: any) => {
        const currentPathname = `${prev}/${curr}`;
        const routeName = getRouteName(currentPathname, navigation);
        routeName &&
          breadcrumbs.push({
            pathname: currentPathname,
            name: routeName,
            active: index + 1 === array.length ? true : false,
          });
        return currentPathname;
      });
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs(currentLocation);

  return (
    <CBreadcrumb className="my-0">
      <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
      {breadcrumbs.map((breadcrumb: any, index: any) => {
        return (
          <CBreadcrumbItem
            {...(breadcrumb.active
              ? { active: true }
              : { href: breadcrumb.pathname })}
            key={index}
          >
            {breadcrumb.name}
          </CBreadcrumbItem>
        );
      })}
    </CBreadcrumb>
  );
};

export default React.memo(AppBreadcrumb);
