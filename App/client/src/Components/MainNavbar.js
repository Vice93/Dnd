import React, { Component } from 'react';
import {Navbar, Nav, Button, Form} from 'react-bootstrap';
import Sidebar from './Sidebar'
import '../css/main.css'
import { Link } from "react-router-dom";

export default class MainNavbar extends Component {

  render(){
    return(
      <div className="navbar-wrapper">
        <Sidebar />
        <Navbar bg="dark" variant="dark" fixed="top" className="main-navbar">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/test" className="nav-link">Test</Link>
          </Nav>
          <Form inline>
            <Button variant="outline-info" href="/login">Login</Button>
          </Form>
        </Navbar>
      </div>
    )
  }
}