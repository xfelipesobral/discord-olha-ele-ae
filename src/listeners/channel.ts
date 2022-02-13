import { AnyChannel, Client, VoiceState } from 'discord.js'
import { joinVoiceChannel, createAudioResource, createAudioPlayer } from '@discordjs/voice'
import { join } from 'path'

async function joinChannel(client: Client, id: string) {
    const ch: AnyChannel | null  = await client.channels.fetch(id)
    if (!ch) return

    if (ch.isVoice()) {
        joinVoiceChannel({
            channelId: ch.id,
            guildId: ch.guild.id,
            adapterCreator: ch.guild.voiceAdapterCreator
        })
    }    
}

function playAudio() {
    const resource = createAudioResource(join(__dirname, 'olhaeleai.mp3'), { inlineVolume : true })
    resource.volume?.setVolume(0.5)

    const player = createAudioPlayer()
    player.on('error', error => {
        console.error('Error:', error.message, 'with track');
    })

    console.log('Executou...')
    player.play(resource)
}

async function channel(client: Client, state: VoiceState) {
    const ch = await client.channels.fetch(state.channelId || '')
    if (!ch) return

    playAudio()
}

export { channel, joinChannel }