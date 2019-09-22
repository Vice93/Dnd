import React, { Component } from 'react';
import {Navbar, Nav, Button, Form, FormControl} from 'react-bootstrap';
import Sidebar from './Sidebar'
import '../css/main.css'

export default class MainNavbar extends Component {

  render(){
    return(
      <div className="navbar-wrapper">
        <Sidebar />
        <Navbar bg="dark" variant="dark" fixed="top" className="main-navbar">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </div>
    )
  }
}