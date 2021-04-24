const commando = require('discord.js-commando');
const fetch = require('node-fetch')
const path = require('path');
const config = require(path.join(__dirname, '../../config', 'config.json'))
const prefix = config.prefix

module.exports = class JokeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'catfact',
            group: 'misc',
            memberName: 'catfact',
            description: 'Sends a dad joke',
        })
    }
async run (msg) {
    
    function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    }


    await fetch("https://cat-fact.herokuapp.com/facts").then(response => response.json()).then(data => {
        console.log(data)
        let number = getRandomInt(5)
        msg.channel.send(data[number].text)
    })
}
}