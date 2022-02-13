import { Client } from 'discord.js'

import { ready } from '../listeners/ready'
import { commands } from '../listeners/commands'
import { channel } from '../listeners/channel'

class Bot {
    private client: Client

    constructor() {
        this.client = new Client({
            intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_VOICE_STATES']
        })
    }

    ready() {
        this.client.on('ready', ready)
    }

    commands() {
        this.client.on('messageCreate', message => {
            commands(this.client, message)
        })
    }

    channel() {
        this.client.on('voiceStateUpdate', (oldState, newState) => {
            channel(this.client, newState)
        })
    }

    login() {
        this.client.login(process.env.TOKEN)
    }

    init() {
        this.ready()
        this.commands()
        this.channel()
        this.login()
    }
}

export { Bot }