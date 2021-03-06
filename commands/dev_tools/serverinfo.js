const commando = require('discord.js-commando');
const Discord = require('discord.js')
const prefix = '?'

module.exports = class ServerInfoCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'serverinfo',
            group: 'dev_tools',
            memberName: 'serverinfo',
            description: 'Gives info about the server.',
            aliases: [
                'sinfo'
            ]
        })
    }

async run (msg) {
            const args = msg.content.slice(prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();
            const ruser = msg.mentions.users.first() || msg.author;
            
    const guild = msg.guild
    const owner = msg.guild.member(guild.owner) ? guild.owner.toString() : guild.owner.user.tag;
    // if the user is in that guild it will mention him, otherwise it will use .tag
    const roleCount = msg.guild.roles.cache.size;
    const serverName = guild.name;
    const memberCount = guild.members.cache.filter(member => !member.user.bot).size;
    const emojiCount = msg.guild.emojis.cache.size
    const serverIcon = msg.guild.iconURL();
    const textChannels = msg.guild.channels.cache.filter((c) => c.type === "text").size;
    const voiceChannels = msg.guild.channels.cache.filter((c) => c.type === "voice").size;
    
    const embed = new Discord.MessageEmbed()
    .setTitle('Server Info for ' + serverName)
    .setColor('RANDOM')
    .setThumbnail(serverIcon)
    .addFields({name: 'Server Owner: ', value: owner})
    .addFields({name: "Number of Members", value: memberCount + ' (excludes bots)'})
    .addFields({name: "Number of Roles", value: roleCount})
    .addFields({name: "Number of Emojis", value: emojiCount})
    .addFields({name: 'Number of Text Channels', value: textChannels})
    .addFields({name: 'Number of Voice Channels', value: voiceChannels})
    .addField("Add Yoinkbot to your server!", "[Click here](https://discord.com/oauth2/authorize?client_id=724989158891847700&permissions=2147483639&scope=bot)")
    msg.channel.send(embed)

}
}
