import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as BootNavLink
} from "reactstrap";
import { NavLink } from "react-router-dom";

const SmurfNav = props => {
  const [isOpen, toggleOpen] = useState(false);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Smurf Village</NavbarBrand>
        <NavbarToggler onClick={() => toggleOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="text-right">
              <BootNavLink tag={NavLink} exact to="/" activeClassName="active">
                Home
              </BootNavLink>
            </NavItem>
            <NavItem className="text-right">
              <BootNavLink
                tag={NavLink}
                to="/smurf-form"
                activeClassName="active"
                onClick={e => this.props.setActiveSmurf(e, null)}
              >
                Add a New Smurf
              </BootNavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default SmurfNav;
