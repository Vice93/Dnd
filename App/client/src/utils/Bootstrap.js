import {getUser} from './AuthClient'

async function bootstrapAppData() {
  const data = await getUser()
  if (!data) {
    return {user: null}
  }
  const {user} = data
  return {
    user
  }
}

export {bootstrapAppData}