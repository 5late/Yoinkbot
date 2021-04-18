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
        
        //const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        //const command = args.shift().toLowerCase();
        //const igUsername = args[0].toLowerCase();
        
        let getJoke = async () => {
            let response = await fetch(
                "https://cat-fact.herokuapp.com/facts"
            )
            console.log(response)
        };
        let jokeValue = await getJoke();
        await msg.channel.send(jokeValue.text + ' | React with ▶️ to send punchline!')
    }
}