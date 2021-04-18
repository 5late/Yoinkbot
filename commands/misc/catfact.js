const commando = require('discord.js-commando');
const { DiscordAPIError } = require('discord.js');
const fetch = require('node-fetch')
const Discord = require('discord.js')
const fs = require('fs')
const axios = require('axios')
const prefix = '?'

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