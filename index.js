const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTcyMTM4NzAxNTA3Mzk5Njkw.G28teb.xjU5u_a0VZExSIM5QcZHgESRodO8-3Ili7M_Wg"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log('Logged in as ${client.user.tag}')
})

client.on("messageCreate", (message) => {
    if (message.content == "hi") {
        message.reply("Kill Yourself!")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "fuck") {
        message.reply("-ing kill yourself")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "do you wanna") {
        message.reply("fucking kill yourself?")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "seth") {
        message.reply("is awesome")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "thomas") {
        message.reply("is a god")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "hello") {
        message.reply("go die")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "goodbye") {
        message.reply("forever")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "goodnight") {
        message.reply("bye bitch")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "i love you") {
        message.reply("I HATE YOU")
    }
})



client.login(process.env.TOKEN)


