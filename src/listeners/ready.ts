import { Client } from 'discord.js'

function ready(client: Client) {
    console.log(`Connected on "${client.user?.tag}"`)
}

export { ready }