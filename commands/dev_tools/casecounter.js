const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');
module.exports = class KickCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'dev_casecount',
            group: 'dev_tools',
            memberName: 'dev_casecount',
            description: 'Sends the amount of cases globally unboxed by Yoinkbot.',
        })
    }
    async run (msg) {
           
        var countfile = fs.readFileSync("./counterfracture.txt", {"encoding": "utf-8"});
        var countfilehydra = fs.readFileSync("./counterhydra.txt", {"encoding": "utf-8"});

        const sendfinal = new Discord.MessageEmbed()
        .setTitle('Fracture Case')
        .setDescription('Global Fracture cases unboxed: ' + countfile.length)
        msg.channel.send(sendfinal)

        const sendfinalhydra = new Discord.MessageEmbed()
        .setTitle('Hydra Case')
        .setDescription('Global Hydra Cases unboxed: ' + countfilehydra.length)
        msg.channel.send(sendfinalhydra)
    }
}