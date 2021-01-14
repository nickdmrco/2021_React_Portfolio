import { useState } from 'react'
import {
  Collapse,
  Navbar as Nvbr,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <div>
      <Nvbr color="faded" light>
        <NavbarBrand onClick={toggleNavbar} className="mr-auto">Nicholas De Marco</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/nickdmrco" target="_blank">Github</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Nvbr>
    </div>
  )
}

export default Navbar
