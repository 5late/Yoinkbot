const commando = require('discord.js-commando');
const fs = require('fs')
const client = new commando.CommandoClient;
const Discord = require('discord.js')
const prefix = '?'

module.exports = class InfoCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'd-serverinfo',
            group: 'dev_tools',
            memberName: 'd-serverinfo',
            description: 'Gives info about the server.',
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

    const id = msg.author.id
    console.log(id)
    const name = msg.member.user.tag;
    console.log(name)
    var information = [];
    information.push(name, id)
    var savedinfo = fs.readFileSync("./information.txt", {"encoding": "utf-8"});
        
    var newinfo = savedinfo;
    fs.writeFileSync("information.txt", newinfo.toString())
    
    fs.appendFileSync("information.txt", information.toString())

    fs.readFile("./information.txt", function (err, data) {
        if (err) throw err;
        var datata = data.toString('utf-8')
        if(data.includes('Xurxx#7879')){
         console.log((datata.length / 29) - .689655172413794)
        }
      });
}
}
