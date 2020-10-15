import React from 'react'
import { Icon, Button, Grid, TextField, Typography, Card, CardContent, FormControl } from '@material-ui/core'
import { Face } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'
import history from '../providers/HistoryProvider'
import { Spinner, openSnackbar } from '../components/Lib'


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
	const [isLoading, setIsLoading] = useState(false)

  const signIn = () => {
    if(isLoading) {
      openSnackbar('info', 'Login is underway, please wait...')
      return;
    }

    if (unInput !== '' && pwInput !== '') {
      setIsLoading(true)
      login({ username: unInput, password: pwInput }).then((res) => {
        if (res === undefined) { // means we reloaded the page
          history.push('/')
          openSnackbar('success', 'Logged in')
        }
        else
          openSnackbar('error', res.message)
        setIsLoading(false)
      })
    } 
    else {
      openSnackbar('warning', unInput === '' ? 'Please write a username' : 'Please write a password')
    }
  }

  const enterPressed = (e) => {
    if (e.key === 'Enter')
      signIn()
  }

  return (
    // Login form 
    <Card className={classes.card}>
      <CardContent>
        <Icon>
          <Face className="icon-size" />
        </Icon>
        <Typography component="h1">Sign in</Typography>
        <form>
          <FormControl className={classes.form} onKeyPress={enterPressed}>
            <TextField value={unInput} onInput={e => setUn(e.target.value)} autoFocus variant="outlined" margin="normal" required fullWidth id="username"
              label="Username" name="username" autoComplete="username" />
            <TextField value={pwInput} onInput={e => setPw(e.target.value)} variant="outlined" margin="normal" required fullWidth name="password"
              label="Password" type="password" id="password" autoComplete="current-password" />
            <Button fullWidth variant="contained" color="primary" onClick={signIn}>
              Sign in
          </Button>
            <Grid container className={classes.grid}>
              <Grid item xs>
                <Button className={classes.button} color="secondary" component={Link} to="/forgot-password">
                  Forgot password?
              </Button>
              </Grid>
              <Grid item xs>
                <Button className={classes.button} color="secondary" component={Link} to="/register">
                  No account?
            </Button>
              </Grid>
            </Grid>
            {
							isLoading &&
							<Spinner />
						}
          </FormControl>
        </form>
      </CardContent>
    </Card>
  )
}