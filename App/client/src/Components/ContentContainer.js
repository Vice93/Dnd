import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    width: '90%',
    border: '1px solid',
    padding: '36px',
    color: theme.primary
  }
}));

export default function ContentContainer(props) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div id="TESTDIV">TEST</div>
      {props.children}
      {props.contentRight}
    </Container>
  )
}