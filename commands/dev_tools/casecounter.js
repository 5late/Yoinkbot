const commando = require('discord.js-commando');
const fs = require('fs')
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
        msg.channel.send('Global Fracture cases unboxed: ' + countfile.length)
        var countfilehydra = fs.readFileSync("./counterhydra.txt", {"encoding": "utf-8"});
        msg.channel.send('Global Hydra Cases unboxed: ' + countfilehydra.length)

    }
}