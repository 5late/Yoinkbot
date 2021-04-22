const commando = require('discord.js-commando');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');
const client = new commando.CommandoClient;
const fs = require('fs')
const prefix = '?'
module.exports = class SimprateCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'lovecalc',
            group: 'misc',
            memberName: 'lovecalc',
            description: 'Calculate the love between two people',
            args:[
                    { 
                        key:'text',
                        prompt: 'Please name two people!',
                        type: 'string',
                    }
                ]
        })
    }
    
async run (msg, { text }) {
        let simprate = Math.floor(Math.random() * 100)
        
        
    const newembed = new Discord.MessageEmbed()
        .setColor('#00FFCC')
        .setTitle('Cupid')
        .addField("Result:", `${text}` + ' you are ' + simprate + '% in love! 💔💔💔')
        .setFooter("Yoinkbot collects your username and tag to improve our services. To find out whats being collected, contact the bot owner with the command '?owner'")
    if(simprate >50) {
    const newerembed = new Discord.MessageEmbed()
        .setColor('#00FF2E')
        .setTitle('Simprating Machine')
        .setDescription(`${text}` + ' you are ' + simprate + ' % in love! 😍😍😍')
        .setFooter("Yoinkbot collects your username and tag to improve our services. To find out whats being collected, contact the bot owner with the command '?owner'")
    msg.channel.send(newerembed);
    }
    else {
    msg.channel.send(newembed)
    }
}
}