import { CNavItem } from "@coreui/react";
import CIcon from '@coreui/icons-react'
import { cilSpeedometer, cilNotes } from '@coreui/icons'

const _nav = [
    {
        component: CNavItem,
        name: 'Dashboard',
        to: '/administrator',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />
      },
      {
        component: CNavItem,
        name: 'Products',
        to: '/administrator/products',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />
      }
];

export default _nav