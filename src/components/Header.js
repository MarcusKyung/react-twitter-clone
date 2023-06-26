import React from "react";
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

function Header() {
  return (
    <React.Fragment>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <ButtonGroup>
              <Button variant="outline-primary" href="#home">Home</Button>
              <Button variant="outline-primary" href="#home">Notifications</Button>
              <Button variant="outline-primary" href="#home">Messages</Button>
              </ButtonGroup>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Tweet</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
    </React.Fragment>
  );
}

export default Header;