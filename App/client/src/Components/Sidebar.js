import React from 'react';
import '../css/sidebar.css';
import 'font-awesome/css/font-awesome.css';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  }
});

export default function Sidebar() {
  const classes = useStyles();
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
          <ListItemIcon><i className="fa fa-fw fa-apple" style={{ fontSize: '1.75em' }} /></ListItemIcon>
          <ListItemText primary="Test" />
        </ListItem>
      </List>
      <List>
        <ListItem button component={Link} to="/about-us">
          <ListItemIcon><i className="fa fa-fw fa-apple" style={{ fontSize: '1.75em' }} /></ListItemIcon>
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
          <ListItemIcon><i className="fa fa-fw fa-apple" style={{ fontSize: '1.75em' }} /></ListItemIcon>
          <ListItemText primary="En tekst her" />
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