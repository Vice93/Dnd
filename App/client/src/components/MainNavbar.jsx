import React from 'react';
import Sidebar from './Sidebar';
import '../css/main.css'
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { useAuth } from '../context/AuthContext'
import history from '../providers/HistoryProvider'
import SettingsMenu from './SettingsMenu'

export default function MainNavbar(props) {

  const { logout } = useAuth()

  const signOut = () => {
      logout().then(history.push('/'))
  }
  
  return (
    <AppBar position="fixed" top="0 !important">
      <Toolbar color="secondary">
        <Sidebar isLoggedIn={props.isLoggedIn} />
        <Button component={Link} to="/" color="default">Home</Button>
        <div style={{ flex: 1 }}>{/*This is purely a spacer to push the button to the right*/}</div>
        <SettingsMenu toggleTheme={props.toggleTheme}/>
        {props.isLoggedIn
          ? <Button onClick={signOut} component={Link} to="/" variant="contained" color="secondary">Sign out</Button>
          : <Button component={Link} to="/login" variant="contained" color="secondary">Login</Button>}


      </Toolbar>
    </AppBar>
  )
}