const discord = require('discord.js')
require("dotenv").config({debug : true})
const client = new discord.Client({
    intents: [discord.GatewayIntentBits.Guilds, discord.GatewayIntentBits.GuildMessages , discord.GatewayIntentBits.MessageContent]
})
const token = process.env.TOKEN
client.commands = new discord.Collection()
client.events = new discord.Collection()
const namearray = ['commandhandler' , 'eventhandler']
namearray.forEach(handler => {
    require(`./handlers/${handler}`)(client , discord)
})
client.once("ready" , async() => {

        client.user.setActivity('Over Elysian' , {type : "WATCHING"})
        console.log ("Eternity is online")


})

client.login(token)