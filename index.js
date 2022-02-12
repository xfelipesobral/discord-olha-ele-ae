const { Client, Intents } = require('discord.js')
const { BOT_TOKEN } = require('./config.json')

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

client.on('ready', () => {
    console.log(`Logado em "${client.user.tag}"`)
})

client.on('messageCreate', (message) => {
    console.log(message.content)
})

client.login(BOT_TOKEN)