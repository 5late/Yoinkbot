const commando = require('discord.js-commando');
const { DiscordAPIError } = require('discord.js');
const fetch = require('node-fetch')
const Discord = require('discord.js')
const fs = require('fs')
const prefix = '?'

module.exports = class OneThousandCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'avatar',
            aliases: ['pfp', 'av', 'profilepicture'],
            group: 'misc',
            memberName: 'avatar',
            description: 'Displays your avatar',
        })
    }
    async run (msg) {
        let chance = Math.floor(Math.random()* 20)+1
        
        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        
        
        if(!args.length){
        let ruser = msg.author;
        var avatar = ruser.displayAvatarURL({dynamic: true})
        //var member= msg.member.mentions.first();
        //const users = member.displayAvatarURL({size: 2048})
        let embed = new Discord.MessageEmbed()
        .setTitle('Avatar URL')
        .setImage(msg.author.displayAvatarURL({dynamic: true}))
        .setURL(avatar)
        .setColor('#275BF0')
        msg.channel.send(embed)
        }else{
        let ruser = msg.mentions.users.first() || msg.author;
            
            var avatar = ruser.displayAvatarURL({dynamic: true, size: 256})
            //var member= msg.member.mentions.first();
            //const users = member.displayAvatarURL({size: 2048})
            let embed = new Discord.MessageEmbed()
            .setTitle('Avatar URL')
            .setImage(ruser.displayAvatarURL({dynamic: true}))
            .setURL(avatar)
            .setColor('#275BF0')
            msg.channel.send(embed)
        }
    }
}
