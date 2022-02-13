import { Message } from 'discord.js'

function commands(message: Message) {
    if (message.author.bot) return

    message.reply('Idiotinha')
}

export { commands }