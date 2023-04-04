const commandhandler = require("../handlers/commandhandler")

require("dotenv").config()

module.exports = (discord , client  , message) => {
const prefix = process.env.PREFIX
if (!message.content.startsWith(prefix) || message.author.bot) return
const args = message.content.slice(prefix.length).split(/ +/)
const cmd = args.shift().toLowerCase()
const command = client.commands.get(cmd)
if (command) command.execute(client , message , args , discord)
}