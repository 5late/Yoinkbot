const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');

module.exports = class PrivacyCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'privacy',
            group: 'dev_tools',
            memberName: 'privacy',
            description: 'Read about our Privacy Policy.',
        })
    }
    async run (msg) {
           
        const embed = new Discord.MessageEmbed()
        .setTitle(`How does Yoinkbot treat your information?`)
        .setDescription(`We understand the importance of keeping your information safe. We take the best care to make sure that your information is handled with the utmost respect and care. Here is how:`)
        .addField(`What do we collect?`, `We collect your username, discriminator(tag), and ID. All of these are already publicly available on Discord. We store this information so we understand who is using Yoinkbot, and how we can improve our services to better meet your needs`)
        .addField(`Password Command:`, 'The password command is used to generate random, high security passwords. We **__NEVER__** store and passwords that are generated. To read more use the \n``?passwordprivacy`` command.')
        .addField(`How can I learn more?`, `Contact the bot owner, ||Xurxx#7879||, to learn more.`)
        .setFooter(`Yoinkbot`, `https://cdn.discordapp.com/embed/avatars/1.png`)

        msg.channel.send(embed)

    }
}