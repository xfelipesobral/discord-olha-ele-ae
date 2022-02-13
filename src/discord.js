const { Client } = require('discord.js')
const { joinVoiceChannel } = require('@discordjs/voice')

const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_VOICE_STATES'] })

client.on('ready', () => {
    console.log(`Logado em "${client.user.tag}"`)
})

client.on('messageCreate', (message) => {
    console.log(message.content)
})

client.on('voiceStateUpdate', async (oldState, newState) => {
    const channel = await client.channels.fetch(newState.channelId)
    if (!channel) return

    joinIntoChannel(channel.id, channel.guild.id, channel.guild.voiceAdapterCreator)
    //console.log('Conectou - ', channel.guild)
    // const connection = joinVoiceChannel({
    //     channelId: channel.id,
    //     guildId: channel.guild.id,
    //     adapterCreator: channel.guild.voiceAdapterCreator,
    // })
    
    // connection.disconnect()
    // return
    //console.log(connection, '<----')
})

function joinIntoChannel(channelId, guildId, adapterCreator) {
    const connection = joinVoiceChannel({
        channelId,
        guildId,
        adapterCreator,
    })
}

client.login(process.env.TOKEN)