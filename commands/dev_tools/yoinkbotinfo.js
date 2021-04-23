const commando = require('discord.js-commando');
const Discord = require('discord.js')
const prefix = '?'
const ms = require('ms')
const client = new Discord.Client()

module.exports = class BotInfoCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'ybstats',
            group: 'dev_tools',
            memberName: 'ybstats',
            description: 'Gives info about the bot.',
        })
    }
    async run (msg) {
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
            
    
    const serversIn = 9
    const totalUsers = 158
    let serverlist = ''
    client.guilds.cache.forEach((guild) => {
        serverlist = serverlist.concat(" - " + guild.name + ": ID: " + guild.id + "\n")
    })
    
    const serverIcon = 'https://cdn.discordapp.com/embed/avatars/1.png'
    
    let uptime = ms(this.client.uptime, { long: true });
    const timesUsed = "~8000"    

    const embed = new Discord.MessageEmbed()
    .setTitle('Global Info for Yoinkbot#1691')
    .setDescription(`# of Servers:`)
    .setColor('RANDOM')
    .setThumbnail(serverIcon)
    .addFields({name: 'Bot Owner: ', value: 'Xurxx#7879'})
    .addFields({name: "Server Count: ", value: serversIn, inline: true})
    .addFields({name: "# of Members", value: totalUsers, inline: true})
    .addFields({name: 'Commands used: ', value: timesUsed})
    .addFields({name: 'Uptime', value: uptime, inline: true})
    .addField('Did you know we have a beta bot?', 'It gets bleeding edge commands before Yoinkbot does! Use command ?invite to get the link!')
    .addField("Add Yoinkbot to your server!", "[Click here](https://discord.com/oauth2/authorize?client_id=724989158891847700&permissions=2147483639&scope=bot)")
    msg.channel.send(embed)
};
}
