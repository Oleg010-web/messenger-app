//imports

import { account } from '.'


async function auth(email: string, password: string) {
  return account.createEmailSession(email, password)
}


async function registerUser(email: string, password: string, name: string) {
  return account.create('unique()', email, password, name).then(()=>{
    return auth(email, password)
  })
}

//exports
export { auth, registerUser }
