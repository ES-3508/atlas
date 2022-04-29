import React from 'react'
// import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { CNav,CNavItem,CNavLink} from '@coreui/react';
import "./navbar.css"


function NavbarMain() {
    return (
        <CNav variant="pills" layout="fill">
        <CNavItem>
          <CNavLink href="/" >
          <h4>ASSEMBLY</h4>
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="/factory2"><h4>PRINTING</h4></CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="/factory4"><h4>INM</h4></CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="/factory4"><h4>GENERAL</h4></CNavLink>
        </CNavItem>
      </CNav>
    )
}

export default NavbarMain

