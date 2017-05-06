import { Nav, Navbar, NavItem } from 'react-bootstrap';
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Navbar collapseOnSelect inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='/#'>AuthQuick</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href='/demo'>Demo</NavItem>
              <NavItem eventKey={2} href='#get-started'>Get Started</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
