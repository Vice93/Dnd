import React from 'react';
import Sidebar from './Sidebar';
import '../css/main.css'
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from '@material-ui/core';

export default function MainNavbar() {
  return(
    <AppBar position="fixed" top="0 !important">
      <Toolbar>
        <Sidebar />
        <Button component={Link} to="/" color="secondary">Home</Button>
        <div style={{ flex: 1 }}>{/*This is purely a spacer to push the button to the right*/}</div>
        <Button component={Link} to="/login" variant="contained" color="secondary">Login</Button>
      </Toolbar>
    </AppBar>
  )
}