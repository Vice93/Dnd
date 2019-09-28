import React from 'react'
import { FullPageSpinner } from '../components/Lib'
import * as authClient from '../utils/AuthClient'
import {useAsync} from 'react-async'
import {bootstrapAppData} from '../utils/Bootstrap'

const AuthContext = React.createContext()

function AuthProvider(props) {
  const [firstAttemptFinished, setFirstAttemptFinished] = React.useState(false)
  const {
    data = {user: null},
    error,
    isRejected,
    isPending,
    isSettled,
    reload,
  } = useAsync({
    promiseFn: bootstrapAppData,
  })

  React.useLayoutEffect(() => {
    if (isSettled) {
      setFirstAttemptFinished(true)
    }
  }, [isSettled])

  if (!firstAttemptFinished) {
    if (isPending) {
      return <FullPageSpinner />
    }
    if (isRejected) {
      return (
        <div css={{color: 'red'}}>
          <p>Uh oh... There's a problem. Try refreshing the app.</p>
          <pre>{error.message}</pre>
        </div>
      )
    }
  }
  const login = form => authClient.login(form).then((res) => {
    if(res.user) // If user isnt null, it means login was successful. Reloading page means res is now undefined
      reload()
    else 
      return res
    })
  const register = form => authClient.register(form)
  const logout = () => authClient.logout().then(reload)
  return (
    <AuthContext.Provider value={{data, login, logout, register}} {...props} />
  )
}

function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context
}

export {AuthProvider, useAuth}