import React from 'react'
import {Container, Nav, Navbar} from "react-bootstrap"
import { Link } from 'react-router-dom'

export default function Navbarr() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-item nav-link">Home</Link>
          </Nav>
          <Nav className="ms-auto">
            
          </Nav>
        </Container>
      </Navbar>
  )
}
