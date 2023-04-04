const fs = require ("fs")

module.exports = (client , discord) => {

const commandfiles = fs.readdirSync(`./src/commands/`).filter(file => file.endsWith(".js"))
for (const file of commandfiles) {
    const command = require (`../commands/${file}`)
    if (command.name){
        for (const name of command.name){
        client.commands.set(name , command)}
    }else {
        continue
    }
}

}