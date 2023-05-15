import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import CartSummary from '../Cart/CartSummary';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Navigation(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand><Link to="/">Northwind Store</Link></NavbarBrand>
        <NavItem>
          <CartSummary />
        </NavItem>
        <NavItem>
          <NavLink><Link to={"/saveproduct"}>Add Product</Link></NavLink>
        </NavItem>
      </Navbar>
    </div>
  );
}

export default Navigation;