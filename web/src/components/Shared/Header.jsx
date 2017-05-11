import {links} from "../../constants";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import React from "react";
import PropTypes from "prop-types";

export const Header = (props) => {

  const _handleSelectedKey = (selectedKey) => {
    console.log(selectedKey, selectedKey === links.demo.key);
    if (selectedKey === links.demo.key) {
      props.router.push(links.demo.path);
    }
    if (selectedKey === links.apiKeyNew.key) {
      props.router.push(links.apiKeyNew.path);
    }
  };

  return (
    <div className='header'>
      <Navbar collapseOnSelect inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='/'>AuthQuick</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight onSelect={_handleSelectedKey}>
            <NavItem eventKey={links.demo.key} href={links.demo.path}>Demo</NavItem>
            <NavItem eventKey={links.apiKeyNew.key} href={links.apiKeyNew.key}>Get Started</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

Header.propTypes = {
  router: PropTypes.object.isRequired,
};