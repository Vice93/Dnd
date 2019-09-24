import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    width: '100%',
    padding: '0',
    display: 'flex',
    flexDirection: 'row',
    minWidth: 800,
  },
  singleContainer: {
    height: '100%',
    width: '100%',
    margin: 'auto'
  },
  left: {
    maxWidth: '61.8%',
    padding: 0
  },
  right: {
    maxWidth: '38.2%',
    padding: 0
  }
  
}));

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

export default function ContentContainer(props) {
  const classes = useStyles();
  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 300)

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
  }})
  
  let hideRight = (dimensions.width <= 800)

  if(props.contentRight != null && !hideRight) {
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
  }
  return (
    <Container className={classes.singleContainer}>
      {props.children}
    </Container>
  )
}