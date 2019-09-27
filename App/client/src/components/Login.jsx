import React from 'react'
import { Icon, Button, Grid, TextField, Typography, Card, CardContent, FormControl } from '@material-ui/core'
import { Face } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'
import history from '../providers/HistoryProvider'


const useStyles = makeStyles(theme => ({
  card: {
    padding: '30px 20px',
    display: 'contents',
    textAlign: 'center',
    margin: 'auto'
  },
  button: {
    fontSize: '10px'
  },
  form: {
    /* En bredde her etterhvert */
  },
  grid: {
    marginTop: 10
  }
}))




export default function Login() {
  const classes = useStyles()
  const { login } = useAuth()
  const [unInput, setUn] = useState('')
  const [pwInput, setPw] = useState('')

  const signIn = () => {
    //Validate and show snackbar or smth: https://material-ui.com/components/snackbars/

    if(unInput !== '' && pwInput !== '')
      login({unInput, pwInput}).then(history.push('/'))
  }
  
  return (
    // Login form 
    <Card className={classes.card}>
      <CardContent>
        <Icon>
          <Face className="icon-size" />
        </Icon>
        <Typography component="h1">Sign in</Typography>
        <FormControl className={classes.form}>
          <TextField value={unInput} onInput={e => setUn(e.target.value)} autoFocus variant="outlined" margin="normal" required fullWidth id="username"
            label="Username" name="username" autoComplete="username" />
          <TextField value={pwInput} onInput={e => setPw(e.target.value)} variant="outlined" margin="normal" required fullWidth name="password"
            label="Password" type="password" id="password" autoComplete="current-password" />
          <Button type="submit" fullWidth variant="contained" color="primary" onClick={signIn}>
            Sign in
          </Button>
          <Grid container className={classes.grid}>
            <Grid item xs>
              <Button className={classes.button} type="submit" color="secondary" component={Link} to="/forgot-password">
                Forgot password?
              </Button>
            </Grid>
            <Grid item xs>
              <Button className={classes.button} type="submit" color="secondary" component={Link} to="/register">
                No account?
            </Button>
            </Grid>
          </Grid>
        </FormControl>
      </CardContent>
    </Card>
  )
}