import React from 'react'
import {useUser} from './context/UserContext'
import {FullPageSpinner} from './components/Lib'
import {CustomSnackbar} from './components/Lib'

const loadAuthenticatedApp = () => import('./application/AuthenticatedApp')
const AuthenticatedApp = React.lazy(loadAuthenticatedApp)
const UnauthenticatedApp = React.lazy(() => import('./application/UnauthenticatedApp'))

function App() {
  const userObj = useUser()
  // pre-load the authenticated side in the background while the user's
  // filling out the login form.
  React.useEffect(() => {
    loadAuthenticatedApp()
  }, [])
  
  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      {userObj.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      <CustomSnackbar />
    </React.Suspense>
  )
}

export default App