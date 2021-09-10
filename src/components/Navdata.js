import React, { Fragment, useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom'

const Navdata = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <Navbar color="dark" dark expand="md" className="mb-5">
        <NavLink style={{color: 'white', textDecoration: 'none', marginLeft: '50px', fontWeight: 'bolder'}} to="/GetData">Home</NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink style={{color: 'white', textDecoration: 'none', marginLeft: '50px', fontWeight: 'bolder'}} to="/SetData">Sign Up</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
  );
}

export default Navdata