import {getUser} from './AuthClient'

async function bootstrapAppData() {
  const data = await getUser()
  if (!data.user) {
    return {user: null, message: data.message}
  }
  const {user, message} = data
  return {
    user,
    message
  }
}

export {bootstrapAppData}