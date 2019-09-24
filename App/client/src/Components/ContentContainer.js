import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    width: '90%',
    border: '1px solid',
    padding: '36px'
  }
}));

export default function ContentContainer(props) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      {props.children}
      {props.contentRight}
    </Container>
  )
}