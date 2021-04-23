const commando = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class OwnerCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'owner',
            group: 'dev_tools',
            memberName: 'owner',
            description: 'Sends the owner of Yoinkbot.',
        })
    }
async run (msg) {
           
        const owner = new Discord.MessageEmbed()
        .setTitle("The owner of this bot is Xurxx#7879")
        .setDescription("The github page for this bot is 'https://github.com/5late/Yoinkbot'.")
        .addFields({name: 'Developing Team',value: 'Xurxx#7879 is currently the only developer for Yoinkbot. To join the developing team contact him.'})
        .addFields({name: 'Auto-DM the owner', value: ' To automatically DM the owner with your request, use the command ?dmowner, along with the contents of your request. Example: ?dmowner Your request here.'})
        .setFooter("Yoinkbot collects your username and tag to improve the bot. To find out whats being collected, contact the bot owner using the command '?owner'")

        msg.channel.send(owner)
    }
}