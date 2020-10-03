const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');
module.exports = class CaseCountCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'd-casecount',
            group: 'dev_tools',
            memberName: 'd-casecount',
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
        
        fs.readFile("./information.txt", function (err, data) {
            if (err) throw err;
            var datata = data.toString('utf-8')
            if(data.includes('Xurxx#7879')){
             console.log((datata.length / 29) - .689655172413794)
            }
          });
    }
}