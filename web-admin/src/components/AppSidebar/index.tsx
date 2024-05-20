import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilShieldAlt } from "@coreui/icons";
import { AppSidebarNav } from "../AppSidebarNav";

// sidebar nav config
import navigation from "../../_nav";
import { useState } from "react";

const AppSidebar = () => {
  const [visible, setVisible] = useState(true);
  const [unfoldable, setUnfoldable] = useState(true);
  
  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={visible}
      onVisibleChange={() => {}}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand className="d-flex align-items-center gap-4">
          <CIcon customClassName="sidebar-brand-full" icon={cilShieldAlt} height={32} />
          <CIcon customClassName="sidebar-brand-narrow" icon={cilShieldAlt} height={32} />
        </CSidebarBrand>
        <CCloseButton className="d-lg-none dark" onClick={() => setVisible(false)} />
      </CSidebarHeader>
      <AppSidebarNav items={navigation} />
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler onClick={() => setUnfoldable(!unfoldable)} />
      </CSidebarFooter>
    </CSidebar>
  );
};

export default AppSidebar;
