import React, { Component } from 'react';
import {Navbar, Nav, Button, Form} from 'react-bootstrap';
import Sidebar from './Sidebar'
import '../css/main.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Test from '../Components/Test';

export default class MainNavbar extends Component {

  render(){
    return(
      <Router>
        <div className="navbar-wrapper">
          <Sidebar />
          <Navbar bg="dark" variant="dark" fixed="top" className="main-navbar">
            <Nav className="mr-auto">
              <Link to="/">Home</Link>
              <Link to="/test">Test</Link>
            </Nav>
            <Form inline>
              <Button variant="outline-info" href="/login">Login</Button>
            </Form>
          </Navbar>
      </div>
      </Router>
      
    )
  }
}