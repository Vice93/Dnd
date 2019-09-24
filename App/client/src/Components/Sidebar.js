import React from 'react';
import '../css/sidebar.css';
import 'font-awesome/css/font-awesome.css';
import { makeStyles, useTheme } from '@material-ui/styles';
import {Drawer,Button,List,Divider,ListItem,ListItemIcon,ListItemText} from '@material-ui/core';
import {AccountCircle} from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250
  }
});

export default function Sidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const [state, setState] = React.useState({
    isOpen: false
  });
  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, isOpen: open });
  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/test">
          <ListItemIcon>
            <AccountCircle style={theme.palette.iconColor} />
          </ListItemIcon>
          <ListItemText primary="Test" />
        </ListItem>
      </List>
      <List>
        <ListItem button component={Link} to="/about-us">
          <ListItemIcon>
            <AccountCircle style={theme.palette.iconColor} />
          </ListItemIcon>
          <ListItemText primary="About us" />
        </ListItem>
      </List>
      <Divider />
      {
        //Dette er default oppsett av "Link buttons". Import typen du ønsker fra @material-ui/core/styles, f.eks.
        //Button, og så setter man ' component={Link} to="/path" ' som attributt på elementet
        //F.eks: <Button component={Link} to="/path">Tekst</Button>, funker med alle material elementer som kan være button, link etc
      }
      <List>
        <ListItem button component={Link} to="/path">
          <ListItemIcon>
            <AccountCircle style={theme.palette.iconColor} />
          </ListItemIcon>
          <ListItemText color="secondary" primary="En tekst her" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(!state.isOpen)}><i className="fa fa-fw fa-bars icon-color" style={{ fontSize: '1.75em' }} /></Button>
      <Drawer id="sidebar" open={state.isOpen} onClose={toggleDrawer(false)}>
        {sideList()}
      </Drawer>
    </div>
  );
}