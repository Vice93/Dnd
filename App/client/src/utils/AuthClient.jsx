import client from './ApiClient'

const localStorageKey = '__dnd_token__'

function handleLoginResponse({ success, message, data}) {
  if(!success) {
    return {user: null, message: message};
  }
  window.localStorage.setItem(localStorageKey, data.token)
  return {user: data.user, message: message}
}

function handleRegisterResponse({ created, message }) {
  return Promise.resolve({created,message})
}

function getUser() {
  const token = getToken()
  if (!token) {
    return Promise.resolve({user: null, message: ''})
  }
  return client('me').catch(error => {
    logout()
    return Promise.reject({user: null, message: ''})
  })
}

function login({username, password}) {
  return client('login', {body: {username, password}}).then(handleLoginResponse)
}

function register({username, email, password}) {
  return client('register', {body: {username, email, password}}).then(
    handleRegisterResponse,
  )
}

function logout() {
  window.localStorage.removeItem(localStorageKey)
  return Promise.resolve()
}

function getToken() {
  return window.localStorage.getItem(localStorageKey)
}

export {login, register, logout, getToken, getUser}