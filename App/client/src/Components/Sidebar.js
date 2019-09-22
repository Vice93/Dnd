import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { withRouter  } from "react-router-dom";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'font-awesome/css/font-awesome.css';

class Sidebar extends Component {

  handleRedirect = (url) => {
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
        <SideNav.Nav defaultSelected={window.location.pathname}>
          <NavItem eventKey="/test">
            <NavIcon>
                <i className="fa fa-fw fa-apple" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Test
            </NavText>
          </NavItem>
          <NavItem eventKey="/about-us">
            <NavIcon>
                <i className="fa fa-fw fa-android" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              About-us
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    )
  }
}

export default withRouter(Sidebar);