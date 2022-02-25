import React from "react";
import { Container, Navbar, Dropdown, Nav, Badge } from "react-bootstrap";
import { BsBagCheck, BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <BsBagCheck style={{ marginBottom: "8px" }} /> E Commerce App
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Dropdown align="end">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <BsCartPlus style={{ marginBottom: "4px" }} /> Cart <Badge bg="success">{0}</Badge>
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
