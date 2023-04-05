const discord = require('discord.js')
require("dotenv").config({debug : true})
const mongoose = require("mongoose")
const client = new discord.Client({
    intents: [discord.GatewayIntentBits.Guilds, discord.GatewayIntentBits.GuildMessages , discord.GatewayIntentBits.MessageContent]
})
const token = process.env.TOKEN
const db = process.env.DB
client.commands = new discord.Collection()
client.events = new discord.Collection()
const namearray = ['commandhandler' , 'eventhandler']
namearray.forEach(handler => {
    require(`./handlers/${handler}`)(client , discord)
})
client.once("ready" , async() => {

        client.user.setActivity('Over Elysian' , {type : "WATCHING"})
        console.log ("Eternity is online")
        await mongoose.connect(db , {
            useNewUrlParser : true ,
            useUnifiedTopology : true ,

        }).then (() => {
            console.log("connected to database")
        }).catch((err) => {
            console.log(err)
            mongoose.connection.close()
        })


})

client.login(token)