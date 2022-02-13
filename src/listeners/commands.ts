import { Client, Message } from 'discord.js'

import { joinChannel } from './channel'

function commands(client: Client, message: Message) {
    if (message.author.bot) return
    
    const [flag, command, value] = message.content.split(' ')
    if (flag !== '!olhaeleai') return
 
    if (command === 'canal') {
        if (!value) return

        // Entrar no canal
        joinChannel(client, value)
    }
}

export { commands }