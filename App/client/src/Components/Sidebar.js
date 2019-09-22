import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { withRouter  } from "react-router-dom";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'font-awesome/css/font-awesome.css';

class Sidebar extends Component {

  handleRedirect = (url) => {
    console.log(url, window.location.pathname)
    if(window.location.pathname !== url) {
      this.props.history.push(url)
    }
  }

  render(){
    return(
      <SideNav className="main-sidenav"
        onSelect={(selected) => {
          this.handleRedirect(selected);
        }}>
      <SideNav.Toggle />        
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="/">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              Home
            </NavText>
          </NavItem>
            
          <NavItem eventKey="/test">
            <NavIcon>
                <i className="fa fa-fw fa-apple" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Test
            </NavText>
          </NavItem>
          <NavItem eventKey="/unknown">
            <NavIcon>
                <i className="fa fa-fw fa-android" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Unknown
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    )
  }
}

export default withRouter(Sidebar);