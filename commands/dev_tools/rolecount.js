const commando = require('discord.js-commando');
const prefix = '?'
const fs = require('fs')
const Discord = require('discord.js')

module.exports = class RoleCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roles',
            group: 'dev_tools',
            memberName: 'roles',
            description: 'Find users with a role.',
        })
    }

//rolesid = [];
    async run (msg) {

    let roleName = msg.content.split(" ").slice(1).join(" ");

    let membersWithRole = msg.guild.members.cache.filter(member => { 
        return member.roles.cache.find(guild => guild.name === roleName);
    }).map(member => {
        return `<@${member.user.id}>`;
    })

    let embed = new Discord.MessageEmbed()
        .setTitle(`Users with the ${roleName} role`)
        .setDescription(membersWithRole.join("\n"))
        .setColor('0xFFFF')
    return msg.channel.send(embed);

    }
}