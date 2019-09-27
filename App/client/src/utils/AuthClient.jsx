import client from './ApiClient'

const localStorageKey = '__dnd_token__'

function handleUserResponse({ success, message, data}) {
  if(!success) {
    return null;
  }
  window.localStorage.setItem(localStorageKey, data.token)
  return data.user
}

function handleRegisterResponse({ created, message }) {
  return Promise.resolve({created,message})
}

function getUser() {
  const token = getToken()
  if (!token) {
    return Promise.resolve(null)
  }
  return client('me').catch(error => {
    logout()
    return Promise.reject(error)
  })
}

function login({username, password}) {
  return client('login', {body: {username, password}}).then(handleUserResponse)
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