import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useFirebase from '../../hooks/useFirebase'

const Header = () => {
  const { user, logOut } = useFirebase()
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Fastest Food Delivery</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/home#services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/contactUs">
              Contact Us
            </Nav.Link>
            {user?.email ? (
              <Button onClick={logOut} variant="outline-warning mx-3">
                Log Out
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Log In
              </Nav.Link>
            )}
            <Navbar.Text>
              Signed in as:{' '}
              <a href="#login">
                {' '}
                {user?.displayName ? user?.displayName : user?.email}{' '}
              </a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
