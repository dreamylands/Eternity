
const discord = require ("discord.js")

module.exports = {
    name : ["ping" , "test"],
    description : "Either plays a game with you or repeats what you say" ,
    execute ( client , message , args  )  {
     message.channel.send ({content : "Pong ! 🏓"})
     return

        if (!args[0]) message.reply ("!PONG 🏓")
        if (args.length > 1) {
            response = args.join(" ")
            message.reply (`Now I will echo. 🔊 : ${response}`)
        }
    }
}
