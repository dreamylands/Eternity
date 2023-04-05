const discord = require('discord.js')


module.exports = {
    name : ["ping" , "lag"],
    description: "shows the current latency of the bot", 
    async execute (client, message) {

    message.channel.send("🔊 : listening to my heartbeat...").then(async(m) =>{
    m.delete()
    await m.channel.send(`🤖 : Current Ping is **${m.createdTimestamp - message.createdTimestamp}** ms`)}
    )

    }
}