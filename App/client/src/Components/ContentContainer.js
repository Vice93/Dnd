import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    width: '100%',
    border: '1px solid blue',
    padding: '0',
    display: 'flex',
    flexDirection: 'row'
  },
  left: {
    maxWidth: '61.8%',
    border: '1px solid'
  },
  right: {
    maxWidth: '38.2%',
    border: '1px solid'
  }
  
}));

export default function ContentContainer(props) {
  const classes = useStyles();

  if(props.contentRight != null)
    return (
      <Container className={classes.container}>
        <Container className={classes.left}>
          {props.children}
        </Container>
        <Container className={classes.right}>
          {props.contentRight}
        </Container>
      </Container>
    )
  return (
    <Container className={classes.container}>
      {props.children}
    </Container>
  )
}