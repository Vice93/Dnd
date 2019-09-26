import React from 'react'
import {AuthProvider} from '../context/AuthContext'
import {UserProvider} from '../context/UserContext'

function AppProviders({children}) {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  )
}

export default AppProviders