//imports

import { account } from "."



// login method
async function auth(email: string, password:string) {
    account.createEmailSession(email, password)
}

//Register method
async function registerUser(email: string, password:string, name: string) {
    account.create("unique()", email, password, name)
    auth(email, password)
}

//exports
export {auth, registerUser}