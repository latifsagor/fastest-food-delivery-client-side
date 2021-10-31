import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useAuth from './../../hooks/useAuth'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  const { user, logOut } = useAuth()
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home" className="text-success">
          Fastest Food Delivery
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">
              Services
            </Nav.Link>
            {user?.email ? (
              <Nav.Link as={Link} to="/orderReview">
                My Order
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/"></Nav.Link>
            )}
            {user?.email ? (
              <Nav.Link as={Link} to="/addProducts">
                Add Products
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/"></Nav.Link>
            )}
            {user?.email ? (
              <Nav.Link as={Link} to="/manageAllOrders">
                Manage All Orders Info
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/"></Nav.Link>
            )}
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
