import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Sidebar from './Sidebar'
import '../css/main.css'
import { Link, withRouter } from "react-router-dom";

class MainNavbar extends Component {

  render(){
    return(
      <div className="navbar-wrapper">
        <Navbar bg="dark" variant="dark" fixed="top" className="main-navbar">
          <Sidebar />
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">Home</Link>
          </Nav>
          
          <Link to="/login" type="button" className="btn btn-primary">Login</Link>
        </Navbar>
      </div>
    )
  }
}

export default withRouter(MainNavbar);