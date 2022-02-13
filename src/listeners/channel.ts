import { Client, VoiceState } from 'discord.js'

async function channel(client: Client, state: VoiceState) {
    const ch = await client.channels.fetch(state.channelId || '')
    if (!ch) return

    console.log('Trocou de canal...')

    // const connection = joinVoiceChannel({
    //         channelId,
    //         guildId,
    //         adapterCreator,
    //     })
}

export { channel }