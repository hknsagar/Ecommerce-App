import React from "react";
import { Container, Navbar, DropdownButton, Dropdown, Nav } from "react-bootstrap";
import { BsBagCheck, BsCartPlus } from "react-icons/bs";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <BsBagCheck style={{ marginBottom: "8px" }} /> E Commerce App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Dropdown align="end">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <BsCartPlus style={{ marginBottom: "4px" }} /> Cart (0)
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item disabled>Empty</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
