
const discord = require ("discord.js")

module.exports = {
    name : ["echo"],
    description : "Either plays a game with you or repeats what you say" ,
    execute ( client , message , args  )  {
        if (!args[0]) return message.channel.send("What should I echo? Nothing, your girlfriend?")
        var response = args.join(" ")
     message.channel.send ({content : `🤖 : **${response}**`})
     return

        if (!args[0]) message.reply ("!PONG 🏓")
        if (args.length > 1) {
            response = args.join(" ")
            message.reply (`Now I will echo. 🔊 : ${response}`)
        }
    }
}
