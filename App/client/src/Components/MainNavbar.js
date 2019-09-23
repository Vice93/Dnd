import React from 'react';
import Sidebar from './Sidebar'
import '../css/main.css'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  grid: {
    justify: "space-between",
    spacing: 24
  }
}));

export default function MainNavbar() {
  const classes = useStyles;
  return(
    <AppBar position="fixed" top="0 !important">
      <Toolbar>
        <Grid container className={classes.grid}>
          <Grid item xs={1}>
            <Sidebar />
          </Grid>
          <Grid item xs={10}>
            <Button component={Link} to="/" color="default">Home</Button>
          </Grid>
          <Grid item xs={1}>
            <Button component={Link} to="/login" variant="contained" color="secondary">Login</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>


    // <div className="navbar-wrapper">
    //   <Navbar bg="dark" variant="dark" fixed="top" className="main-navbar">
    //     <Sidebar />
    //     <Nav className="mr-auto">
    //       <Link to="/" className="nav-link">Home</Link>
    //     </Nav>
        
    //     <Link to="/login" type="button" className="btn btn-primary">Login</Link>
    //   </Navbar>
    // </div>
  )
}