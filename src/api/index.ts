import { ENDPOINT, PROJECT_ID } from '@/config'
import { Client, Account, Teams } from 'appwrite'

const client = new Client()
client.setEndpoint(ENDPOINT).setProject(PROJECT_ID)

const team = new Teams(client)

const account = new Account(client)
export { client, account, team }
