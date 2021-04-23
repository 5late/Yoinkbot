const commando = require('discord.js-commando');
const fs = require('fs')
const Discord = require('discord.js')
module.exports = class OneThousandCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'redditinfo',
            group: 'dev_tools',
            memberName: 'redditinfo',
            description: 'Provides information about the Reddit post services.',
        })
    }
    async run (msg) {
           
    
        const embed = new Discord.MessageEmbed()
        .setTitle('Reddit Info')
        .setDescription('Below find a list of the subreddit officially supported by Yoinkbot.')
        .addFields({name:'r/dankmemes', value: 'Use command ?meme'})
        .addFields({name:'r/programminghumour',value: 'Use command ?phumour'})
        .addFields({name:'r/food', value: 'Use command ?food'})
        .addFields({name:'r/tifu', value: 'Use command ?tifu'})
        .addFields({name:'r/PCM', value: 'Use command ?pcm'})
        .addFields({name:'r/holup', value: 'Use command ?holup'})
        .setFooter("Yoinkbot collects your username and tag to improve our services. To find out whats being collected contact the bot owner with the command '?owner'")

        msg.channel.send(embed)

    }
}