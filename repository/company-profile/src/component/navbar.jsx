import React, { useState } from "react";
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
} from "reactstrap";
import "./style/navbar.css";
import logoMenu from "../assets/logo/logo-nav.png";

const navLink = {
  width: "100%",
  color: "white",
  fontSize: "16px",
  margin: "0 20px 10px 60px",
  float: "right",
};
const Navbarmenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav">
      <Navbar light expand="md" className="navbar">
        <NavbarBrand href="/">
          <img src={logoMenu} className="logo-navbar" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar style={navLink}>
          <Nav className="mr-auto" navbar>
            <NavbarText>
              <Nav className="mr-auto" navbar>
                <NavLink style={navLink}>About</NavLink>
                <NavLink style={navLink}>Services</NavLink>
                <NavLink style={navLink}>Work</NavLink>
                <NavLink style={navLink}>Contact</NavLink>
              </Nav>
            </NavbarText>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navbarmenu;
