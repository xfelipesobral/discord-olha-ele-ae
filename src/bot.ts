import dotenv from 'dotenv'
import { Bot } from './client'

// Carrega arquivo de configuração .env
dotenv.config()

// Inicializa bot
const bot = new Bot()
bot.init()