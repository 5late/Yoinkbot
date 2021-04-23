const commando = require('discord.js-commando');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');
const client = new commando.CommandoClient;
const fs = require('fs')
const prefix = '?'
module.exports = class SimprateCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'simprate',
            group: 'misc',
            memberName: 'simprate',
            description: 'Simp rate',
        })
    }

    
    async run (msg) {
        let simprate = Math.floor(Math.random() * 100)
        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        let rMember = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[0])) // Takes the user mentioned, or the ID of a user
        
        
        const newembed = new Discord.MessageEmbed()
            .setColor('#00FFCC')
            .setTitle('Simprating machine')
            .addField("Result:", `${rMember}` + ' you are ' + simprate + '% simp')
            .setFooter(`Yoinkbot`)            
            msg.channel.send(newembed)
    }
}