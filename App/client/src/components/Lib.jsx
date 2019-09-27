import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

const fullSpinner = {
  display: 'flex',
  marginTop: '3em',
  fontSize: '4em'
}

const spinner = {
  margin: 'auto'
}


export const Spinner = (props) => {
  return (
    <CircularProgress size={props.size} style={spinner} color="secondary" />
  )
}

export const FullPageSpinner = () => {
  return (
    <div style={fullSpinner}>
      <Spinner size={200} />
    </div>
  )
}