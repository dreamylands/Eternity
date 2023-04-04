const fs = require ("fs")

module.exports = (client , discord) => {

    const eventfiles = fs.readdirSync(`./src/events/`).filter(files => files.endsWith(".js"))
    for (const file of eventfiles){
        const event = require (`../events/${file}`)
        const eventname = file.split(".")[0]
        client.on(eventname , event.bind(null , discord , client ))
    }
}