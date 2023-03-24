import { Client, Account } from 'appwrite'

const client = new Client()
client.setEndpoint('http://localhost/v1').setProject('641d61e8de5ffd1375cd')

const account = new Account(client)
export { client, account }
