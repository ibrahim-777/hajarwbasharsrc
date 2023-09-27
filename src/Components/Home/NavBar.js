import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './../../assets/img/logo.svg'
import { Link } from 'react-router-dom';
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
export default function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar   className="navbar navbar-expand-lg navbar-light light" style={{backgroundColor:"#0A5A5B"}} {...args}>
        <NavbarBrand href="/Home"><img src={logo} style={{width:"4.5rem",height:"4.5rem"}} alt=""/></NavbarBrand>
        <NavbarToggler className='text-light bg-light' onClick={toggle} />
        <Collapse   isOpen={isOpen} navbar >
          <Nav className="me-auto" navbar>
                <NavItem>
              <NavLink className="nav-item nav-link text-light">
                <Link to="/AllActivities">Activities</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-item nav-link text-light">
                <Link  to="/AboutUs">About Us</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-item nav-link text-light">
                <Link to="/Blog">Blog</Link></NavLink>
            </NavItem>
          </Nav>
          <Nav navbar className="float-right" >
          <NavItem><button className="btn btn my-2 my-sm-0 text-light">Log In</button></NavItem>
          <NavItem style={{marginLeft:"0.5rem"}}><button className="btn bg-light  my-2 my-sm-0" >Sign Up</button></NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  )
}