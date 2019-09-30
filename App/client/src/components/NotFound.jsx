import React from 'react'
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

function NotFound() {
  return (
    <div
      style={{
        marginTop: '10%',
        height: '100%',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '3em'
      }}
    >
      <div>
        Sorry... nothing here. <Button component={Link} to="/" variant="contained" color="secondary">Go Home</Button>
      </div>
    </div>
  )
}

export default NotFound