const commando = require('discord.js-commando');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js')

module.exports = class PingPongCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'pong',
            group: 'misc',
            memberName: 'pong',
            description: 'Pongs!',
        })
    }
    async run (msg) {
        msg.channel.send('------------------>')
        await msg.channel.send('<------------------')
        const embed = new Discord.MessageEmbed()
        .setTitle('Pong! See details below:')
        .setAuthor(`${msg.author.username}`, `${msg.author.displayAvatarURL()}`)
        .addField(`Status command`, `?status`)
        .addField(`Help command:`, `?help`)
        .addField(`Ping Command:`, `?ping`)
        .addField(`Yoinkbot Stats:`, `?ybstats`)
        .addField(`Owner command:`, `?owner`)
        .setFooter(`Xurxx #7879`)

        msg.channel.send(embed)
    }
}