//imports

import { account } from '.'

// login method
async function auth(email: string, password: string) {
  return account.createEmailSession(email, password)
}

//Register method
async function registerUser(email: string, password: string, name: string) {
  return account.create('unique()', email, password, name).then(()=>{
    return auth(email, password)
  })
}

//exports
export { auth, registerUser }
